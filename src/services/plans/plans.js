import { formatUsd } from "@/lib/utils";

export const PlanProduct = {
  BuildNinja: "BuildNinja",
};

export async function fetchPlansFromAPI() {
  try {
    const url =
      process.env.NEXT_PUBLIC_USR_SVC_URL.trimEnd('/') +
      "/api/Subscription/plans?source=1";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch plans");

    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    return null;
  }
}

// Only plans that are purchasable right now. Pricing is USD-only -
// INR (and any other currency) plans are never shown.
export function filterActivePlans(plans) {
  return (Array.isArray(plans) ? plans : []).filter(
    (plan) =>
      plan.isActive === true &&
      plan.currency === "USD" &&
      Array.isArray(plan.products) &&
      plan.products.length > 0
  );
}

// Group active plans by product name (BuildNinja)
export function groupPlansByProduct(plans) {
  return (Array.isArray(plans) ? plans : []).reduce((acc, plan) => {
    (plan.products || []).forEach((product) => {
      if (product.name === PlanProduct.BuildNinja) {
        (acc[product.name] = acc[product.name] || []).push(plan);
      }
    });
    return acc;
  }, {});
}

// One-call helper: fetches, filters and groups active plans by product
export async function fetchActivePlansByProduct() {
  const plans = await fetchPlansFromAPI();
  if (!Array.isArray(plans)) return null;

  const activePlans = filterActivePlans(plans);
  return {
    plans: activePlans,
    byProduct: groupPlansByProduct(activePlans),
  };
}

// Cheapest active USD monthly paid plan (e.g. Shogun) - used for live pricing copy
export const findPaidMonthlyPlan = (plans) => {
  if (!Array.isArray(plans)) return null;
  return (
    plans
      .filter(
        (p) =>
          p.isActive === true &&
          p.currency === "USD" &&
          p.billingCycle === "Monthly" &&
          Number(p.price) > 0
      )
      .sort((a, b) => Number(a.price) - Number(b.price))[0] ?? null
  );
};

// Active USD free plan (Growth/Solo) - used for live free-tier copy
export const findFreePlan = (plans) => {
  if (!Array.isArray(plans)) return null;
  const free = plans.filter(
    (p) => p.isActive === true && p.currency === "USD" && Number(p.price) === 0
  );
  return (
    free.find((p) => String(p.name || "").toLowerCase().includes("growth")) ||
    free[0] ||
    null
  );
};

const FREE_FEATURE_DEFS = [
  { match: "projects", make: (v) => `up to ${v} projects` },
  { match: "configurations", make: (v) => `up to ${v} build configurations` },
  {
    match: "build history retention",
    make: (v) => `${v}-day build history retention`,
  },
  {
    match: "sso integrations",
    make: (v) => `${v} SSO integration${v === 1 ? "" : "s"}`,
  },
];

// Human-readable summary of a free plan's limits, e.g.
// "up to 10 projects, up to 10 build configurations, 30-day history, ..."
// (the parallel build execution feature is hidden per team decision, so it
// is omitted from the summary)
export const describeFreePlanFeatures = (plan) => {
  if (!plan) return null;
  const parts = [];
  const users = Number(plan.allowedUsers);
  if (Number.isFinite(users) && users > 0) {
    parts.push(`up to ${users.toLocaleString("en-US")} users`);
  }
  const features = Array.isArray(plan.features) ? plan.features : [];
  FREE_FEATURE_DEFS.forEach(({ match, make }) => {
    const f = features.find((feat) =>
      String(feat.featureName || "")
        .toLowerCase()
        .includes(match)
    );
    if (!f || f.featureType === 5) return;
    const v = Number(f.value);
    if (!Number.isFinite(v) || v <= 0 || v >= 999999) return;
    parts.push(make(v));
  });
  return parts.length ? parts.join(", ") : null;
};

// Active USD paid plan for a specific billing cycle (e.g. "Yearly")
export const findPlanForCycle = (plans, cycle) => {
  if (!Array.isArray(plans)) return null;
  return (
    plans.find(
      (p) =>
        p.isActive === true &&
        p.currency === "USD" &&
        Number(p.price) > 0 &&
        p.billingCycle === cycle
    ) ?? null
  );
};

// Discount comparison sentence for the paid (Shogun) plan across billing
// cycles, computed from live plan prices, e.g.
// "Yearly billing saves you 33% vs monthly - $1,599/year (just $133.25/month)
// instead of $199/month ($2,388/year). ..."
export const describeShogunBilling = (plans) => {
  const monthly = findPaidMonthlyPlan(plans);
  const yearly = findPlanForCycle(plans, "Yearly");
  const twoYear = findPlanForCycle(plans, "2-Years");
  const threeYear = findPlanForCycle(plans, "3-Years");
  if (!monthly || !yearly || !twoYear || !threeYear) return null;

  const effMonthly = (plan, months) =>
    `${formatUsd(Number(plan.price) / months)}/month`;
  const savingsPct = (plan, months) => {
    const annualized = Number(monthly.price) * months;
    const saved = 1 - Number(plan.price) / annualized;
    return `${Math.round(saved * 100)}%`;
  };

  return (
    `Yearly billing saves you ${savingsPct(yearly, 12)} vs monthly - ` +
    `${formatUsd(yearly.price)}/year (just ${effMonthly(yearly, 12)}) instead of ` +
    `${formatUsd(monthly.price)}/month (${formatUsd(Number(monthly.price) * 12)}/year). ` +
    `Multi-year plans save even more: 2-year ${formatUsd(twoYear.price)} upfront ` +
    `(${effMonthly(twoYear, 24)} - save ${savingsPct(twoYear, 24)}); ` +
    `3-year ${formatUsd(threeYear.price)} upfront (${effMonthly(threeYear, 36)} - ` +
    `save ${savingsPct(threeYear, 36)}).`
  );
};

const PLANS_URL = () =>
  `${process.env.NEXT_PUBLIC_USR_SVC_URL.trimEnd('/')}/api/Subscription/plans?source=1`;

// Build-time fetch. Throws so `next build` fails when plans cannot be
// fetched - the pricing page must never ship without live plan data.
export async function fetchActivePlansForBuild() {
  const url = PLANS_URL();

  let res;
  try {
    res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // force-cache: runs once at build time (avoids Next treating the
      // route as dynamic via revalidate: 0, which static export forbids)
      cache: "force-cache",
    });
  } catch (err) {
    const message = `[Pricing Build] Plans not fetched - build aborted. Subscription service unreachable at ${url}: ${err.message}`;
    console.error(message);
    throw new Error(message);
  }

  if (!res.ok) {
    const message = `[Pricing Build] Plans not fetched - build aborted. Subscription service returned HTTP ${res.status} ${res.statusText} for ${url}`;
    console.error(message);
    throw new Error(message);
  }

  let plans;
  try {
    plans = await res.json();
  } catch (err) {
    const message = `[Pricing Build] Plans not fetched - build aborted. Invalid JSON response from ${url}: ${err.message}`;
    console.error(message);
    throw new Error(message);
  }

  if (!Array.isArray(plans)) {
    const message = `[Pricing Build] Plans not fetched - build aborted. Expected an array from ${url} but got: ${typeof plans}`;
    console.error(message);
    throw new Error(message);
  }

  const activePlans = filterActivePlans(plans);
  const byProduct = groupPlansByProduct(activePlans);

  if (!byProduct.BuildNinja?.length) {
    const message = `[Pricing Build] Plans not fetched - build aborted. No active BuildNinja plans found in ${url} (got ${plans.length} raw plans, 0 active).`;
    console.error(message);
    throw new Error(message);
  }

  return { plans: activePlans, byProduct };
}

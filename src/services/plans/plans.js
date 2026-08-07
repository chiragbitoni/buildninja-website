export const PlanProduct = {
  BuildNinja: "BuildNinja",
  KenzoAI: "KenzoAI",
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

// Only plans that are purchasable right now
export function filterActivePlans(plans) {
  return (Array.isArray(plans) ? plans : []).filter(
    (plan) => plan.isActive === true && Array.isArray(plan.products) && plan.products.length > 0
  );
}

// Group active plans by product name (BuildNinja / KenzoAI)
export function groupPlansByProduct(plans) {
  return (Array.isArray(plans) ? plans : []).reduce((acc, plan) => {
    (plan.products || []).forEach((product) => {
      if (product.name === PlanProduct.BuildNinja || product.name === PlanProduct.KenzoAI) {
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

  if (!byProduct.BuildNinja?.length && !byProduct.KenzoAI?.length) {
    const message = `[Pricing Build] Plans not fetched - build aborted. No active BuildNinja/KenzoAI plans found in ${url} (got ${plans.length} raw plans, 0 active).`;
    console.error(message);
    throw new Error(message);
  }

  return { plans: activePlans, byProduct };
}

"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import s from "./PricingPlans.module.css";
import { paths } from "../../../../../public/static/paths";
import { ShogunIcon, EnterpriseIcon } from "../PricingHero/PricingIcons";
import { fetchActivePlansByProduct, PlanProduct } from "@/services/plans/plans";
import { env } from "@/lib/config/env";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const CYCLE_ORDER = ["Monthly", "Yearly", "2-Years", "3-Years"];
const CYCLE_LABELS = {
  Monthly: "month",
  Yearly: "year",
  "2-Years": "2 years",
  "3-Years": "3 years",
  Semiannual: "6 months",
};

const VALIDITY_LABELS = {
  Monthly: "1 month",
  Yearly: "1 year",
  "2-Years": "2 years",
  "3-Years": "3 years",
  Semiannual: "6 months",
};

const CYCLE_BADGES = {
  Monthly: "MOST POPULAR",
  Yearly: "BEST VALUE",
  "2-Years": "BEST SAVINGS",
  "3-Years": "MAX SAVINGS",
};

const getMonths = (cycle) =>
  ({ Monthly: 1, Yearly: 12, "2-Years": 24, "3-Years": 36, Semiannual: 6 }[cycle] ?? 1);

const formatMoney = (value, currency) => {
  const num = Number(value) || 0;
  try {
    return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
      style: "currency",
      currency: ["USD", "INR"].includes(currency) ? currency : "USD",
      maximumFractionDigits: 2,
    }).format(num);
  } catch {
    return `$${num.toFixed(2)}`;
  }
};

const isUnlimited = (v) => String(v) === "999999";
const formatValue = (v) =>
  isUnlimited(v) ? "Unlimited" : Number(v).toLocaleString("en-US");

const featureValueText = (f) => {
  const v = formatValue(f.value);
  if (isUnlimited(f.value)) return v;
  const name = String(f.featureName || "").toLowerCase();
  if (
    name.includes("duration") ||
    name.includes("audit") ||
    name.includes("history") ||
    name.includes("retention")
  ) {
    return `${v} days`;
  }
  return v;
};

const featureText = (f) => {
  const desc = f.featureDescription || "";
  if (desc.includes("${val}") && f.value != null) {
    return desc.replace("${val}", featureValueText(f));
  }
  if (desc) {
    if (f.value != null && String(f.value) !== "" && f.featureType === 2) {
      return `${featureValueText(f)} · ${desc}`;
    }
    return desc;
  }
  return desc;
};

const isUsableFeature = (f) =>
  f.featureType !== 5 &&
  String(f.featureName || "").toLowerCase() !== "gst" &&
  Boolean(featureText(f));

// Features the team asked to hide from the plans feature list. Matched on
// the rendered description text (e.g. the "10 parallel build execution on
// Build agents" line produced by both the Concurrent Builds and Build
// Agents API features) - if the API later changes the description, the
// feature shows again automatically.
const HIDDEN_FEATURE_TEXTS = ["parallel build execution on build agents"];

const isHiddenFeature = (f) => {
  const text = featureText(f).toLowerCase();
  return HIDDEN_FEATURE_TEXTS.some((hidden) => text.includes(hidden));
};

const getSavingsPct = (plan, namePlans) => {
  if (!plan || plan.billingCycle === "Monthly") return 0;
  const monthly = (namePlans || []).find((p) => p.billingCycle === "Monthly");
  if (!monthly) return 0;
  const monthlyPrice = Number(monthly.price);
  if (!monthlyPrice) return 0;
  const effective = Number(plan.price) / getMonths(plan.billingCycle);
  return Math.max(0, Math.round(((monthlyPrice - effective) / monthlyPrice) * 100));
};

const getPlanForCycle = (group, cycle) =>
  group.plans.find((p) => p.billingCycle === cycle) ||
  group.plans.find((p) => p.billingCycle === "Monthly") ||
  group.plans[0];

const FeatureList = ({ plan, showUsers, minRows = 0 }) => {
  const items = [];
  if (showUsers) {
    items.push({
      key: "users",
      text: isUnlimited(plan.allowedUsers)
        ? "Unlimited users"
        : `Up to ${plan.allowedUsers} users`,
    });
  }
  (plan.features || []).forEach((f) => {
    if (!isUsableFeature(f) || isHiddenFeature(f)) return;
    items.push({ key: f.featureId || f.featureName, text: featureText(f) });
  });
  const rowHeightRem = 0.88 * 1.45;
  const gapRem = 10 / 16;
  const minHeight =
    minRows > items.length
      ? `${minRows * rowHeightRem + Math.max(0, minRows - 1) * gapRem}rem`
      : undefined;
  return (
    <ul className={s.featureList} style={minHeight ? { minHeight } : undefined}>
      {items.map((it) => (
        <li key={it.key} className={s.featureItem}>
          <Image
            width={16}
            height={16}
            src={paths.icons.greenTick}
            alt="✓"
            className={s.featureTick}
          />
          <span>{it.text}</span>
        </li>
      ))}
    </ul>
  );
};

const BuildNinjaCard = ({ group, cycle, onCycleChange }) => {
  if (group.isFree) {
    const plan = group.plans[0];
    return (
      <motion.div className={`${s.card} ${s.cardFree}`} variants={itemVariants}>
        <div className={s.cardHead}>
          <span className={`${s.cardHighlight} ${s.cardHighlightFree}`}>
            <span className={s.blinkDot} />
            FREE
          </span>
          <div className={s.cardIcon}>
            <ShogunIcon color="var(--color-info)" />
          </div>
        </div>
        <h3 className={s.cardEdition}>
          {group.name} <span className={s.editionSuffix}>Edition</span>
        </h3>
        <div className={s.priceBlock}>
          <p className={s.cardPrice}>Free</p>
          <p className={s.cardPerMonth}>License valid for 6 months</p>
        </div>
        <FeatureList plan={plan} showUsers />
        <div className={s.cardFooter}>
          <a
            className={s.btnPrimary}
            href={`${env.MY_ACCOUNT}/order?planId=${plan.id}`}
          >
            Claim Free Plan
            <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
          </a>
          <p className={s.cardCtaNote}>
            No credit card required · License renews free
          </p>
        </div>
      </motion.div>
    );
  }

  const plan = getPlanForCycle(group, cycle);
  const savings = getSavingsPct(plan, group.plans);
  const isMultiYear = plan.billingCycle !== "Monthly";
  const perMonth = Number(plan.price) / getMonths(plan.billingCycle);
  let maxRows = 1;
  group.plans.forEach((p) => {
    const usable = (p.features || []).filter((f) => isUsableFeature(f)).length;
    if (usable + 1 > maxRows) maxRows = usable + 1;
  });

  return (
    <motion.div className={`${s.card} ${s.cardPaid}`} variants={itemVariants}>
      <div className={s.cardHead}>
        <span className={`${s.cardHighlight} ${s.cardHighlightFeatured}`}>
          <span className={s.blinkDot} />
          {CYCLE_BADGES[plan.billingCycle] || "MOST POPULAR"}
        </span>
        <div className={s.cardIcon}>
          <EnterpriseIcon />
        </div>
      </div>
      <h3 className={s.cardEdition}>
        {group.name} <span className={s.editionSuffix}>Edition</span>
      </h3>

      <div className={s.priceBlock}>
        <p className={s.cardPrice}>
          {formatMoney(plan.price, plan.currency)}
          <span className={s.cardPriceSuffix}>
            {" "}/ {CYCLE_LABELS[plan.billingCycle] || plan.billingCycle.toLowerCase()}
          </span>
        </p>
        {isMultiYear ? (
          <p className={s.cardPerMonth}>
            {formatMoney(perMonth, plan.currency)}/mo equivalent
            {savings > 0 && (
              <span className={s.savingsBadge}>SAVE {savings}%</span>
            )}
          </p>
        ) : (
          <p className={s.cardPerMonth}>
            One-time payment · License valid for the selected term
          </p>
        )}
      </div>

      {/* Billing cycle selector - below the price */}
      {!/shogun/i.test(group.name) &&
        CYCLE_ORDER.some(
          (c) => c !== "Monthly" && group.plans.some((p) => p.billingCycle === c)
        ) && (
        <p className={s.cycleNote}>
          Multi-year plans are billed once up front. The more years you
          commit, the more you save.
        </p>
      )}

      <div className={s.cycleBar}>
        {CYCLE_ORDER.map((c) => {
          const available = group.plans.some((p) => p.billingCycle === c);
          return (
            <button
              key={c}
              disabled={!available}
              className={`${s.cycleBtn} ${
                cycle === c ? s.cycleBtnActive : ""
              }`}
              onClick={() => onCycleChange(c)}
              title={available ? c : "Coming soon"}
            >
              {cycle === c && (
                <motion.span
                  layoutId="cyclePill"
                  className={s.cyclePill}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className={s.cycleBtnName}>
                {c === "2-Years" ? "2-Year" : c === "3-Years" ? "3-Year" : c}
              </span>
              {!available && <span className={s.cycleSoon}>Soon</span>}
            </button>
          );
        })}
      </div>

      <FeatureList plan={plan} showUsers minRows={maxRows} />
      <div className={s.cardFooter}>
        <a
          className={s.btnPrimary}
          href={`${env.MY_ACCOUNT}/order?planId=${plan.id}`}
        >
          Buy Now
          <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
        </a>
        <p className={s.cardCtaNote}>
          {plan.billingCycle === "Monthly"
            ? "Upgrade anytime"
            : `One-time payment for ${CYCLE_LABELS[plan.billingCycle]}`}
        </p>
      </div>
    </motion.div>
  );
};

const Skeleton = () => (
  <div className={s.skeletonGrid}>
    {[0, 1].map((i) => (
      <div key={i} className={s.skeletonCard} />
    ))}
  </div>
);

export default function PricingPlans({ plansData }) {
  const hasInitialData = Boolean(plansData?.byProduct);
  const [byProduct, setByProduct] = useState(plansData?.byProduct ?? null);
  const [loading, setLoading] = useState(!hasInitialData);
  const [error, setError] = useState(false);
  const [cycle, setCycle] = useState("Monthly");

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    const result = await fetchActivePlansByProduct();
    if (!result) {
      setError(true);
      setLoading(false);
      return;
    }
    setByProduct(result.byProduct);
    if (result.plans?.length) {
      localStorage.setItem("plans", JSON.stringify(result.plans));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Plans are fetched at build time and baked into the static page -
    // no runtime fetch. localStorage is still hydrated for other flows
    // (addtocart / install dashboard) that read the cached plan list.
    if (hasInitialData) {
      if (plansData?.plans?.length) {
        localStorage.setItem("plans", JSON.stringify(plansData.plans));
      }
      return;
    }
    load();
  }, [hasInitialData, plansData, load]);

  const buildNinjaPlans = byProduct?.[PlanProduct.BuildNinja] || [];

  const bnGroups = useMemo(() => {
    const map = new Map();
    buildNinjaPlans.forEach((plan) => {
      const key = plan.name.trim();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(plan);
    });
    return Array.from(map.entries()).map(([name, plans]) => ({
      name,
      plans,
      isFree: Number(plans[0].price) === 0,
    }));
  }, [buildNinjaPlans]);

  const freeGroup = bnGroups.find((g) => g.isFree);
  const paidGroups = bnGroups.filter((g) => !g.isFree);

  const cardList = [freeGroup, ...paidGroups]
    .filter(Boolean)
    .map((group) => ({
      key: group.name,
      node: (
        <BuildNinjaCard
          group={group}
          cycle={cycle}
          onCycleChange={setCycle}
        />
      ),
    }));

  return (
    <section className={s.section}>
      <motion.div
        className={s.inner}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span className={s.badge} variants={itemVariants}>
          <span className={s.badgeDot} />
          No Per-Seat Pricing · Ever
        </motion.span>

        <motion.h1 className={s.title} variants={itemVariants}>
          Self-Hosted CI/CD Without <span className={s.accent}>Pricing Surprises</span>
        </motion.h1>

        <motion.p className={s.subtitle} variants={itemVariants}>
          Choose your billing period and save more with longer-term plans.
        </motion.p>

        {/* Cards */}
        {loading ? (
          <Skeleton />
        ) : error ? (
          <motion.div className={s.errorBox} variants={itemVariants}>
            <p className={s.errorText}>
              We couldn&apos;t load the latest plans. Please try again.
            </p>
            <button className={s.retryBtn} onClick={load}>
              Retry
            </button>
          </motion.div>
        ) : cardList.length ? (
          <motion.div
            className={s.cardsGrid}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {cardList.map((card) => (
              <div key={card.key} className={s.cardMotionWrapper}>
                {card.node}
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.p className={s.emptyText} variants={itemVariants}>
            No active plans available right now. Please check back soon.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

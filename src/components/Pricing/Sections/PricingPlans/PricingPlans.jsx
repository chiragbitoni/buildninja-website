"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import s from "./PricingPlans.module.css";
import { paths } from "../../../../../public/static/paths";
import { ShogunIcon, EnterpriseIcon, KenzoAIIcon } from "../PricingHero/PricingIcons";
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

const KENZO_MODELS = ["Economy", "Optimised", "Best"];

const MODEL_TIER_LABELS = {
  1: "Economy",
  2: "Optimised",
  3: "Economy + Optimised",
  4: "Best",
  5: "Economy + Best",
  6: "Optimised + Best",
  7: "All",
};

const modelTiersIncluded = (value) => {
  const n = Number(value) || 0;
  return KENZO_MODELS.filter((_, i) => n & (1 << i));
};

const featureValueText = (f) => {
  const name = String(f.featureName || "").toLowerCase();
  if (name.includes("model tier")) {
    const tier = MODEL_TIER_LABELS[Number(f.value)];
    return tier || (Number(f.value) >= 7 ? "All" : formatValue(f.value));
  }
  if (name.includes("duration") || name.includes("audit")) {
    return `${formatValue(f.value)} days`;
  }
  return formatValue(f.value);
};

const featureText = (f) => {
  const desc = f.featureDescription || "";
  if (desc.includes("${val}") && f.value != null) {
    return desc.replace("${val}", formatValue(f.value));
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
    if (!isUsableFeature(f)) return;
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

const KenzoStrip = ({ freePlan, color = "var(--color-primary)" }) => {
  if (!freePlan) return null;
  const credits = (freePlan.features || []).find(
    (f) => String(f.featureName || "").toLowerCase() === "credits"
  );
  return (
    <div className={s.kenzoStrip}>
      <div className={s.kenzoStripRow}>
        <div className={s.kenzoStripIcon}>
          <KenzoAIIcon color={color} />
        </div>
        <div className={s.kenzoStripText}>
          <span className={s.kenzoStripTitle}>KenzoAI Credits</span>
          <span className={s.kenzoStripDesc}>
            {credits
              ? `${formatValue(credits.value)} AI credits included - free`
              : "AI credits included - free"}
          </span>
        </div>
        <a
          className={s.kenzoStripBtn}
          href={`${env.MY_ACCOUNT}/order?planId=${freePlan.id}`}
        >
          Claim Free Credits
          <Image width={14} height={14} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
        </a>
      </div>
      <button
        type="button"
        className={s.kenzoStripMore}
        onClick={() =>
          document
            .getElementById("kenzo-slider")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        See more KenzoAI plans
      </button>
    </div>
  );
};

const BuildNinjaCard = ({ group, cycle, onCycleChange, kenzoFreePlan }) => {
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
        <KenzoStrip freePlan={kenzoFreePlan} color="var(--color-info)" />
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

      {/* Billing cycle selector - inside the paid card */}
      {CYCLE_ORDER.some(
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
            Billed monthly · Cancel anytime
            <span className={s.savingsBadge}>FLEXIBLE</span>
          </p>
        )}
      </div>
      <FeatureList plan={plan} showUsers minRows={maxRows} />
      <KenzoStrip freePlan={kenzoFreePlan} />
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
            ? "Upgrade or cancel anytime"
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

const KenzoSliderSelector = ({ kenzoCards }) => {
  if (!kenzoCards.length) return null;
  const [packIndex, setPackIndex] = useState(0);
  const packFeatures = (p) =>
    (p.features || []).filter(
      (f) =>
        isUsableFeature(f) &&
        String(f.featureName || "").toLowerCase() !== "credits"
    );
  const sliderPct =
    kenzoCards.length > 1
      ? (packIndex / (kenzoCards.length - 1)) * 100
      : 0;

  const card = kenzoCards[packIndex] || kenzoCards[0];
  const { plan, credits } = card;
  const isFree = Number(plan.price) === 0;
  const features = packFeatures(plan);
  const modelTierFeature = features.find((f) =>
    String(f.featureName || "").toLowerCase().includes("model tier")
  );
  const modelBits = Number(modelTierFeature?.value) || 0;

  return (
    <motion.section
      id="kenzo-slider"
      className={s.selectorSection}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={s.packsHeader}>
        <span className={s.packsBadge}>
          <span className={s.blinkDot} />
          KENZOAI
        </span>
        <h2 className={s.packsTitle}>Pick Your AI Credit Pack</h2>
        <p className={s.packsSubtitle}>
          Slide to compare KenzoAI credit packs - AI code analysis credits that
          work inside your BuildNinja pipelines.
        </p>
      </div>

      {kenzoCards.length > 1 && (
        <div className={s.packsSliderWrap}>
          <p className={s.selectorSliderHint}>Slide to pick your AI credits</p>
          <div className={s.packsSliderLabels}>
                {kenzoCards.map((c, idx) => {
                  const creditsValue =
                    c.credits &&
                    c.credits.value != null &&
                    String(c.credits.value) !== ""
                      ? Number(c.credits.value)
                      : null;
                  const label =
                    creditsValue !== null && Number.isFinite(creditsValue)
                      ? creditsValue.toLocaleString("en-US")
                      : Number(c.plan.price) === 0
                      ? "Free"
                      : c.plan.name || "Credits";
                  return (
                    <button
                      key={c.key}
                      type="button"
                      title={c.plan.name}
                      className={`${s.packsSliderLabel} ${
                        idx === packIndex ? s.packsSliderLabelActive : ""
                      }`}
                      onClick={() => setPackIndex(idx)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <input
                type="range"
                className={s.packsSlider}
                style={{ "--pct": `${sliderPct}%` }}
                min={0}
                max={kenzoCards.length - 1}
                step={1}
                value={packIndex}
                onChange={(e) => setPackIndex(Number(e.target.value))}
                aria-label="Select KenzoAI credit pack"
              />
              <div className={s.packsSliderValue}>
                <span className={s.packsSliderName}>
                  {`${plan.name} Plan`}
                </span>
                <span className={s.packsSliderPrice}>
                  {isFree
                    ? "Free"
                    : formatMoney(plan.price, plan.currency)}
                </span>
              </div>
        </div>
      )}

      <div
        className={`${s.selectorSummary} ${
          isFree ? s.selectorSummaryFree : ""
        }`}
      >
        {features.length > 0 && (
          <ul className={s.selectorFeatures}>
            <li className={s.selectorFeatureBadge}>
              <KenzoAIIcon
                color={isFree ? "var(--color-info)" : "var(--color-primary)"}
              />
              <span
                className={`${s.cardHighlight} ${
                  isFree ? s.cardHighlightFree : s.cardHighlightKenzo
                }`}
              >
                <span className={s.blinkDot} />
                {isFree ? "ONE-TIME ONLY" : "CREDITS ADD-ON"}
              </span>
            </li>
            {features.map((f) => (
              <li key={f.featureId || f.featureName}>
                <span className={s.selectorFeatureCheck} aria-hidden="true">
                  ✓
                </span>
                {f.featureName}
                {f.value != null && String(f.value) !== "" && (
                  <span className={s.selectorFeatureCount}>
                    {featureValueText(f)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className={s.selectorSummaryRow}>
          <div className={s.selectorInfoCol}>
            <h3 className={s.selectorPlanName}>
              {`${plan.name} Plan`}
            </h3>
            <p className={s.selectorPrice}>
              {isFree ? "Free" : formatMoney(plan.price, plan.currency)}
            </p>
            {credits &&
              credits.value != null &&
              String(credits.value) !== "" && (
                <div className={s.selectorCreditsBlock}>
                  <p className={s.selectorCredits}>
                    {formatValue(credits.value)}
                  </p>
                  <p className={s.selectorCreditsLabel}>AI credits included</p>
                </div>
              )}
            <p className={s.selectorValidity}>
              {isFree ? "Free" : formatMoney(plan.price, plan.currency)}
              <span className={s.selectorPerMonth}>
                {" "}· Validity:{" "}
                {VALIDITY_LABELS[plan.billingCycle] || plan.billingCycle}
              </span>
            </p>
          </div>

          <div className={s.selectorActionCol}>
            {modelTierFeature && (
              <div className={s.selectorModels}>
                <span className={s.selectorModelsLabel}>Models included</span>
                <div className={s.selectorModelsChips}>
                  {KENZO_MODELS.map((model, i) => (
                    <span
                      key={model}
                      className={`${s.selectorModelsChip} ${
                        modelBits & (1 << i) ? s.selectorModelsChipActive : ""
                      }`}
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              className={s.btnPrimary}
              href={`${env.MY_ACCOUNT}/order?planId=${plan.id}`}
            >
              {isFree ? "Claim Free Credits" : "Buy credits"}
              <Image
                width={16}
                height={16}
                className={s.btnIcon}
                src={paths.icons.navigation}
                alt="→"
              />
            </a>
            <p className={s.cardCtaNote}>
              {isFree
                ? "No credit card required"
                : "Credits added instantly - use them in your BuildNinja pipelines"}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

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
  const kenzoPlans = byProduct?.[PlanProduct.KenzoAI] || [];

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

  const kenzoFreePlan = kenzoPlans.find((p) => Number(p.price) === 0);

  const kenzoCards = useMemo(
    () =>
      [...kenzoPlans]
        .sort((a, b) => Number(a.price) - Number(b.price))
        .map((plan) => {
          const credits = (plan.features || []).find(
            (f) => String(f.featureName || "").toLowerCase() === "credits"
          );
          return { key: plan.id, plan, credits };
        }),
    [kenzoPlans]
  );

  const cardList = [freeGroup, ...paidGroups]
    .filter(Boolean)
    .map((group) => ({
      key: group.name,
      node: (
        <BuildNinjaCard
          group={group}
          cycle={cycle}
          onCycleChange={setCycle}
          kenzoFreePlan={kenzoFreePlan}
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
          BuildNinja bills by billing cycle with multi-year discounts. Add
          KenzoAI credits to run AI code analysis inside your pipelines.
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

        {!loading && !error && (
          <KenzoSliderSelector kenzoCards={kenzoCards} />
        )}
      </motion.div>
    </section>
  );
}

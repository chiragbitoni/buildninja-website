"use client";
import { useSelector, useDispatch } from "react-redux";
import { setRegion, setBilling, setMultiYear } from "@/redux/slice/pricingSlice";
import s from "./PricingHero.module.css";
import { useRouter } from "next/navigation";
import {
  secondSectionTextIndia,
  secondSectionTextGlobal,
  secondSectionEnterpriseCardText,
} from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import { useEffect, useState } from "react";
import { fetchPlansFromAPI } from "@/services/plans/plans";
import Image from "next/image";

export default function PricingHero() {
  const dispatch = useDispatch();
  const { region, billing, multiYear } = useSelector((s) => s.pricing);
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const router = useRouter();

  const Spinner = () => <span className={s.spinner} />;

  async function fetchAndStorePlans() {
    setLoadingPlans(true);
    const fetched = await fetchPlansFromAPI();
    if (fetched && Array.isArray(fetched)) {
      localStorage.setItem("plans", JSON.stringify(fetched));
      setPlans(fetched);
    }
    setLoadingPlans(false);
  }

  useEffect(() => {
    const stored = localStorage.getItem("plans");
    if (!stored) { fetchAndStorePlans(); return; }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed) || parsed.length === 0) { fetchAndStorePlans(); return; }
      setPlans(parsed);
    } catch { fetchAndStorePlans(); }
    setLoadingPlans(false);
  }, []);

  const getCurrency = () => (region === "india" ? "INR" : "USD");
  const getBillingCycle = () => {
    if (billing === "monthly") return "Monthly";
    if (multiYear === "annual") return "Yearly";
    if (multiYear === "twoYear") return "2-Years";
    if (multiYear === "threeYear") return "3-Years";
  };

  const findSelectedPlan = (planName) => {
    if (!plans.length) return null;
    const currency = getCurrency();
    const billingCycle = getBillingCycle();
    const normalized = planName.trim().toLowerCase();
    return plans.find(
      (p) =>
        p.name.trim().toLowerCase() === normalized &&
        p.currency === currency &&
        p.billingCycle === billingCycle
    );
  };

  const handleBuyNow = (planName) => {
    const selectedPlan = findSelectedPlan(planName);
    if (!selectedPlan) { console.error(`Plan not found: ${planName}`); return; }
    router.push(`/addtocart?planid=${selectedPlan.id}`);
  };

  const secondSectionText =
    region === "india" ? secondSectionTextIndia : secondSectionTextGlobal;

  /* ─────────────── SOLO / FREE CARD ─────────────── */
  const FreeCard = () => {
    const card = secondSectionText.monthCards.soloEditionCard;
    return (
      <div className={s.card}>
        <span className={`${s.cardHighlight} ${s.cardHighlightDefault}`}>
          {card.highlight}
        </span>
        <h3 className={s.cardEdition}>{card.edition}</h3>
        <p className={s.cardPrice}>{card.price}</p>
        {card.priceDescription && (
          <p className={s.cardDesc}>{card.priceDescription}</p>
        )}
        {card.ideal && <p className={s.cardIdeal}>{card.ideal}</p>}

        {/* Concurrent upsell sub-card */}
        {card.listCard && (
          <div className={s.subCard}>
            <p className={s.subCardTitle}>{card.listCard.title}</p>
            {card.listCard.list.map((item, i) => (
              <div key={i} className={s.subCardItem}>
                <span>{item.price}</span>
                <span className={s.subCardSaving}>{item.saving}</span>
              </div>
            ))}
          </div>
        )}

        {/* Feature list */}
        {card.list1 && (
          <ul className={s.featureList}>
            {card.list1.map((item, i) => (
              <li key={i} className={s.featureItem}>
                <Image width={16} height={16} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        )}
        {card.list2 && (
          <ul className={s.featureList}>
            {card.list2.map((item, i) => (
              <li key={i} className={s.featureItem}>
                <Image width={16} height={16} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        )}

        <div className={s.cardFooter}>
          <button
            className={s.btnPrimary}
            disabled={loadingPlans}
            onClick={() => handleBuyNow("Solo")}
          >
            {loadingPlans ? <Spinner /> : (
              <>
                {card.buttonText}
                <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
              </>
            )}
          </button>
          <button
            className={s.btnSecondary}
            onClick={() => router.push("/install")}
          >
            {card.buttonText2}
            <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
          </button>
          {card.ctaText && <p className={s.cardCtaNote}>{card.ctaText}</p>}
        </div>
      </div>
    );
  };

  /* ──────────────── SHOGUN (MONTHLY) CARD ──────────────── */
  const ShogunMonthlyCard = () => {
    const card = secondSectionText.monthCards.shogunEditionCard;
    const listItems = secondSectionText.annualCard?.list || [];
    return (
      <div className={`${s.card} ${s.cardFeatured}`}>
        <span className={`${s.cardHighlight} ${s.cardHighlightFeatured}`}>
          {card.highlight}
        </span>
        <h3 className={s.cardEdition}>{card.edition}</h3>
        <p className={s.cardPrice}>{card.price}</p>
        {secondSectionText.annualCard?.ideal && (
          <p className={s.cardIdeal}>{secondSectionText.annualCard.ideal}</p>
        )}

        <ul className={s.featureList}>
          {listItems.map((item, i) => (
            <li key={i} className={s.featureItem}>
              <Image width={16} height={16} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        <div className={s.cardFooter}>
          <button
            className={s.btnPrimary}
            disabled={loadingPlans}
            onClick={() => handleBuyNow("Shogun")}
          >
            {loadingPlans ? <Spinner /> : (
              <>Buy Now <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" /></>
            )}
          </button>
          <button className={s.btnSecondary} onClick={() => router.push("/install")}>
            {card.buttonText}
            <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
          </button>
          <p className={s.cardCtaNote}>{card.ctaText}</p>
        </div>
      </div>
    );
  };

  /* ──────────────── SHOGUN ANNUAL / MULTI-YEAR ──────────────── */
  const ShogunAnnualCard = ({ type }) => {
    const plan =
      type === "annual"
        ? secondSectionText.annualCard
        : secondSectionText.multiYearCards?.[type];
    if (!plan) return null;

    return (
      <div className={`${s.card} ${s.cardFeatured}`}>
        <span className={`${s.cardHighlight} ${s.cardHighlightFeatured}`}>{plan.highlight}</span>
        <h3 className={s.cardEdition}>{plan.edition}</h3>
        <p className={s.cardPrice}>{plan.price}</p>
        {plan.description && <p className={s.cardDesc}>{plan.description}</p>}
        {plan.savings && <span className={s.cardSavings}>{plan.savings}</span>}
        {plan.ideal && <p className={s.cardIdeal}>{plan.ideal}</p>}

        <ul className={s.featureList}>
          {secondSectionText.annualCard.list.map((item, i) => (
            <li key={i} className={s.featureItem}>
              <Image width={16} height={16} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        <div className={s.cardFooter}>
          <button
            className={s.btnPrimary}
            disabled={loadingPlans}
            onClick={() => handleBuyNow("Shogun")}
          >
            {loadingPlans ? <Spinner /> : (
              <>Buy Now <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" /></>
            )}
          </button>
          <button className={s.btnSecondary} onClick={() => router.push("/install")}>
            {plan.buttonText}
            <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
          </button>
          <p className={s.cardCtaNote}>{plan.ctaText}</p>
        </div>
      </div>
    );
  };

  /* ──────────────── Enterprise Card ──────────────── */
  const EnterpriseCard = () => (
    <div className={s.enterpriseCard}>
      <span className={s.enterpriseBadge}>{secondSectionEnterpriseCardText.highlight}</span>
      <h4 className={s.enterpriseTitle}>{secondSectionEnterpriseCardText.title}</h4>
      <p className={s.enterpriseDesc}>{secondSectionEnterpriseCardText.description}</p>
      <div className={s.enterpriseBtnRow}>
        <button className={s.btnPrimary} onClick={() => router.push("/support")}>
          {secondSectionEnterpriseCardText.buttonText}
        </button>
        <p className={s.enterpriseResponseNote}>{secondSectionEnterpriseCardText.responseTimeText}</p>
      </div>
    </div>
  );

  const multiYearOptions = [
    { key: "annual", label: "Annual", saving: region === "india" ? "Save 33%" : "Save 33%" },
    { key: "twoYear", label: "2-Year Upfront", saving: region === "india" ? "Save 48%" : "Save 48%" },
    { key: "threeYear", label: "3-Year Upfront", saving: region === "india" ? "Save 56%" : "Save 55%" },
  ];

  return (
    <section className={s.section}>
      <div className={s.gridNoise} aria-hidden="true" />

      <div className={s.inner}>
        <span className={s.badge}>
          <span className={s.badgeDot} />
          No Per-Seat Pricing · Ever
        </span>

        <h1 className={s.heading}>
          Self-Hosted CI/CD Without{" "}
          <span className={s.accent}>Pricing Surprises</span>
        </h1>

        <p className={s.description}>
          CI/CD costs shouldn&apos;t spiral as your team grows. BuildNinja is free with unlimited
          agents (up to 3 concurrent builds).{" "}
          Need more? Scale to unlimited concurrency — still no per-seat pricing, ever.
        </p>

        {/* ─── Toggle Controls ─── */}
        <div className={s.controls}>
          <div className={s.toggleRow}>
            <div className={s.toggleGroup}>
              <button
                id="pricing-toggle-worldwide"
                className={`${s.toggleBtn} ${region === "worldwide" ? s.toggleBtnActive : ""}`}
                onClick={() => dispatch(setRegion("worldwide"))}
              >
                $ Worldwide
              </button>
              <button
                id="pricing-toggle-india"
                className={`${s.toggleBtn} ${region === "india" ? s.toggleBtnActive : ""}`}
                onClick={() => dispatch(setRegion("india"))}
              >
                ₹ India
              </button>
            </div>

            <div className={s.toggleGroup}>
              <button
                id="pricing-toggle-monthly"
                className={`${s.toggleBtn} ${billing === "monthly" ? s.toggleBtnActive : ""}`}
                onClick={() => dispatch(setBilling("monthly"))}
              >
                Monthly
              </button>
              <button
                id="pricing-toggle-annual"
                className={`${s.toggleBtn} ${billing === "annual" ? s.toggleBtnActive : ""}`}
                onClick={() => dispatch(setBilling("annual"))}
              >
                Annual
              </button>
            </div>
          </div>

          {billing === "annual" && (
            <>
              <p className={s.multiYearLabel}>Select to view multi-year options for additional savings</p>
              <div className={s.multiYearGrid}>
                {multiYearOptions.map((opt) => (
                  <button
                    key={opt.key}
                    id={`pricing-multiyear-${opt.key}`}
                    className={`${s.yearBtn} ${multiYear === opt.key ? s.yearBtnActive : ""}`}
                    onClick={() => dispatch(setMultiYear(opt.key))}
                  >
                    {opt.label}
                    <span className={s.savingsPill}>{opt.saving}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <p className={s.footerNote}>
          All features identical across regions. Prices displayed based on your selection.
        </p>
      </div>

      {/* ─── Cards ─── */}
      <div className={s.cardsArea}>
        <div className={s.cardsGrid}>
          {billing === "annual" ? (
            <>
              <ShogunAnnualCard type={multiYear} />
              <FreeCard />
            </>
          ) : (
            <>
              <ShogunMonthlyCard />
              <FreeCard />
            </>
          )}
        </div>

        {billing === "annual" && <EnterpriseCard />}
      </div>
    </section>
  );
}

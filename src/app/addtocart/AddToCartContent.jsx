"use client";

import s from "./AddToCart.module.css";
import { Suspense, useEffect, useState } from "react";
import { Check, InfinityIcon, Server, Shield } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import TailwindPageWrapper from "@/components/TailwindPageWrapper";
// import { useAuth } from "@/lib/contexts/AuthContext";
import { apiService } from "@/lib/services/api";
import { Source } from "@/lib/types/enums";
import { getCurrency, sortBy } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { env } from "@/lib/config/env";
import { useQueryParams } from "@/hooks/useQueryParams";
import { shogunFeatures, soloFeatures } from "../../../public/static/addToCartPageText";

export default function AddToCartContent() {
  const searchParams = useQueryParams();
  const planId = searchParams?.get("planid");

  const { user } = {}; //useAuth();
  const router = useRouter();
  const [value, setValue] = useState([3]);
  const [ticks, setTicks] = useState([]);

  const [baseFree, setBaseFree] = useState(0);
  const maxVal = 12;
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(false);
  const [currentPlan, setCurrentPlan] = useState();
  const [availablePlans, setAvailablePlans] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [planFeatures, setPlanFeatures] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [gst, setGst] = useState(0);
  const [staticFeature, setStaticFeature] = useState([]);
  const count = value[0];
  const extra = count - baseFree;

  /* ---------------- Helper Functions ---------------- */

  const getMonths = (cycle) =>
  ({
    Monthly: 1,
    Yearly: 12,
    "2-Years": 24,
    "3-Years": 36,
  }[cycle] ?? 1);

  const getPrice = (plan, agents = 1) =>
    plan && plan.name === "Solo" ? plan.addons[0].price * agents : plan?.price;

  const getGST = (agents = 1) => {
    if (!currentPlan) return 0;
    return gst * getPrice(currentPlan, agents) * 0.01;
  };

  const getSavings = (plan) => {
    if (!availablePlans.length) return 0;

    const monthly = availablePlans.find((x) => x.billingCycle === "Monthly");
    if (!monthly) return 0;

    const monthPrice = getPrice(monthly);
    const effective = getPrice(plan) / getMonths(plan.billingCycle);

    return ((monthPrice - effective) / monthPrice) * 100;
  };

  const getEquivalentShogun = (plan) => {
    const cached = localStorage.getItem("plans");
    if (!cached) return undefined;

    const arr = JSON.parse(cached);
    const shogun = arr.find(
      (x) =>
        x.currency === plan.currency &&
        x.billingCycle === plan.billingCycle &&
        x.name.trim() === "Shogun"
    );

    if (shogun) {
      shogun.savings = getPrice(plan, extra) - shogun.price;
    }

    return shogun;
  };

  const extractPlanFeatures = (plan) => {
    const features = [];

    features.push(
      `${plan.allowedUsers !== 999999
        ? "Up to " + plan.allowedUsers
        : "Unlimited"
      } users`
    );

    plan.features.forEach((f) => {
      if (f.featureType === 5) return;
      const desc = f.featureDescription.replace(
        "${val}",
        f.value !== "999999" ? "Up to " + f.value : "Unlimited"
      );
      features.push(desc);
    });

    features.push("Docker support included");
    features.push("Community Support");
    features.push("30 days trial period for testing everything");

    return features;
  };

  /* ---------------- Load data ---------------- */

  const loadSubscriptionData = async () => {
    if (!planId) return;

    setLoadingSubscriptions(true);
    try {
      const plansStr = localStorage.getItem("plans");
      let plans = [];

      if (!user && plansStr) {
        plans = JSON.parse(plansStr);
      } else {
        const [userSubs, fetchedPlans] = await Promise.all([
          user &&
          apiService.getUserSubscriptions(user.userId, Source.BuildNinja),
          apiService.getSubscriptionPlans(Source.BuildNinja),
        ]);

        plans = fetchedPlans;
        userSubs && setSubscriptions(userSubs);

        localStorage.setItem("plans", JSON.stringify(plans));
      }

      const selected = plans.find((x) => x.id == planId);
      if (!selected) return;

      setCurrentPlan(selected);
      setPlanFeatures(extractPlanFeatures(selected));

      const base = selected.features.find(
        (x) => x.featureName.trim().toLowerCase() === "concurrent builds"
      )?.value;

      if (selected.name === "Solo") {
        setBaseFree(Number(base));
        setStaticFeature(soloFeatures);
      }
      else{
        setStaticFeature(shogunFeatures);
      }
      setTicks(
        Array.from(
          { length: 12 - Number(base) + 1 },
          (_, i) => Number(base) + i
        )
      );

      let filtered = plans.filter(
        (x) =>
          x.currency === selected.currency &&
          x.name.trim() === selected.name.trim()
      );

      filtered = sortBy(
        filtered,
        (x) => (x.name === "Solo" ? x.addons[0].price : x.price),
        "asc"
      );

      const idx = filtered.findIndex((x) => x.id === selected.id);

      setAvailablePlans(filtered);
      setSelectedIndex(idx);

      const gstValue = selected.features.find(
        (f) => f.featureName === "GST"
      )?.value;
      setGst(Number(gstValue ?? "0"));
    } catch (err) {
      console.error("Failed to load subscription data:", err);
    } finally {
      setLoadingSubscriptions(false);
    }
  };
  useEffect(() => {
    // SET feature list statically
    loadSubscriptionData();
  }, [planId]);
  /* ---------------- Submit Button ------------ */
  const handleSubmit = () => {
    let _url = `/order?planId=${currentPlan.id}`;
    if (currentPlan.name.trim().toLowerCase() == "solo" && extra > 0) {
      const addOnIds = currentPlan.addons[0].id;
      _url += `&addOns=${extra}&addOnIds=${addOnIds}`;
    }
    router.push(env.MY_ACCOUNT + _url);
  };
  /* ---------------- Components ---------------- */

  const PlanHeader = () => (
    <div className={s.headerWrapper}>
      <h1 className={s.headerTitle}>
        {currentPlan?.name} <span>Edition</span>
      </h1>

      <div className="badge-alt">
        {currentPlan?.name === "Solo" ? "Free Forever" : "Most Popular"}
      </div>

      <p className={s.headerSubtitle}>
        {currentPlan?.name === "Solo"
          ? "No credit card required. Ideal for individuals and small teams."
          : "Built for enterprise teams that need unlimited scale, advanced controls, and zero operational limits."}
      </p>
    </div>
  );
  const FeatureList = () => (
    <ul className={s.featureList}>
      {staticFeature.map((item, i) => (
        <li key={i} className={s.featureItem}>
          <Check className={s.featureIcon} size={18} />
          <span dangerouslySetInnerHTML={{__html:item}}></span>
        </li>
      ))}
    </ul>
  );

  const BillingOptions = () =>
    availablePlans.map((plan, i) => {
      const selected = i === selectedIndex;
      return (
        <div
          key={i}
          onClick={() => {
            setSelectedIndex(i);
            setCurrentPlan(plan);
            if (plan.name === "Solo") {
              const free = plan.features.find(
                (x) =>
                  x.featureName.trim().toLowerCase() === "concurrent builds"
              )?.value;
              setBaseFree(Number(free));
            }
          }}
          className={`${s.billingCard} ${selected ? s.billingCardSelected : ""}`}
          data-cursor-grow="true"
        >
            <label className={s.radioLabel}>
              <input type="radio" checked={selected} readOnly className={s.radioInput} />
              {plan.billingCycle}
              {getSavings(plan) !== 0 && (
                <span className={s.savingsBadge}>
                  SAVE {Math.round(getSavings(plan))}%
                </span>
              )}
            </label>

            <span className={s.billingPrice}>
              {getCurrency(
                plan.currency,
                getPrice(plan) / getMonths(plan.billingCycle)
              )}
              /mo
            </span>
        </div>
      );
    });

  const PriceBreakdown = () => (
    <div className={s.breakdownBox}>
        {/* Solo Addon Detail */}
        {currentPlan?.name === "Solo" && extra > 0 && (
          <>
            <div className={s.breakdownRow}>
              <span>Add On Price:</span>
              <span>
                {getCurrency(currentPlan.currency, getPrice(currentPlan))}
              </span>
            </div>

            <div className={s.breakdownRow}>
              <span>Qty</span>
              <span>{extra}</span>
            </div>

            <div className={s.breakdownRow}>
              <span>Total:</span>
              <strong>
                {getCurrency(
                  currentPlan.currency,
                  getPrice(currentPlan, extra)
                )}
              </strong>
            </div>

            <span style={{fontSize: "0.8rem", color: "var(--color-text-muted)", alignSelf: "flex-end"}}>
              +{gst}% GST calculated automatically
            </span>

            <div className={s.breakdownDivider} />
          </>
        )}

        {/* Subtotal */}
        <div className={s.breakdownRow}>
          <span>Subtotal:</span>
          <span>
            {getCurrency(currentPlan?.currency, getPrice(currentPlan, extra))}
          </span>
        </div>

        <div className={s.breakdownRow}>
          <span>GST ({gst}%):</span>
          <span>{getCurrency(currentPlan?.currency, getGST(extra))}</span>
        </div>

        <div className={s.breakdownDivider} />

        <div className={s.totalRow}>
          <span>Grand Total:</span>
          <span>
            {getCurrency(
              currentPlan?.currency,
              getPrice(currentPlan, extra) + getGST(extra)
            )}
          </span>
        </div>
    </div>
  );

  const BottomStickyButton = () => (
    <div style={{marginTop: "auto", paddingTop: "1.5rem"}}>
      <button
        onClick={handleSubmit}
        className={s.ctaButton}
      >
        {currentPlan &&
          (currentPlan.name === "Solo" && value[0] === baseFree
            ? "Using Free Plan"
            : "Purchase Subscription")}
      </button>

      {currentPlan?.name === "Solo" && value[0] === baseFree && (
        <p className={s.ctaSub}>
          Free forever
        </p>
      )}
    </div>
  );

  /* ---------------- Main UI ---------------- */

  if (loadingSubscriptions) return <div className="min-h-screen"></div>;

  return (
    <TailwindPageWrapper>
      <div className={s.pageWrapper}>
        <div className={s.ambientGrid}></div>
        <div className={s.ambientOrb}></div>
        
        <div className={s.contentContainer}>
          <PlanHeader />

          <div className={s.checkoutGrid}>
            {/* LEFT - Features */}
            <div className={`${s.glassCard} ${s.leftPanel}`}>
                <div className={s.featuresWrapper}>
                  <FeatureList />

                  {currentPlan?.name === "Solo" && (
                    <div className={s.highlightBox}>
                        <h4 className={s.highlightTitle}>Additional concurrent capacity (per build agent)</h4>
                        <ul className={s.highlightList}>
                          <li className={s.highlightItem}>
                            • {getCurrency(
                              currentPlan.currency,
                              getPrice(currentPlan, 1)
                            )} / {currentPlan.billingCycle.replace("ly", "").toLowerCase()}
                          </li>
                          <li className={s.highlightItem}>
                            • Save with annual or multi-year plans
                          </li>
                          <li className={s.highlightItem}>
                            • Yearly discounts applied automatically
                          </li>
                        </ul>
                    </div>
                  )}

                  <div className={s.valueProps}>
                    <div className={s.propItem}>
                      <Shield className={s.propIcon} size={18} />
                      {currentPlan?.name === "Solo"
                        ? "No credit card required"
                        : "30 days trial period for onboarding"}
                    </div>

                    <div className={s.propItem}>
                      <InfinityIcon className={s.propIcon} size={18} />
                      {currentPlan?.name === "Solo"
                        ? "Free forever"
                        : "Instance activation after purchase"}
                    </div>

                    <div className={s.propItem}>
                      <Server className={s.propIcon} size={18} />
                      {currentPlan?.name === "Solo"
                        ? "Self-hosted on your infra"
                        : "No infrastructure lock-in"}
                    </div>
                  </div>
                </div>
            </div>

            {/* RIGHT - Checkout Panel */}
            <div className={`${s.glassCard} ${s.checkoutPanel}`}>

                {currentPlan?.name === "Solo" && (
                  <h3 className={s.priceTitle}>
                    Increase Parallel Build Execution on Build Agents
                  </h3>
                )}

                {/* Main Price */}
                {!(currentPlan?.name === "Solo" && extra === 0) && currentPlan && (
                    <div className={s.priceLarge}>
                      {getCurrency(currentPlan.currency, getPrice(currentPlan))}
                      <span className={s.priceSuffix}>
                        / {currentPlan.name === "Solo" ? "concurrent build execution / " : ""}{currentPlan.billingCycle.replace("ly", "").toLowerCase()}
                      </span>
                    </div>
                )}
                
                {currentPlan && currentPlan.billingCycle !== "Monthly" && extra != 0 && (
                    <div className={s.billingSubtitle}>
                        {getCurrency(
                          currentPlan.currency,
                          getPrice(currentPlan) / getMonths(currentPlan.billingCycle)
                        )} / month equivalent
                        
                        {getSavings(currentPlan) !== 0 && (
                          <span className={s.savingsBadge}>
                            SAVE {Math.round(getSavings(currentPlan))}%
                          </span>
                        )}
                    </div>
                )}

                {gst !== 0 && extra !== 0 && (
                  <div className={s.billingSubtitle}>
                    +{gst}% GST applied at checkout
                  </div>
                )}

                <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  {/* SOLO Slider */}
                  {currentPlan?.name === "Solo" && (
                    <div className={s.sliderWrapper} data-cursor-grow="true">
                      <Slider
                        className="slider"
                        value={value}
                        max={maxVal}
                        min={baseFree}
                        step={1}
                        onValueChange={setValue}
                      />
                      <div className={s.sliderLabels}>
                        <span>{baseFree}</span>
                        <span>12</span>
                      </div>
                      <p className={s.sliderStatus}>
                        {value} concurrent builds (includes {baseFree} free)
                      </p>
                    </div>
                  )}

                  {/* Billing Options */}
                  {currentPlan && !(currentPlan.name === "Solo" && extra === 0) && (
                      <div className={s.billingOptions}>
                        <span className={s.billingLabel}>
                          Select billing period:
                        </span>
                        <BillingOptions />
                      </div>
                  )}

                  {/* Non-Solo Info */}
                  {currentPlan?.name !== "Solo" && (
                    <div className={s.highlightBox} style={{marginTop: 0, marginBottom: "2rem"}}>
                        Best suited for teams scaling beyond the limits of
                        Solo—no restrictions, no bottlenecks, no concurrency
                        limits.
                    </div>
                  )}

                  <PriceBreakdown />

                  {/* Shogun Suggestion */}
                  {currentPlan?.name === "Solo" && (getEquivalentShogun(currentPlan)?.savings ?? 0) > 0 && (
                      <div className={s.shogunNotice}>
                        Unlock unlimited agents with the{" "}
                        <a href={`/addtocart?planid=${getEquivalentShogun(currentPlan)?.id}`}>
                          Shogun Edition
                        </a>{" "}
                        with similar price.
                      </div>
                  )}
                  
                  <BottomStickyButton />
                </div>
            </div>
          </div>
        </div>
      </div>
    </TailwindPageWrapper>
  );
}

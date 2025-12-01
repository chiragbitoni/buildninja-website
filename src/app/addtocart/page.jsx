"use client";
import "./page.css";
import { Suspense, useEffect, useState } from "react";
import { Check, InfinityIcon, Server, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TailwindPageWrapper from "@/components/TailwindPageWrapper";
// import { useAuth } from "@/lib/contexts/AuthContext";
import { apiService } from "@/lib/services/api";
import { Source } from "@/lib/types/enums";
import { getCurrency, sortBy } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { env } from "@/lib/config/env";

export default function AddToCartPage() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planid");

  const { user } = {}; //useAuth();
  const router = useRouter();

  const [value, setValue] = useState([3]);
  const [baseFree, setBaseFree] = useState(0);
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(false);
  const [currentPlan, setCurrentPlan] = useState();
  const [availablePlans, setAvailablePlans] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [planFeatures, setPlanFeatures] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [gst, setGst] = useState(0);

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

      if (selected.name === "Solo") setBaseFree(Number(base));

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
    loadSubscriptionData();
  }, [planId]);
  /* ---------------- Submit Button ------------ */
  const handleSubmit = () => {
    let _url = `/order?planId=${currentPlan.id}`;
    if (extra > 0) {
      const addOnIds = currentPlan.addons[0].id;
      _url += `&addOns=${extra}&addOnIds=${addOnIds}`;
    }
    router.push(env.MY_ACCOUNT + _url);
  };
  /* ---------------- Components ---------------- */

  const PlanHeader = () => (
    <div className="text-center mb-10">
      <span className="text-2xl font-semibold">
        {currentPlan?.name} Edition
      </span>

      <span className="ml-2 px-6 py-2 text-sm rounded-full text-green-700 bg-green-100 dark:text-green-600 dark:bg-black">
        {currentPlan?.name === "Solo" ? "Free Forever" : "Most Popular"}
      </span>

      <p className="mt-3 max-w-[640px] text-base text-gray-600 dark:text-gray-300">
        {currentPlan?.name === "Solo"
          ? "No credit card required. Ideal for individuals and small teams."
          : "Built for enterprise teams that need unlimited scale, advanced controls, and zero operational limits."}
      </p>
    </div>
  );

  const FeatureList = () => (
    <ul className="space-y-2">
      {planFeatures.map((item, i) => (
        <li key={i} className="flex items-start space-x-3">
          <Check
            className="text-green-600 dark:text-green-500 mt-1"
            size={18}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const BillingOptions = () =>
    availablePlans.map((plan, i) => {
      const selected = i === selectedIndex;
      return (
        <Card
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
          className={`cursor-pointer py-1 px-2 my-1 bg-white border text-gray-900 dark:text-gray-100 
                dark:bg-[#0f0f0f]
                ${selected
              ? "border-[#D4335C]/80 dark:border-[#D4335C]/80"
              : "border-gray-300 dark:border-gray-700"
            }`}
        >
          <div className="flex justify-between px-4 py-2 items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={selected} readOnly />
              {plan.billingCycle}
              {i == 1 && <>&nbsp;&nbsp;</>}
              <span
                className={`px-2 pb-0.5 rounded-full text-sm ${getSavings(plan) !== 0 &&
                  "text-green-700 bg-green-100 dark:text-green-600 dark:bg-[#22E1001A]"
                  }`}
              >
                {getSavings(plan) !== 0 &&
                  `Save ${Math.round(getSavings(plan))}%`}
              </span>
            </label>

            <span>
              {getCurrency(
                plan.currency,
                getPrice(plan) / getMonths(plan.billingCycle)
              )}
              /mo
            </span>
          </div>
        </Card>
      );
    });

  const PriceBreakdown = () => (
    <Card className="bg-white text-gray-900 border border-gray-300 dark:bg-[#0f0f0f] dark:text-gray-200 dark:border-gray-700 mt-4">
      <CardContent>
        {/* Solo Addon Detail */}
        {currentPlan?.name === "Solo" && extra > 0 && (
          <>
            <div className="flex justify-between py-1 px-2">
              <span>Add On Price:</span>
              <span>
                {getCurrency(currentPlan.currency, getPrice(currentPlan))}
              </span>
            </div>

            <div className="flex justify-between py-1 px-2">
              <span>Qty</span>
              <span>{extra}</span>
            </div>

            <div className="flex justify-between py-1 px-2">
              <span className="text-gray-600 dark:text-gray-400">Total:</span>
              <span className="font-medium">
                {getCurrency(
                  currentPlan.currency,
                  getPrice(currentPlan, extra)
                )}
              </span>
            </div>

            <span className="flex justify-between text-sm text-gray-500 dark:text-gray-500 px-2">
              <span></span>+{gst}% GST calculated automatically
            </span>

            <Separator className="my-3 bg-gray-300 dark:bg-gray-700" />
          </>
        )}

        {/* Subtotal */}
        <div className="text-sm space-y-2 px-2 text-gray-700 dark:text-[#ffffff99]">
          <div className="flex justify-between py-1">
            <span>Subtotal:</span>
            <span>
              {getCurrency(currentPlan?.currency, getPrice(currentPlan, extra))}
            </span>
          </div>

          <div className="flex justify-between py-1">
            <span>GST ({gst}%):</span>
            <span>{getCurrency(currentPlan?.currency, getGST(extra))}</span>
          </div>
        </div>

        <Separator className="my-3 bg-gray-300 dark:bg-gray-700" />

        <div className="flex justify-between font-semibold text-2xl">
          <span>Grand Total:</span>
          <span>
            {getCurrency(
              currentPlan?.currency,
              getPrice(currentPlan, extra) + getGST(extra)
            )}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  const BottomStickyButton = () => (
    <div className="mt-[15px]">
      <Button
        onClick={handleSubmit}
        className="w-full bg-[#D4335C] hover:bg-[#D4335C]/80 text-lg text-white py-6 px-9"
      >
        {currentPlan &&
          (currentPlan.name === "Solo" && value[0] === baseFree
            ? "Using Free Plan"
            : "Purchase Subscription")}
      </Button>

      {currentPlan?.name === "Solo" && value[0] === baseFree && (
        <p className="text-center mt-2 text-gray-700 dark:text-gray-400 text-sm">
          Free forever
        </p>
      )}
    </div>
  );

  /* ---------------- Main UI ---------------- */

  if (loadingSubscriptions) return <>Auth</>;

  return (
      <TailwindPageWrapper>
        <div className="min-h-screen bg-white text-black dark:bg-[#2f2f2f] dark:text-white flex flex-col">
          {/* <Header /> */}

          <div className="flex flex-col items-center px-6 py-12 flex-grow">
            <PlanHeader />

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 border border-gray-300 dark:border-gray-700 rounded-xl">
              {/* LEFT */}
              <Card className="bg-white text-gray-900 dark:bg-[#151515] dark:text-gray-200 border-none rounded-t-xl rounded-b-none md:rounded-l-xl  md:rounded-r-none ">
                <CardContent className="px-10 py-2">
                  <FeatureList />

                  {currentPlan?.name === "Solo" && (
                    <Card className="bg-gray-100 text-gray-800 dark:bg-[#2a2a2a] dark:text-gray-300 dark:border-[#ffffff1a] mt-10">
                      <CardContent className="text-sm">
                        <p>Additional concurrent capacity (per build agent)</p>

                        <ul className="space-y-1 ml-4 mt-4">
                          <li className="py-1">
                            •{" "}
                            {getCurrency(
                              currentPlan.currency,
                              getPrice(currentPlan, 1)
                            )}{" "}
                            /
                            {currentPlan.billingCycle
                              .replace("ly", "")
                              .toLowerCase()}
                          </li>
                          <li className="py-1">
                            • Save with annual or multi-year plans
                          </li>
                          <li className="py-1">
                            • Yearly discounts applied automatically
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  <div className="mt-6 space-y-3 text-gray-800 dark:text-gray-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield size={18} />
                      {currentPlan?.name === "Solo"
                        ? "No credit card required"
                        : "30 days trial period for onboarding"}
                    </div>

                    <div className="flex items-center gap-2">
                      <InfinityIcon size={18} />
                      {currentPlan?.name === "Solo"
                        ? "Free forever"
                        : "Instance activation after purchase"}
                    </div>

                    <div className="flex items-center gap-2">
                      <Server size={18} />
                      {currentPlan?.name === "Solo"
                        ? "Self-hosted on your infra"
                        : "No infrastructure lock-in"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RIGHT */}
              <Card className="px-2 py-7 bg-gray-50 text-gray-900 border-gray-200 dark:bg-[#262626] dark:text-gray-200 border-none rounded-b-xl rounded-t-none md:rounded-r-xl md:rounded-l-none flex flex-col h-full">
                {/* Right Header (Price/Build section) */}
                <CardHeader>
                  {currentPlan?.name === "Solo" && (
                    <CardTitle className="text-xl font-medium">
                      Increase Parallel Build Execution on Build Agents
                    </CardTitle>
                  )}

                  {/* Main Price */}
                  {!(currentPlan?.name === "Solo" && extra === 0) &&
                    currentPlan && (
                      <span className="text-xl py-2 text-gray-700 dark:text-gray-200">
                        {getCurrency(currentPlan.currency, getPrice(currentPlan))}{" "}
                        per{" "}
                        {currentPlan.name === "Solo" && (
                          <>concurrent build execution / </>
                        )}
                        {currentPlan.billingCycle.replace("ly", "").toLowerCase()}
                      </span>
                    )}
                  {currentPlan &&
                    currentPlan.billingCycle !== "Monthly" &&
                    extra != 0 && (
                      <>
                        <span className="">
                          {getCurrency(
                            currentPlan.currency,
                            getPrice(currentPlan) /
                            getMonths(currentPlan.billingCycle)
                          )}
                          /month equivalent{" "}
                          {getSavings(currentPlan) !== 0 && (
                            <span className="ml-3 px-3 py-1 mt-2 rounded-full text-sm text-green-700 bg-green-100 dark:text-green-600 dark:bg-[#22E1001A]">
                              SAVE {Math.round(getSavings(currentPlan))}%
                            </span>
                          )}
                        </span>
                      </>
                    )}

                  {gst !== 0 && extra !== 0 && (
                    <CardDescription className="text-gray-500 dark:text-gray-400 text-base">
                      +{gst}% GST applied at checkout
                    </CardDescription>
                  )}
                </CardHeader>

                <CardContent className="flex flex-col h-full">
                  <div className="flex-grow">
                    {/* SOLO Slider */}
                    {currentPlan?.name === "Solo" && (
                      <>
                        <Slider
                          className="slider"
                          value={value}
                          max={12}
                          min={baseFree}
                          step={1}
                          onValueChange={setValue}
                        />

                        <p className="text-center mt-2 text-gray-700 dark:text-gray-400 mb-6">
                          {value} concurrent builds (includes {baseFree} free)
                        </p>
                      </>
                    )}

                    {/* Billing */}
                    {currentPlan &&
                      !(currentPlan.name === "Solo" && extra === 0) && (
                        <>
                          <span className="text-m font-semibold mt-6 mb-2">
                            Select billing period:
                          </span>
                          <div className="mt-4">
                            <BillingOptions />
                          </div>
                        </>
                      )}

                    {/* Non-Solo Info */}
                    {currentPlan?.name !== "Solo" && (
                      <Card className="bg-white dark:bg-[#0f0f0f] dark:text-gray-200 border border-gray-300 dark:border-gray-700 mt-4">
                        <CardContent className="pt-4">
                          Best suited for teams scaling beyond the limits of
                          Solo—no restrictions, no bottlenecks, no concurrency
                          limits.
                        </CardContent>
                      </Card>
                    )}

                    <PriceBreakdown />

                    {/* Shogun Suggestion */}
                    {currentPlan?.name === "Solo" &&
                      (getEquivalentShogun(currentPlan)?.savings ?? 0) > 0 && (
                        <p className="text-center mt-2 text-gray-700 dark:text-gray-400 text-sm">
                          Unlock unlimited agents with the{" "}
                          <a
                            className="text-[#D4335C]"
                            href={`/preorder?planid=${getEquivalentShogun(currentPlan)?.id
                              }`}
                          >
                            Shogun Edition
                          </a>{" "}
                          with similar price.
                        </p>
                      )}
                  </div>

                  {/* Bottom Button */}
                  <BottomStickyButton />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </TailwindPageWrapper>
  );
}

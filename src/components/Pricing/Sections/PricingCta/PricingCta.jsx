"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import s from "./PricingCta.module.css";
import { pricingEighthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import { useSelector } from "react-redux";
import Image from "next/image";
import { env } from "@/lib/config/env";
import { findPaidMonthlyPlan } from "@/services/plans/plans";
import { formatUsd } from "@/lib/utils";

const PAID_PRICE_TOKEN = "{{paidPlanMonthlyPrice}}";

const CYCLE_ORDER = ["Monthly", "Yearly", "2-Years", "3-Years"];
const CYCLE_SHORT = {
  Monthly: "Monthly",
  Yearly: "Yearly",
  "2-Years": "2 Years",
  "3-Years": "3 Years",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
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

export default function PricingCta({ plansData }) {
  const text = pricingEighthText;
  const { region } = useSelector((state) => state.pricing);
  const [cycle, setCycle] = useState("Monthly");

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

  const cycleLabel = (cycle) =>
    ({
      Monthly: "month",
      Yearly: "year",
      "2-Years": "2 years",
      "3-Years": "3 years",
      Semiannual: "6 months",
    }[cycle] ?? cycle);

  const bnPlans = plansData?.byProduct?.BuildNinja || [];
  const freePlan = bnPlans.find((p) => Number(p.price) === 0);
  const paidPlans = bnPlans.filter((p) => Number(p.price) > 0);

  const paidMonthlyPlan = findPaidMonthlyPlan(bnPlans);
  const paidMonthlyPrice = paidMonthlyPlan
    ? formatUsd(paidMonthlyPlan.price)
    : null;

  const features = text.features.map((f) =>
    f.includes(PAID_PRICE_TOKEN)
      ? paidMonthlyPrice
        ? f.replace(PAID_PRICE_TOKEN, paidMonthlyPrice)
        : "Unlimited Builds"
      : f
  );

  const paidGroups = [];
  const byName = new Map();
  paidPlans.forEach((p) => {
    const key = p.name.trim();
    if (!byName.has(key)) byName.set(key, []);
    byName.get(key).push(p);
  });
  byName.forEach((plans, name) => paidGroups.push({ name, plans }));

  const shogunGroup =
    paidGroups.find((g) => g.name.toLowerCase().includes("shogun")) || null;

  const shogunPlan =
    shogunGroup?.plans.find((p) => p.billingCycle === cycle) ||
    shogunGroup?.plans.find((p) => p.billingCycle === "Monthly") ||
    shogunGroup?.plans[0];

  const envFreePlanId = process.env.NEXT_PUBLIC_BUILDNINJA_FREE_PLAN_ID;
  const freeHref = freePlan
    ? `${env.MY_ACCOUNT}/order?planId=${freePlan.id}`
    : envFreePlanId
      ? `${env.MY_ACCOUNT}/order?planId=${envFreePlanId}`
      : `${env.MY_ACCOUNT}/order`;

  const shogunHref = shogunPlan
    ? `${env.MY_ACCOUNT}/order?planId=${shogunPlan.id}`
    : "/support";

  const enterpriseHref = "mailto:sales@grapecity.global";

  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.span className={s.sectionBadge} variants={itemVariants}>Get Started</motion.span>
        <motion.h2 className={s.title} variants={itemVariants}>
          Stop Paying Per-Seat.{" "}
          <span className={s.accent}>Start Shipping Code.</span>
        </motion.h2>
        <motion.p
          className={s.subtitle}
          dangerouslySetInnerHTML={{ __html: text.subtitle }}
          variants={itemVariants}
        />

        <motion.div className={s.cardsGrid} variants={containerVariants}>
          {/* Free */}
          <motion.div className={`${s.card} ${s.cardSolo}`} variants={itemVariants}>
            <h3 className={s.cardTitle}>{text.free.title}</h3>
            <p className={s.cardDesc}>{text.free.description}</p>
            <a
              id="pricing-cta-free"
              className={s.btnInfo}
              href={freeHref}
            >
              {text.free.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </a>
          </motion.div>

          {/* Shogun */}
          <motion.div className={`${s.card} ${s.cardShogun}`} variants={itemVariants}>
            <h3 className={s.cardTitle}>{text.shogun.title}</h3>
            <p className={s.cardDesc}>{text.shogun.description}</p>
            {shogunGroup && shogunGroup.plans.length > 1 && (
              <div className={s.cycleBar}>
                {CYCLE_ORDER.map((c) => {
                  const available = shogunGroup.plans.some(
                    (p) => p.billingCycle === c
                  );
                  return (
                    <button
                      key={c}
                      disabled={!available}
                      className={`${s.cycleBtn} ${
                        cycle === c ? s.cycleBtnActive : ""
                      }`}
                      onClick={() => setCycle(c)}
                      title={available ? c : "Coming soon"}
                    >
                      <span className={s.cycleBtnName}>
                        {CYCLE_SHORT[c] || c}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
            {shogunPlan && (
              <p className={s.cardPrice}>
                {formatMoney(shogunPlan.price, shogunPlan.currency)}
                <span className={s.cardPer}>/ {cycleLabel(shogunPlan.billingCycle)}</span>
              </p>
            )}
              <a
                id="pricing-cta-shogun"
              className={s.btnShogun}
              href={shogunHref}
            >
              {text.shogun.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div className={`${s.card} ${s.cardEnterprise}`} variants={itemVariants}>
            <h3 className={s.cardTitle}>{text.enterprise.title}</h3>
            <p className={s.cardDesc}>{text.enterprise.description}</p>
            <a
              id="pricing-cta-enterprise"
              className={s.btnEnterprise}
              href={enterpriseHref}
            >
              {text.enterprise.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className={s.featureRow} variants={containerVariants}>
          {features.map((f, i) => (
            <motion.span key={i} className={s.featurePill} variants={itemVariants}>
              <Image width={15} height={15} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
              {f}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

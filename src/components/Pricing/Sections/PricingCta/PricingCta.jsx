"use client";
import React from "react";
import { motion } from "framer-motion";
import s from "./PricingCta.module.css";
import { pricingEighthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";
import { env } from "@/lib/config/env";
import { findPaidMonthlyPlan } from "@/services/plans/plans";
import { formatUsd } from "@/lib/utils";

const PAID_PRICE_TOKEN = "{{paidPlanMonthlyPrice}}";

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

  const bnPlans = plansData?.byProduct?.BuildNinja || [];
  const freePlan = bnPlans.find((p) => Number(p.price) === 0);

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

  const envFreePlanId = process.env.NEXT_PUBLIC_BUILDNINJA_FREE_PLAN_ID;
  const freeHref = freePlan
    ? `${env.MY_ACCOUNT}/order?planId=${freePlan.id}`
    : envFreePlanId
      ? `${env.MY_ACCOUNT}/order?planId=${envFreePlanId}`
      : `${env.MY_ACCOUNT}/order`;

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
        <motion.span className={s.sectionBadge} variants={itemVariants}>
          Get Started
        </motion.span>
        <motion.h2 className={s.title} variants={itemVariants}>
          Stop Paying Per-Seat.{" "}
          <span className={s.accent}>Start Shipping Code.</span>
        </motion.h2>
        <motion.p
          className={s.subtitle}
          dangerouslySetInnerHTML={{ __html: text.subtitle }}
          variants={itemVariants}
        />

        <motion.div className={s.ctaActions} variants={containerVariants}>
          <motion.a
            id="pricing-cta-free"
            className={s.btnPrimary}
            href={freeHref}
            variants={itemVariants}
          >
            {text.free.buttonText}
            <Image
              width={16}
              height={16}
              className={s.btnIcon}
              src={paths.icons.navigation}
              alt="→"
            />
          </motion.a>
          <motion.a
            id="pricing-cta-enterprise"
            className={s.btnSecondary}
            href={enterpriseHref}
            variants={itemVariants}
          >
            {text.enterprise.buttonText}
          </motion.a>
        </motion.div>

        <motion.div className={s.featureRow} variants={containerVariants}>
          {features.map((f, i) => (
            <motion.span key={i} className={s.featurePill} variants={itemVariants}>
              <Image
                width={15}
                height={15}
                src={paths.icons.greenTick}
                alt="✓"
                className={s.featureTick}
              />
              {f}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
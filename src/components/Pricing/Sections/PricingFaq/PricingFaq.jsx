"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import s from "./PricingFaq.module.css";
import { pricingSeventhText } from "../../../../../public/static/pricingPageText";
import { useRouter } from "next/navigation";
import {
  fetchPlansFromAPI,
  findPaidMonthlyPlan,
  findFreePlan,
  describeFreePlanFeatures,
} from "@/services/plans/plans";
import { formatUsd } from "@/lib/utils";

const PAID_PRICE_TOKEN = "{{paidPlanMonthlyPrice}}";
const FREE_FEATURES_TOKEN = "{{freePlanFeatures}}";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PricingFaq() {
  const text = pricingSeventhText;
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const apply = (list) => {
      if (!cancelled && Array.isArray(list) && list.length > 0) {
        setPlans(list);
        return true;
      }
      return false;
    };

    let stored = null;
    try {
      stored = window.localStorage.getItem("plans");
    } catch {
      stored = null;
    }
    if (stored) {
      try {
        if (apply(JSON.parse(stored))) return;
      } catch {
        // ignore malformed cache
      }
    }

    fetchPlansFromAPI().then((fetched) => {
      if (!apply(fetched)) {
        setPlans([]);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const paidPriceText = useMemo(() => {
    const plan = findPaidMonthlyPlan(plans);
    return plan ? `${formatUsd(plan.price)}/month` : null;
  }, [plans]);

  const freePlanText = useMemo(() => {
    const plan = findFreePlan(plans);
    return describeFreePlanFeatures(plan);
  }, [plans]);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const renderAnswer = (answer) =>
    answer
      .replace(PAID_PRICE_TOKEN, paidPriceText ?? "no per-seat costs")
      .replace(FREE_FEATURES_TOKEN, freePlanText ?? "all the core features");

  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div className={s.header} variants={itemVariants}>
          <span className={s.sectionBadge}>FAQ</span>
          <h2 className={s.title}>{text.title}</h2>
        </motion.div>

        <motion.div className={s.faqGrid} variants={containerVariants}>
          {text.faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${s.faqCard} ${openIndex === index ? s.faqCardOpen : ""}`}
              onClick={() => toggle(index)}
              role="button"
              data-cursor-grow
              aria-expanded={openIndex === index}
              id={`pricing-faq-${index}`}
              variants={itemVariants}
            >
              <h3 className={s.faqQuestion}>
                {faq.question}
                <span className={`${s.faqChevron} ${openIndex === index ? s.faqChevronOpen : ""}`}>
                  ▾
                </span>
              </h3>
              
              <motion.p 
                className={s.faqAnswer}
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0, 
                  opacity: openIndex === index ? 1 : 0, 
                  marginTop: openIndex === index ? 16 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ 
                  overflow: "hidden",
                  visibility: openIndex === index ? "visible" : "hidden"
                }}
              >
                {renderAnswer(faq.answer)}
              </motion.p>
            </motion.div>
          ))}

          {/* View All FAQ tile */}
          <motion.div className={`${s.faqCard} ${s.viewCard}`} variants={itemVariants}>
            <button
              id="pricing-faq-view-all"
              className={s.faqBtn}
              onClick={() => router.push("/faq")}
            >
              {text.button}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

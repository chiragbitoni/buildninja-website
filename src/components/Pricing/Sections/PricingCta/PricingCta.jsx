"use client";
import React from "react";
import { motion } from "framer-motion";
import s from "./PricingCta.module.css";
import { pricingEighthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

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

export default function PricingCta() {
  const text = pricingEighthText;
  const router = useRouter();
  const { region } = useSelector((state) => state.pricing);

  const features = text.features.map((f) => {
    if (f.includes("17,499") || f.includes("$199")) {
      return region === "india" ? "₹17,499/month unlimited" : "$199/month unlimited";
    }
    return f;
  });

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
          {/* Shogun */}
          <motion.div className={`${s.card} ${s.cardFeatured}`} variants={itemVariants}>
            <h3 className={s.cardTitle}>{text.shogun.title}</h3>
            <p className={s.cardDesc}>{text.shogun.description}</p>
            <button
              id="pricing-cta-shogun"
              className={s.btnPrimary}
              onClick={() => router.push("/install")}
            >
              {text.shogun.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </button>
          </motion.div>

          {/* Solo */}
          <motion.div className={s.card} variants={itemVariants}>
            <h3 className={s.cardTitle}>{text.solo.title}</h3>
            <p className={s.cardDesc}>{text.solo.description}</p>
            <button
              id="pricing-cta-solo"
              className={s.btnSecondary}
              onClick={() => router.push("/install")}
            >
              {text.solo.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </button>
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

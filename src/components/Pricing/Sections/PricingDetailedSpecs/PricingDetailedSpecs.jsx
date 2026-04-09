import React from "react";
import { motion } from "framer-motion";
import s from "./PricingDetailedSpecs.module.css";
import { pricingSixthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PricingDetailedSpecs() {
  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.span className={s.limitedBadge} variants={itemVariants}>
          <span className={s.badgeDot} />
          {pricingSixthText.subheadline}
        </motion.span>
        
        <motion.h2 className={s.title} variants={itemVariants}>
          {pricingSixthText.headline}
        </motion.h2>

        <motion.div className={s.pillGrid} variants={containerVariants}>
          {pricingSixthText.features.map((feature, index) => (
            <motion.div key={index} className={s.pill} variants={itemVariants}>
              <Image
                width={18}
                height={18}
                src={paths.icons.greenTickWithBG}
                alt="✓"
                className={s.pillTick}
              />
              {feature.title}
            </motion.div>
          ))}
        </motion.div>

        <motion.p className={s.footer} variants={itemVariants}>
          {pricingSixthText.footer}
        </motion.p>
      </motion.div>
    </section>
  );
}

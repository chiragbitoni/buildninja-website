import React from "react";
import { motion } from "framer-motion";
import s from "./PricingCoreFeatures.module.css";
import { pricingFifthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

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

export default function PricingCoreFeatures() {
  const text = pricingFifthText;
  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className={s.header} variants={itemVariants}>
          <span className={s.sectionBadge}>Capabilities</span>
          <h2 className={s.title}>{text.title}</h2>
        </motion.div>

        <motion.div className={s.columnsGrid} variants={containerVariants}>
          {text.columns.map((col, colIndex) => (
            <motion.div className={s.column} key={colIndex} variants={itemVariants}>
              <h3 className={s.columnTitle}>{col.title}</h3>
              {col.sections.map((section, secIndex) => (
                <div className={s.featureGroup} key={secIndex}>
                  <h4 className={s.featureHeading}>{section.heading}</h4>
                  <ul className={s.featureList}>
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className={s.featureItem}>
                        <Image
                          width={16}
                          height={16}
                          src={paths.icons.greenTick}
                          alt="✓"
                          className={s.tick}
                        />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import PricingHero from "../../components/Pricing/Sections/PricingHero/PricingHero";
import PricingPhilosophy from "../../components/Pricing/Sections/PricingPhilosophy/PricingPhilosophy";
import PricingTable from "../../components/Pricing/Sections/PricingTable/PricingTable";
import PricingValueProp from "../../components/Pricing/Sections/PricingValueProp/PricingValueProp";
import PricingCoreFeatures from "../../components/Pricing/Sections/PricingCoreFeatures/PricingCoreFeatures";
import PricingDetailedSpecs from "../../components/Pricing/Sections/PricingDetailedSpecs/PricingDetailedSpecs";
import PricingFaq from "../../components/Pricing/Sections/PricingFaq/PricingFaq";
import PricingCta from "../../components/Pricing/Sections/PricingCta/PricingCta";

const revealVariants = {
  hidden: { 
    opacity: 0, 
    y: 80, 
    scale: 0.96,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1],
      scale: { duration: 1.2, ease: "easeOut" }
    }
  }
};

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      
      <motion.div
        key="phil"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingPhilosophy />
      </motion.div>

      <motion.div
        key="table"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingTable />
      </motion.div>

      <motion.div
        key="value"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingValueProp />
      </motion.div>

      <motion.div
        key="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingCoreFeatures />
      </motion.div>

      <motion.div
        key="specs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingDetailedSpecs />
      </motion.div>

      <motion.div
        key="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingFaq />
      </motion.div>

      <motion.div
        key="cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <PricingCta />
      </motion.div>
    </div>
  );
}

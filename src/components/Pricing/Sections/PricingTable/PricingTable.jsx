import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import s from "./PricingTable.module.css";
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
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PricingTable() {
  const { region } = useSelector((state) => state.pricing);

  const Tick = ({ children }) => (
    <span className={s.tickText}>
      <Image
        width={18}
        height={18}
        src={paths.icons.greenTickWithBG}
        alt="tick"
        className={s.tick}
        loading="lazy"
      />
      {children}
    </span>
  );

  const Green = ({ children }) => (
    <span className={s.greenText}>{children}</span>
  );

  const pricingData = {
    india: {
      title: "Everything You Need, Choose Your Scale",
      subtitle: "Currently showing India (₹ INR) pricing",
      rows: [
        { feature: "Monthly Price", solo: "FREE", shogun: "₹17,499" },
        {
          feature: "Annual Price", solo: "FREE",
          shogun: (<>₹1,39,999/year<small>(₹11,666/month)</small><Green>Save 33%</Green></>),
        },
        {
          feature: "2-Year Upfront", solo: "FREE",
          shogun: (<>₹2,19,999<small>(₹9,166/month)</small><Green>Save 48%</Green></>),
        },
        {
          feature: "3-Year Upfront", solo: "FREE",
          shogun: (<>₹2,79,999<small>(₹7,777/month)</small><Green>Save 56%</Green></>),
        },
        { feature: "Best For", solo: "Individual developers & small teams", shogun: "Growing Teams" },
        { feature: "Users", solo: "Up to 10", shogun: <Tick>Unlimited</Tick> },
        { feature: "Build Agents", solo: <Tick>Unlimited</Tick>, shogun: <Tick>Unlimited</Tick> },
        { feature: "Concurrent Agents", solo: "3 builds at same time", shogun: <Tick>Unlimited builds at same time</Tick> },
        {
          feature: "Additional Concurrent", shogun: <Tick>Included</Tick>,
          solo: (<>₹2,199/month <br />₹16,999/year <Green>SAVE 36%</Green><br />₹25,999/2-year <Green>SAVE 51%</Green><br />₹34,999/3-year <Green>SAVE 56%</Green></>),
        },
        { feature: "Projects", solo: "Up to 100", shogun: <Tick>Unlimited</Tick> },
        { feature: "Configurations", solo: "Up to 100", shogun: <Tick>Unlimited</Tick> },
        { feature: "Build History", solo: "30 days", shogun: <Tick>Perpetual (forever)</Tick> },
        { feature: "SSO Integrations", solo: "1 provider", shogun: <Tick>All available providers</Tick> },
        { feature: "Support", solo: "Community", shogun: <Tick>Priority business hours</Tick> },
        { feature: "Migration Assistance", solo: "Self-service guides", shogun: <Tick>Free for 10 projects (annual/2-year/3-year)</Tick> },
        { feature: "Professional Services", solo: "–", shogun: <Tick>20 hours/year (annual/2-year/3-year)</Tick> },
        { feature: "License Buyout Credit", solo: "–", shogun: <Tick>25% credit (annual/2-year/3-year)</Tick> },
        { feature: "Grace Period", solo: "7 days", shogun: "7 days" },
      ],
    },
    global: {
      title: "Everything You Need, Choose Your Scale",
      subtitle: "Currently showing Global ($ USD) pricing",
      rows: [
        { feature: "Monthly Price", solo: "FREE", shogun: "$199" },
        {
          feature: "Annual Price", solo: "FREE",
          shogun: (<>$1,599/year<small>($133/month)</small><Green>Save 33%</Green></>),
        },
        {
          feature: "2-Year Upfront", solo: "FREE",
          shogun: (<>$2,499/year<small>($104/month)</small><Green>Save 48%</Green></>),
        },
        {
          feature: "3-Year Upfront", solo: "FREE",
          shogun: (<>$3,199/year<small>($89/month)</small><Green>Save 55%</Green></>),
        },
        { feature: "Best For", solo: "Individual developers & small teams", shogun: "Growing Teams" },
        { feature: "Users", solo: "Up to 10", shogun: <Tick>Unlimited</Tick> },
        { feature: "Build Agents", solo: <Tick>Unlimited</Tick>, shogun: <Tick>Unlimited</Tick> },
        { feature: "Concurrent Agents", solo: "3 builds at same time", shogun: <Tick>Unlimited builds at same time</Tick> },
        {
          feature: "Additional Concurrent", shogun: <Tick>Included</Tick>,
          solo: (<>$25/month <br />$199/year <Green>SAVE 34%</Green><br />$299/2-year <Green>SAVE 50%</Green><br />$399/3-year <Green>SAVE 56%</Green></>),
        },
        { feature: "Projects", solo: "Up to 100", shogun: <Tick>Unlimited</Tick> },
        { feature: "Configurations", solo: "Up to 100", shogun: <Tick>Unlimited</Tick> },
        { feature: "Build History", solo: "30 days", shogun: <Tick>Perpetual (forever)</Tick> },
        { feature: "SSO Integrations", solo: "1 provider", shogun: <Tick>All available providers</Tick> },
        { feature: "Support", solo: "Standard Email Support", shogun: <Tick>Priority business hours</Tick> },
        { feature: "Migration Assistance", solo: "Self-service guides", shogun: <Tick>Free for 3 projects (annual/2-year/3-year)</Tick> },
        { feature: "Professional Services", solo: "–", shogun: <Tick>4 hours/year (annual/2-year/3-year)</Tick> },
        { feature: "Grace Period", solo: "7 days", shogun: "7 days" },
      ],
    },
  };

  const table = region === "india" ? pricingData.india : pricingData.global;

  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className={s.header} variants={itemVariants}>
          <span className={s.sectionBadge}>Feature Breakdown</span>
          <h2 className={s.title}>{table.title}</h2>
          <p className={s.subtitle}>{table.subtitle}</p>
        </motion.div>

        <motion.div className={s.tableWrap} variants={itemVariants}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={s.thShogun}>Shogun Edition</th>
                <th>Solo Edition</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {table.rows.map((row, i) => (
                <motion.tr key={i} variants={itemVariants}>
                  <td>{row.feature}</td>
                  <td>{row.shogun}</td>
                  <td>{row.solo}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  );
}

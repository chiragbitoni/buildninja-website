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

  const table = {
    title: "Everything You Need, Choose Your Scale",
    subtitle: "Enterprise-grade features for teams of all sizes",
    rows: [
      { feature: "Monthly Price", free: "FREE", enterprise: "Contact Us" },
      { feature: "Best For", free: "Individual developers & small teams", enterprise: "Large Organizations" },
      { feature: "Users", free: "Up to 10", enterprise: <Tick>Unlimited</Tick> },
      { feature: "Build Agents", free: <Tick>Unlimited</Tick>, enterprise: <Tick>Unlimited</Tick> },
      { feature: "Concurrent Agents", free: "3 builds at same time", enterprise: <Tick>Unlimited</Tick> },
      { feature: "Projects", free: "Up to 100", enterprise: <Tick>Unlimited</Tick> },
      { feature: "Configurations", free: "Up to 100", enterprise: <Tick>Unlimited</Tick> },
      { feature: "Build History", free: "30 days", enterprise: <Tick>Perpetual (forever)</Tick> },
      { feature: "SSO Integrations", free: "1 provider", enterprise: <Tick>All available providers</Tick> },
      { feature: "Support", free: "Standard Email Support", enterprise: <Tick>Dedicated 24/7 + SLA</Tick> },
      { feature: "Custom Deployment", free: "Standard Docker", enterprise: <Tick>K8s / Air-gapped / Custom</Tick> },
    ],
  };

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
                <th>Free Edition</th>
                <th className={s.thShogun}>Enterprise</th>
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
                  <td>{row.free}</td>
                  <td>{row.enterprise}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  );
}

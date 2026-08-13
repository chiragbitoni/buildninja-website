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
    title: "Everything You Need, Free",
    subtitle: "Enterprise-grade features available to teams of all sizes",
    rows: [
      { feature: "Monthly Price", free: "FREE" },
      { feature: "Best For", free: "Teams of all sizes, from startups to enterprises" },
      { feature: "Users", free: <Tick>Up to 10 users - No per-seat costs</Tick> },
      { feature: "Projects", free: <Tick>Up to 10 projects</Tick> },
      { feature: "Configurations", free: <Tick>Up to 10 build configurations</Tick> },
      { feature: "Concurrent Builds", free: <Tick>10 concurrent builds</Tick> },
      { feature: "Build Agents", free: <Tick>10 build agents</Tick> },
      { feature: "Build History", free: <Tick>30-day build history</Tick> },
      { feature: "SSO Integrations", free: <Tick>1 SSO provider</Tick> },
      { feature: "Support", free: <Tick>Email support</Tick> },
      { feature: "Custom Deployment", free: <Tick>Built-in Docker / K8s / Air-gapped / Custom</Tick> },
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
                <th>Growth Edition</th>
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
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  );
}

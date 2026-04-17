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
      { feature: "Users", free: <Tick>Unlimited users - No per-seat costs as you grow</Tick> },
      { feature: "Projects", free: <Tick>Unlimited projects - No artificial limits</Tick> },
      { feature: "Configurations", free: <Tick>Unlimited configurations - Scale without restrictions</Tick> },
      { feature: "Concurrent Builds", free: <Tick>Unlimited - Run as many as your infra supports</Tick> },
      { feature: "Build Agents", free: <Tick>Unlimited build agents - Connect as many as you want</Tick> },
      { feature: "Build History", free: <Tick>Perpetual build history - Complete audit trail forever</Tick> },
      { feature: "SSO Integrations", free: <Tick>All 5 SSO providers -  Microsoft, GitHub, GitLab, Bitbucket, and Google</Tick> },
      { feature: "Support", free: <Tick>Priority business support - Direct engineering team access</Tick> },
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

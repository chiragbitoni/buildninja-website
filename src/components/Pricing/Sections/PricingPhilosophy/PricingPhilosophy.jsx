import Image from "next/image";
import { motion } from "framer-motion";
import { paths } from "../../../../../public/static/paths";
import s from "./PricingPhilosophy.module.css";

const cards = [
  {
    icon: paths.icons.infinite,
    alt: "Infinity icon",
    title: "Unlimited Build Agents",
    desc: "Growth Edition includes 10 build agents; Shogun Edition removes the limit. Connect machines across Windows, Linux, and macOS.",
  },
  {
    icon: paths.icons.restricted,
    alt: "Restricted icon",
    title: "No Per-Seat Costs",
    desc: "Never pay per seat. Growth Edition covers 10 users; Shogun Edition removes the limit entirely.",
  },
  {
    icon: paths.icons.shieldPink,
    alt: "Shield icon",
    title: "Self-Hosted Control",
    desc: "Your infrastructure, your data, complete sovereignty over your build pipeline.",
  },
  {
    icon: paths.icons.clockPink,
    alt: "Clock icon",
    title: "Growth Edition",
    desc: "Free - up to 10 users, 10 projects, 10 build configurations, 10 concurrent builds, and 10 build agents. No credit card. Shogun removes all limits.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function PricingPhilosophy() {
  return (
    <section className={s.section}>
      <motion.div 
        className={s.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div style={{ textAlign: "center" }} variants={itemVariants}>
          <span className={s.sectionBadge}>Our Philosophy</span>
        </motion.div>
        
        <motion.h2 className={s.title} variants={itemVariants}>
          Your Infrastructure. Your Rules.&nbsp;Zero Surprises.
        </motion.h2>

        <motion.div className={s.grid} variants={containerVariants}>
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              className={s.card}
              variants={itemVariants}
            >
              <div className={s.iconWrap}>
                <Image width={28} height={28} className={s.icon} src={card.icon} alt={card.alt} />
              </div>
              <div className={s.cardBody}>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardDesc}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}


import Image from "next/image";
import { motion } from "framer-motion";
import { paths } from "../../../../../public/static/paths";
import s from "./PricingPhilosophy.module.css";

const cards = [
  {
    icon: paths.icons.infinite,
    alt: "Infinity icon",
    title: "Unlimited Build Agents",
    desc: "Connect as many machines as you want - available on both Free and Enterprise editions.",
  },
  {
    icon: paths.icons.restricted,
    alt: "Restricted icon",
    title: "No Per-Seat Costs",
    desc: "Add unlimited users without any price increases. Enterprise scale for your team, not against it.",
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
    title: "Standard Edition",
    desc: "Start with unlimited access to the core platform at zero cost. No credit card, no expiration.",
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


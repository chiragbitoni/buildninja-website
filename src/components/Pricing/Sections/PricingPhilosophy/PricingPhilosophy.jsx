import Image from "next/image";
import { paths } from "../../../../../public/static/paths";
import s from "./PricingPhilosophy.module.css";

const cards = [
  {
    icon: paths.icons.infinite,
    alt: "Infinity icon",
    title: "Unlimited Build Agents",
    desc: "Connect as many machines as you want — available on both Solo and Shogun editions.",
  },
  {
    icon: paths.icons.restricted,
    alt: "Restricted icon",
    title: "No Per-Seat Costs",
    desc: "Add unlimited users without any price increases. Shogun scales with your team, not against it.",
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
    title: "Start with Trial License",
    desc: "30 days free with 10 users, 10 projects, and 3 concurrent builds. No credit card required.",
  },
];

export default function PricingPhilosophy() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div style={{ textAlign: "center" }}>
          <span className={s.sectionBadge}>Our Philosophy</span>
        </div>
        <h2 className={s.title}>Your Infrastructure. Your Rules.&nbsp;Zero Surprises.</h2>
        <div className={s.grid}>
          {cards.map((card, i) => (
            <div key={i} className={s.card}>
              <div className={s.iconWrap}>
                <Image width={28} height={28} className={s.icon} src={card.icon} alt={card.alt} />
              </div>
              <div className={s.cardBody}>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

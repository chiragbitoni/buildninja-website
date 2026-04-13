"use client";
import { useSelector, useDispatch } from "react-redux";

import s from "./PricingHero.module.css";
import { useRouter } from "next/navigation";
import {
  secondSectionTextIndia,
  secondSectionTextGlobal,
  secondSectionEnterpriseCardText,
} from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import { useEffect, useState, useRef } from "react";
import { fetchPlansFromAPI } from "@/services/plans/plans";
import Image from "next/image";
import NetworkBackground from "@/components/ui/NetworkBackground";
import { FreeIcon, ShogunIcon, EnterpriseIcon } from "./PricingIcons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function PricingHero() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const router = useRouter();

  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.005;
      if (orb1.current) orb1.current.style.transform = `translate(${Math.sin(t) * 20}px, ${Math.cos(t * 0.8) * 25}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${Math.cos(t * 0.7) * 22}px, ${Math.sin(t * 1.2) * 20}px)`;
      requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const Spinner = () => <span className={s.spinner} />;

  async function fetchAndStorePlans() {
    setLoadingPlans(true);
    const fetched = await fetchPlansFromAPI();
    if (fetched && Array.isArray(fetched)) {
      localStorage.setItem("plans", JSON.stringify(fetched));
      setPlans(fetched);
    }
    setLoadingPlans(false);
  }

  useEffect(() => {
    const stored = localStorage.getItem("plans");
    if (!stored) { fetchAndStorePlans(); return; }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed) || parsed.length === 0) { fetchAndStorePlans(); return; }
      setPlans(parsed);
    } catch { fetchAndStorePlans(); }
    setLoadingPlans(false);
  }, []);

  const getCurrency = () => "USD";
  const getBillingCycle = () => {
    return "Monthly";
  };

  const findSelectedPlan = (planName) => {
    if (!plans.length) return null;
    const currency = getCurrency();
    const normalized = planName.trim().toLowerCase();
    // For Free Edition, we always want the Monthly version as it's the base
    return plans.find(
      (p) =>
        p.name.trim().toLowerCase() === normalized &&
        p.currency === currency &&
        p.billingCycle === "Monthly"
    );
  };

  const handleBuyNow = (planName) => {
    const selectedPlan = findSelectedPlan(planName);
    if (!selectedPlan) { console.error(`Plan not found: ${planName}`); return; }
    router.push(`/addtocart?planid=${selectedPlan.id}`);
  };

  const secondSectionText = secondSectionTextGlobal;

  /* ──────────────── Shared Pricing Card ──────────────── */
  const PricingCard = ({ card, type }) => {
    const isEnterprise = type === "enterprise";
    
    return (
      <div className={`${s.card} ${isEnterprise ? s.cardFeatured : s.cardSolo}`}>
        <div className={s.cardHead}>
          <div className={s.cardTitleText}>
            <span className={`${s.cardHighlight} ${isEnterprise ? s.cardHighlightFeatured : s.cardHighlightSolo}`}>
              {card.highlight}
            </span>
            <h3 className={s.cardEdition}>{isEnterprise ? card.title : card.edition}</h3>
          </div>
          <div className={s.cardIcon}>
            {isEnterprise ? <EnterpriseIcon /> : <ShogunIcon color="var(--color-info)" />}
          </div>
        </div>
        <p className={s.cardPrice}>{card.price}</p>
        
        {/* Description & Ideal */}
        <p className={s.cardDesc}>{isEnterprise ? card.description : card.priceDescription}</p>
        {card.ideal && <p className={s.cardIdeal}>{card.ideal}</p>}

        {/* Concurrent upsell for Free Edition */}
        {!isEnterprise && card.listCard && (
          <div className={s.subCard}>
            <p className={s.subCardTitle}>{card.listCard.title}</p>
            {card.listCard.list.map((item, i) => (
              <div key={i} className={s.subCardItem}>
                <span>{item.price}</span>
                <span className={s.subCardSaving}>{item.saving}</span>
              </div>
            ))}
          </div>
        )}

        {/* Feature list - Consolidated to avoid extra gaps */}
        {(card.list1 || card.list2) && (
          <ul className={s.featureList}>
            {(card.list1 || []).map((item, i) => (
              <li key={`l1-${i}`} className={s.featureItem}>
                <Image width={16} height={16} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
            {(card.list2 || []).map((item, i) => (
              <li key={`l2-${i}`} className={s.featureItem}>
                <Image width={16} height={16} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        )}

        <div className={s.cardFooter}>
          {isEnterprise ? (
            <>
              <button className={`${s.btnPrimary} ${s.btnEnterprise}`} onClick={() => router.push("/support")}>
                {card.buttonText}
                <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
              </button>
              <button className={s.btnSecondary} onClick={() => router.push("/support")}>
                {card.buttonText2}
                <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
              </button>
              {card.responseTimeText && <p className={s.cardCtaNote}>{card.responseTimeText}</p>}
            </>
          ) : (
            <>
              <button className={`${s.btnPrimary} ${s.btnSolo}`} disabled={loadingPlans} onClick={() => handleBuyNow("Solo")}>
                {loadingPlans ? <Spinner /> : (
                  <>
                    {card.buttonText}
                    <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
                  </>
                )}
              </button>
              <button className={s.btnSecondary} onClick={() => router.push("/install")}>
                {card.buttonText2}
                <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
              </button>
              {card.ctaText && <p className={s.cardCtaNote}>{card.ctaText}</p>}
            </>
          )}
        </div>
      </div>
    );
  };


  return (
    <section className={s.section}>
      <NetworkBackground />

      {/* Animated Background Elements */}
      <div ref={orb1} className={s.orb1} />
      <div ref={orb2} className={s.orb2} />
      <div className={s.grid} />
      <div className={s.bottomFade} />

      <motion.div
        className={s.inner}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span className={s.badge} variants={itemVariants}>
          <span className={s.badgeDot} />
          No Per-Seat Pricing · Ever
        </motion.span>

        <motion.h1 className={s.heading} variants={itemVariants}>
          Self-Hosted CI/CD Without{" "}
          <span className={s.accent}>Pricing Surprises</span>
        </motion.h1>

        <motion.p className={s.description} variants={itemVariants}>
          CI/CD costs shouldn&apos;t spiral as your team grows. BuildNinja is free with unlimited
          agents (up to 3 concurrent builds). Need more capacity? Contact us for 
          enterprise-level orchestration and dedicated support.
        </motion.p>


        <motion.p className={s.footerNote} variants={itemVariants}>
          Start your CI/CD journey with our Free Edition or contact us for Enterprise orchestration.
        </motion.p>
      </motion.div>

      {/* ─── Cards ─── */}
      <motion.div
        className={s.cardsArea}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants}
      >
        <div className={s.cardsGrid}>
          <motion.div className={s.cardMotionWrapper} variants={cardVariants}>
            <PricingCard card={secondSectionText.monthCards.soloEditionCard} type="free" />
          </motion.div>

          <motion.div variants={cardVariants} className={s.cardMotionWrapper}>
            <PricingCard card={secondSectionEnterpriseCardText} type="enterprise" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

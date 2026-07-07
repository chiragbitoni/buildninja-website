"use client";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faShieldHalved,
  faWrench,
  faGlobe,
  faBolt,
  faGear,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhySelfHosted.module.css";

const reasons = [
  { icon: faDollarSign, title: "Cost that doesn't scale with usage", text: "SaaS CI/CD tools charge per build minute or per credit. As your team ships faster, your CI/CD bill grows in lockstep. With BuildNinja, the server cost is fixed — run 100 builds or 10,000, the price stays the same. Self-hosted typically costs 80–90% less than comparable SaaS plans." },
  { icon: faShieldHalved, title: "Data sovereignty for regulated industries", text: "Healthcare, financial services, defence, and government teams cannot send source code to third-party cloud infrastructure. BuildNinja runs entirely within your perimeter, meeting HIPAA, SOC 2, and FedRAMP compliance requirements without a six-figure enterprise contract." },
  { icon: faWrench, title: "No vendor lock-in or credit exhaustion", text: "Cloud CI/CD platforms can change pricing, discontinue features, or experience outages that halt your pipeline. When CircleCI changed its credit model in 2023, thousands of teams scrambled. With BuildNinja on your infrastructure, your CI/CD is independent of any vendor's business decisions." },
  { icon: faGlobe, title: "Air-gapped and offline environments", text: "Some engineering environments have no internet access by design — classified government systems, industrial control networks, highly secure financial infrastructure. SaaS CI/CD tools fundamentally cannot operate here. BuildNinja runs fully offline once deployed." },
  { icon: faBolt, title: "Faster builds on hardware you spec", text: "Cloud CI/CD runs on shared compute you cannot directly optimise. If you need more CPU or memory, you pay more per build. With BuildNinja, you choose your build hardware — provision exactly what your workloads need." },
  { icon: faGear, title: "Full control without DevOps overhead", text: "Jenkins offered self-hosted CI/CD but required extensive plugin management, manual upgrades, and deep Groovy scripting knowledge. BuildNinja offers the same infrastructure control with a fraction of the operational overhead — one Docker command replaces weeks of configuration." },
];

export default function WhySelfHosted() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Helper to update button states without continuous re-renders
  const updateButtonStates = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const maxScroll = Math.max(carousel.scrollWidth - carousel.clientWidth, 0);

    const atStart = scrollLeft <= 5;
    const atEnd = scrollLeft >= maxScroll - 5;

    setCanScrollLeft(prev => {
      const next = !atStart;
      return prev !== next ? next : prev;
    });
    setCanScrollRight(prev => {
      const next = !atEnd;
      return prev !== next ? next : prev;
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;
    if (!section || !carousel) return;

    const isDesktop = () => window.innerWidth > 768;

    const computeSpacer = () => {
      if (!isDesktop()) {
        setSpacerHeight(0);
        return;
      }
      const overflow = Math.max(carousel.scrollWidth - carousel.clientWidth, 0);
      setSpacerHeight(overflow);
    };

    const onScroll = () => {
      if (!isDesktop()) return;

      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;

      const total = sectionH - viewH;
      if (total <= 0) return;

      const currentScroll = -rect.top;
      const progressFraction = Math.min(Math.max(currentScroll / total, 0), 1);

      const maxScroll = Math.max(carousel.scrollWidth - carousel.clientWidth, 0);
      carousel.scrollLeft = progressFraction * maxScroll;
    };

    const onResize = () => {
      computeSpacer();
      onScroll();
      updateButtonStates();
    };

    computeSpacer();
    onScroll();
    updateButtonStates();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    carousel.addEventListener("scroll", updateButtonStates, { passive: true });

    // A small delay to ensure rendering and layout are fully settled
    const timer = setTimeout(() => {
      onResize();
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      carousel.removeEventListener("scroll", updateButtonStates);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const section = sectionRef.current;
    if (!carousel || !section) return;

    const isDesktop = window.innerWidth > 768;
    const firstCard = carousel.querySelector(`.${styles.card}`);
    const cardWidth = firstCard ? firstCard.offsetWidth : 380;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (isDesktop) {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;
      const total = sectionH - viewH;
      if (total <= 0) return;

      if (direction === "left") {
        if (rect.bottom < viewH) {
          // Section is scrolled past the bottom. Align bottom, then scroll left.
          const alignScroll = viewH - rect.bottom;
          const allowedScroll = Math.min(scrollAmount, total);
          window.scrollBy({ top: -(alignScroll + allowedScroll), behavior: "smooth" });
        } else {
          // Section is within sticky range.
          const currentScroll = Math.min(Math.max(-rect.top, 0), total);
          const allowedScroll = Math.min(scrollAmount, currentScroll);
          window.scrollBy({ top: -allowedScroll, behavior: "smooth" });
        }
      } else {
        if (rect.top > 0) {
          // Section is below the viewport top. Align top, then scroll right.
          const alignScroll = rect.top;
          const allowedScroll = Math.min(scrollAmount, total);
          window.scrollBy({ top: alignScroll + allowedScroll, behavior: "smooth" });
        } else {
          // Section is within sticky range.
          const currentScroll = Math.min(Math.max(-rect.top, 0), total);
          const remaining = Math.max(total - currentScroll, 0);
          const allowedScroll = Math.min(scrollAmount, remaining);
          window.scrollBy({ top: allowedScroll, behavior: "smooth" });
        }
      }
    } else {
      const scrollVal = scrollAmount * (direction === "left" ? -1 : 1);
      carousel.scrollBy({ left: scrollVal, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyInner}>
        <div className={styles.ambientGlow} />
        <div className={styles.gridOverlay} />

        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>Why self-hosted CI/CD?</span>
              <h2 className={styles.title}>
                Six reasons engineering teams choose self-hosted over SaaS
              </h2>
              <p className={styles.lead}>
                Cloud-based CI/CD tools are convenient until they&apos;re not. Growing teams
                consistently hit the same walls: cost, compliance, control, and credit
                limits. Self-hosted CI/CD eliminates all of them.
              </p>
            </div>
            <div className={styles.controls}>
              <button
                className={styles.scrollBtn}
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className={styles.scrollBtn}
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div ref={carouselRef} className={styles.carouselOuter}>
            <div className={styles.carouselInner}>
              {reasons.map((r, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={r.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{r.title}</h3>
                  <p className={styles.cardText}>{r.text}</p>
                  <div className={styles.cardGlow} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spacer} style={{ height: spacerHeight }} />
    </section>
  );
}


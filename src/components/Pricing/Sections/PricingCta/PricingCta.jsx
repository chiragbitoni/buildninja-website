"use client";
import React from "react";
import s from "./PricingCta.module.css";
import { pricingEighthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function PricingCta() {
  const text = pricingEighthText;
  const router = useRouter();
  const { region } = useSelector((state) => state.pricing);

  const features = text.features.map((f) => {
    if (f.includes("17,499") || f.includes("$199")) {
      return region === "india" ? "₹17,499/month unlimited" : "$199/month unlimited";
    }
    return f;
  });

  return (
    <section className={s.section}>
      <div className={s.inner}>
        <span className={s.sectionBadge}>Get Started</span>
        <h2 className={s.title}>
          Stop Paying Per-Seat.{" "}
          <span className={s.accent}>Start Shipping Code.</span>
        </h2>
        <p
          className={s.subtitle}
          dangerouslySetInnerHTML={{ __html: text.subtitle }}
        />

        <div className={s.cardsGrid}>
          {/* Shogun */}
          <div className={`${s.card} ${s.cardFeatured}`}>
            <h3 className={s.cardTitle}>{text.shogun.title}</h3>
            <p className={s.cardDesc}>{text.shogun.description}</p>
            <button
              id="pricing-cta-shogun"
              className={s.btnPrimary}
              onClick={() => router.push("/install")}
            >
              {text.shogun.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </button>
          </div>

          {/* Solo */}
          <div className={s.card}>
            <h3 className={s.cardTitle}>{text.solo.title}</h3>
            <p className={s.cardDesc}>{text.solo.description}</p>
            <button
              id="pricing-cta-solo"
              className={s.btnSecondary}
              onClick={() => router.push("/install")}
            >
              {text.solo.buttonText}
              <Image width={16} height={16} className={s.btnIcon} src={paths.icons.navigation} alt="→" />
            </button>
          </div>
        </div>

        <div className={s.featureRow}>
          {features.map((f, i) => (
            <span key={i} className={s.featurePill}>
              <Image width={15} height={15} src={paths.icons.greenTick} alt="✓" className={s.featureTick} />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

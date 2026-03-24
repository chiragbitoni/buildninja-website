import React from "react";
import s from "./PricingDetailedSpecs.module.css";
import { pricingSixthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

export default function PricingDetailedSpecs() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <span className={s.limitedBadge}>
          <span className={s.badgeDot} />
          {pricingSixthText.subheadline}
        </span>
        <h2 className={s.title}>{pricingSixthText.headline}</h2>

        <div className={s.pillGrid}>
          {pricingSixthText.features.map((feature, index) => (
            <div key={index} className={s.pill}>
              <Image
                width={18}
                height={18}
                src={paths.icons.greenTickWithBG}
                alt="✓"
                className={s.pillTick}
              />
              {feature.title}
            </div>
          ))}
        </div>

        <p className={s.footer}>{pricingSixthText.footer}</p>
      </div>
    </section>
  );
}

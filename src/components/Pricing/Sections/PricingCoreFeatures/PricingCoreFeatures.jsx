import React from "react";
import s from "./PricingCoreFeatures.module.css";
import { pricingFifthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

export default function PricingCoreFeatures() {
  const text = pricingFifthText;
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.sectionBadge}>Capabilities</span>
          <h2 className={s.title}>{text.title}</h2>
        </div>

        <div className={s.columnsGrid}>
          {text.columns.map((col, colIndex) => (
            <div className={s.column} key={colIndex}>
              <h3 className={s.columnTitle}>{col.title}</h3>
              {col.sections.map((section, secIndex) => (
                <div className={s.featureGroup} key={secIndex}>
                  <h4 className={s.featureHeading}>{section.heading}</h4>
                  <ul className={s.featureList}>
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className={s.featureItem}>
                        <Image
                          width={16}
                          height={16}
                          src={paths.icons.greenTick}
                          alt="✓"
                          className={s.tick}
                        />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

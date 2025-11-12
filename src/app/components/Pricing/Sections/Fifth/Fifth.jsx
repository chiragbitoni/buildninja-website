import React from "react";
import { useSelector } from "react-redux";
import "./Fifth.css";
import { pricingFifthText } from "../../../../../../public/static/pricingPageText";
import { paths } from "../../../../../../public/static/paths";

export default function Fifth() {
  const text = pricingFifthText;
  return (
    <section className="pricingFifthSection">
      <div className="pricingFifthHeader">
        <h2>{text.title}</h2>
      </div>

      <div className="pricingFifthGrid">
        {text.columns.map((col, colIndex) => (
          <div className="pricingFifthColumn" key={colIndex}>
            <h3 className="pricingFifthColumnTitle">{col.title}</h3>
            {col.sections.map((section, secIndex) => (
              <div className="pricingFifthFeatureGroup" key={secIndex}>
                <h4 className="pricingFifthFeatureHeading">
                  {section.heading}
                </h4>
                <ul className="pricingFifthFeatureList">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <img
                        src={paths.icons.greenTick}
                        alt="tick"
                        className="pricingFifthIcon"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

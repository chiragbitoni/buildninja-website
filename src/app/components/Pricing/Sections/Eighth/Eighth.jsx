import React from "react";
import "./Eighth.css";
import { pricingEighthText } from "../../../../../../public/static/pricingPageText";
import { paths } from "../../../../../../public/static/paths";

export default function Eighth() {
  const text = pricingEighthText;

  return (
    <section className="pricingEighthSection">
      <h2 className="pricingEighthTitle">{text.title}</h2>
      <p className="pricingEighthSubtitle">{text.subtitle}</p>

      <div className="pricingEighthCards">
        {/* Solo Edition */}
        <div className="pricingEighthCard">
          <h3 className="pricingEighthCardTitle">{text.solo.title}</h3>
          <p className="pricingEighthCardDesc">{text.solo.description}</p>
          <button className="pricingEighthButton pricingEighthButtonGray">
            {text.solo.buttonText}<img src={paths.icons.navigation}></img>
          </button>
        </div>

        {/* Shogun Edition */}
        <div className="pricingEighthCard">
          <h3 className="pricingEighthCardTitle">{text.shogun.title}</h3>
          <p className="pricingEighthCardDesc">{text.shogun.description}</p>
          <button className="pricingEighthButton pricingEighthButtonPink">
            {text.shogun.buttonText}<img src={paths.icons.navigation}></img>
          </button>
        </div>
      </div>

      <ul className="pricingEighthFeatures">
        {text.features.map((feature, i) => (
          <li key={i} className="pricingEighthFeatureItem">
            <img src={paths.icons.greenTick}></img>{feature}
          </li>
        ))}
      </ul>
    </section>
  );
}

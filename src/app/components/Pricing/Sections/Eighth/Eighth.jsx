import React from "react";
import "./Eighth.css";
import { pricingEighthText } from "../../../../../../public/static/pricingPageText";
import { paths } from "../../../../../../public/static/paths";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Eighth() {
  const text = pricingEighthText;
  const router = useRouter();
  const handleButtonClick = (e) => {
    router.push(e);
  }
  const { region } = useSelector((state) => state.pricing);
  return (
    <section className="pricingEighthSection">
      <h2 className="pricingEighthTitle">{text.title}</h2>
      <p className="pricingEighthSubtitle">{text.subtitle}</p>

      <div className="pricingEighthCards">
        {/* Solo Edition */}
        <div className="pricingEighthCard">
          <h3 className="pricingEighthCardTitle">{text.solo.title}</h3>
          <p className="pricingEighthCardDesc">{text.solo.description}</p>
          <button className="pricingEighthButton pricingEighthButtonGray" onClick={() => handleButtonClick("/install")}>
            {text.solo.buttonText}<img src={paths.icons.navigation}></img>
          </button>
        </div>

        {/* Shogun Edition */}
        <div className="pricingEighthCard">
          <h3 className="pricingEighthCardTitle">{text.shogun.title}</h3>
          <p className="pricingEighthCardDesc">{text.shogun.description}</p>
          <button className="pricingEighthButton pricingEighthButtonPink" onClick={() => handleButtonClick("/install")}>
            {text.shogun.buttonText}<img src={paths.icons.navigation}></img>
          </button>
        </div>
      </div>

      <ul className="pricingEighthFeatures">
        {text.features.map((feature, i) => {
          let updatedFeature = feature;

          if (feature.includes("17,499") || feature.includes("$199")) {
            updatedFeature =
              region === "india"
                ? "₹17,499/month unlimited"
                : "$199/month unlimited";
          }

          return (
            <li key={i} className="pricingEighthFeatureItem">
              <img src={paths.icons.greenTick} className="pricingEighthFeatureItemTick"/> {updatedFeature}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

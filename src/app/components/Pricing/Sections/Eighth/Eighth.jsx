import React from "react";
import "./Eighth.css";
import { pricingEighthText } from "../../../../../../public/static/pricingPageText";
import { paths } from "../../../../../../public/static/paths";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

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
      <p className="pricingEighthSubtitle" dangerouslySetInnerHTML={{__html: text.subtitle}}></p>

      <div className="pricingEighthCards">
      

        {/* Shogun Edition */}
        <div className="pricingEighthCard">
          <h3 className="pricingEighthCardTitle">{text.shogun.title}</h3>
          <p className="pricingEighthCardDesc">{text.shogun.description}</p>
          <button className="pricingEighthButton pricingEighthButtonPink" onClick={() => handleButtonClick("/install")}>
            {text.shogun.buttonText}<Image width={0} height={0} className="pricingEighthFeatureNavigationIcon" src={paths.icons.navigation} alt="Grapecity Navigation Icon"></Image>
          </button>
        </div>

          {/* Solo Edition */}
        <div className="pricingEighthCard">
          <h3 className="pricingEighthCardTitle">{text.solo.title}</h3>
          <p className="pricingEighthCardDesc">{text.solo.description}</p>
          <button className="pricingEighthButton pricingEighthButtonGray" onClick={() => handleButtonClick("/install")}>
            {text.solo.buttonText}<Image width={0} height={0} src={paths.icons.navigation} className="pricingEighthFeatureNavigationIcon" alt="Grapecity Navigation Icon"></Image>
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
              <Image width={0} height={0} src={paths.icons.greenTick} className="pricingEighthFeatureItemTick" alt="Green tick icon indicating success, approval, or completion"/> {updatedFeature}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

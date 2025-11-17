import React from "react";
import { useSelector } from "react-redux";
import { pricingSixthText} from "../../../../../../public/static/pricingPageText";
import "./Sixth.css";
import { paths } from "../../../../../../public/static/paths";

function Sixth() {
    const { region, billing, multiYear } = useSelector((state) => state.pricing);

    return (
        <section className="pricingSixthSection">
            <div className="pricingSixthHeader">
                <span className="pricingSixthBadge">{pricingSixthText.subheadline}</span>
                <h2 className="pricingSixthHeadline">{pricingSixthText.headline}</h2>
            </div>

            <div className="pricingSixthCards">
                {pricingSixthText.features.map((feature, index) => (
                    <div className="pricingSixthCard" key={index}>
                        <img src={paths.icons.greenTickWithBG} alt="tick" className="pricingSixthTick" />
                        <p>{feature.title}</p>
                    </div>
                ))}
            </div>

            <p className="pricingSixthFooter">{pricingSixthText.footer}</p>
        </section>
    );
}

export default Sixth;

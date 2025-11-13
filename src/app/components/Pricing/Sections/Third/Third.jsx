// app/components/pricing/Third.js
import { paths } from "../../../../../../public/static/paths";
import "./Third.css";

export default function Third() {
    return (
        <section className="pricingThirdSection">
            <h2 className="pricingThirdTitle">What Makes BuildNinja Different</h2>

            <div className="pricingThirdCardsContainer">
                <div className="pricingThirdCard">
                    <img className="pricingThirdIcon" src={paths.icons.infinite}></img>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">Unlimited Build Agents</h3>
                        <p className="pricingThirdCardDesc">
                            Connect as many machines as you want (both editions)
                        </p>
                    </div>
                </div>

                <div className="pricingThirdCard">
                    <img className="pricingThirdIcon" src={paths.icons.restricted}></img>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">No Per-Seat Costs</h3>
                        <p className="pricingThirdCardDesc">
                            Add unlimited users without price increases (Shogun)
                        </p>
                    </div>
                </div>

                <div className="pricingThirdCard">
                    <img className="pricingThirdIcon" src={paths.icons.shieldPink}></img>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">Self-Hosted Control</h3>
                        <p className="pricingThirdCardDesc">
                            Your infrastructure, your data, complete sovereignty
                        </p>
                    </div>
                </div>

                <div className="pricingThirdCard">
                    <img className="pricingThirdIcon" src={paths.icons.clockPink}></img>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">30-Day Risk-Free Trial</h3>
                        <p className="pricingThirdCardDesc">
                            Test everything before committing
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

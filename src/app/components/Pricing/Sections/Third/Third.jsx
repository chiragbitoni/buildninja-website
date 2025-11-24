// app/components/pricing/Third.js
import { paths } from "../../../../../../public/static/paths";
import "./Third.css";

export default function Third() {
    return (
        <section className="pricingThirdSection">
            <h2 className="pricingThirdTitle">Your Infrastructure. Your Rules. Zero Surprises.</h2>

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
                        <h3 className="pricingThirdCardTitle">Start with Trial License</h3>
                        <p className="pricingThirdCardDesc">
                            30 days free: 10 users, 10 projects, 3 concurrent builds
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

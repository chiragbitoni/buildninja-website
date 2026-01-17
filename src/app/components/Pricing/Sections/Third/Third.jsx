// app/components/pricing/Third.js
import Image from "next/image";
import { paths } from "../../../../../../public/static/paths";
import "./Third.css";

export default function Third() {
    return (
        <section className="pricingThirdSection">
            <h2 className="pricingThirdTitle">Your Infrastructure. Your Rules. Zero Surprises.</h2>

            <div className="pricingThirdCardsContainer">
                <div className="pricingThirdCard">
                    <Image width={0} height={0} className="pricingThirdIcon" src={paths.icons.infinite} alt="Grapecity Pink Infinity Icon"></Image>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">Unlimited Build Agents</h3>
                        <p className="pricingThirdCardDesc">
                            Connect as many machines as you want (both editions)
                        </p>
                    </div>
                </div>

                <div className="pricingThirdCard">
                    <Image width={0} height={0} className="pricingThirdIcon" src={paths.icons.restricted} alt="Grapecity Pink Restricted Icon"></Image>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">No Per-Seat Costs</h3>
                        <p className="pricingThirdCardDesc">
                            Add unlimited users without price increases (Shogun)
                        </p>
                    </div>
                </div>

                <div className="pricingThirdCard">
                    <Image width={0} height={0} className="pricingThirdIcon" src={paths.icons.shieldPink} alt="Grapecity Pink Shield Icon"></Image>
                    <div className="pricingThirdText">
                        <h3 className="pricingThirdCardTitle">Self-Hosted Control</h3>
                        <p className="pricingThirdCardDesc">
                            Your infrastructure, your data, complete sovereignty
                        </p>
                    </div>
                </div>

                <div className="pricingThirdCard">
                    <Image width={0} height={0} className="pricingThirdIcon" src={paths.icons.clockPink} alt="Grapecity Pink Clock Icon"></Image>
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

"use client";
import { useSelector, useDispatch } from "react-redux";
import { setRegion, setBilling, setMultiYear } from "@/redux/slice/pricingSlice"
import "./Hero.css";

export default function PricingHero() {
    const dispatch = useDispatch();
    const { region, billing, multiYear } = useSelector((state) => state.pricing);

    const text = {
        heading: "Self-Hosted CI/CD Without Per-Seat Pricing Surprises",
        description:
            "You know how CI/CD costs spiral out of control as your team grows? <br/> BuildNinja offers transparent, predictable pricing, free with unlimited build agents but limited to three concurrent builds. When you need more, you can scale to unlimited concurrent capacity with unlimited users. This way, you can budget confidently without the burden of per-seat taxation.",
        regionIndia: "₹ India",
        regionWorldwide: "$ Worldwide",
        billingMonthly: "Monthly",
        billingAnnual: "Annual",
        annual: {
            title: "Annual:",
            saving: "Save ₹67,989/year",
            savingGlobal: "Save $592/year"
        },
        twoYear: {
            title: "2-Year Upfront:",
            saving: "Save ₹1,04,989/year",
            savingGlobal: "Save $1,272/year"
        },
        threeYear: {
            title: "3-Year Upfront:",
            saving: "Save ₹1,13,989/year",
            savingGlobal: "Save $1,764/year"
        },
        footer:
            "All features identical across regions. Prices display based on your selection.",
    };

    return (
        <section className="pricingHeroSection">
            <div className="pricingHeroContent">
                <h2 className="pricingHeroHeading">{text.heading}</h2>
                <p dangerouslySetInnerHTML={{ __html: text.description }} className="pricingHeroDescription"></p>

                {/* Toggle Buttons */}
                <div className="pricingHeroToggleContainer">
                    <div className="pricingHeroToggleGroup">
                        <button
                            className={`pricingHeroToggleButton ${region === "india" ? "active" : ""
                                }`}
                            onClick={() => dispatch(setRegion("india"))}
                        >
                            {text.regionIndia}
                        </button>
                        <button
                            className={`pricingHeroToggleButton ${region === "worldwide" ? "active" : ""
                                }`}
                            onClick={() => dispatch(setRegion("worldwide"))}
                        >
                            {text.regionWorldwide}
                        </button>
                    </div>

                    <div className="pricingHeroToggleGroup">
                        <button
                            className={`pricingHeroToggleButton ${billing === "monthly" ? "active" : ""
                                }`}
                            onClick={() => dispatch(setBilling("monthly"))}
                        >
                            {text.billingMonthly}
                        </button>
                        <button
                            className={`pricingHeroToggleButton ${billing === "annual" ? "active" : ""
                                }`}
                            onClick={() => dispatch(setBilling("annual"))}
                        >
                            {text.billingAnnual}
                        </button>
                    </div>
                </div>
                {billing === "annual" ? <div>
                    <p className="pricingHeroSubtext">
                        Select to view multi-year options for additional savings
                    </p>

                    {/* Multi-Year Options */}
                    <div className="pricingHeroMultiYearContainer">
                        {[
                            { key: "annual", label: text.annual.title, description: region==="india"?text.annual.saving:text.annual.savingGlobal },
                            { key: "twoYear", label: text.twoYear.title, description: region==="india"?text.twoYear.saving:text.twoYear.savingGlobal },
                            { key: "threeYear", label: text.threeYear.title, description: region==="india"?text.threeYear.saving:text.threeYear.savingGlobal },
                        ].map((option) => (
                            <button
                                key={option.key}
                                className={`pricingHeroYearButton ${multiYear === option.key ? "active" : ""
                                    }`}
                                onClick={() => dispatch(setMultiYear(option.key))}
                            >
                                {option.label}<br />{option.description}
                            </button>
                        ))}
                    </div>
                </div>:null
                }

                <p className="pricingHeroFooter">{text.footer}</p>
            </div>
        </section>
    );
}

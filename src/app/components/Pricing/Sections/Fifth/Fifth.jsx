import { paths } from "../../../../../../public/static/paths";
import { fifthSectionText } from "../../../../../../public/static/pricingPageText";
import "./Fifth.css";

export default function Fifth() {
    const midpoint = Math.ceil(fifthSectionText.list.length / 2);
    const leftList = fifthSectionText.list.slice(0, midpoint);
    const rightList = fifthSectionText.list.slice(midpoint);

    // For demonstration, you might receive these as props or from API
    const spots = 847;
    const totalSpots = 1000;
    const progressPercent = (spots / totalSpots) * 100;

    return (
        <section className="fifthPricingSection">
            <p className="fifthPricingHighlight">{fifthSectionText.highlight}</p>
            <h2 className="fifthPricingHeading">{fifthSectionText.heading}</h2>
            <div className="fifthListGrid">
                <ul className="fifthList">
                    {leftList.map((item, index) => (
                        <li key={index}>
                            <img src={paths.icons.greenTick} className="fifthTickIcon" alt="" />
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="fifthList">
                    {rightList.map((item, index) => (
                        <li key={index}>
                            <img src={paths.icons.greenTick} className="fifthTickIcon" alt="" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Progress Bar Section */}
            <div className="fifthProgressBarContainer">
                <div className="fifthProgressLabelCount">
                    <span className="fifthProgressLabel">
                        Spots remaining:
                    </span>
                    <span className="fifthProgressCount">
                        {spots}/{totalSpots}
                    </span>
                </div>
                <div className="fifthProgressBarOuter">
                    <div
                        className="fifthProgressBarFill"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>
        </section>
    );
}

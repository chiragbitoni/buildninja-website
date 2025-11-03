import "./Second.css";
import { secondSectionTextIndia, secondSectionTextGlobal } from "../../../../../../public/static/pricingPageText";
import { useSelector } from "react-redux";
import { paths } from "../../../../../../public/static/paths";
export default function Second() {
    const isAnnual = useSelector((state) => state.plan.isAnnual);
    const region = useSelector((state) => state.region.region);
    const secondSectionText = region === "india" ? secondSectionTextIndia : secondSectionTextGlobal;
    const monthlyPlanFreeCard = (<div className="pricingMonthlyFreeCard">
        <p className="pricingMonthlyFreeCardHighlight">{secondSectionText.monthCards.soloEditionCard.highlight}</p>
        <h3 className="pricingMonthlyFreeCardEdition">{secondSectionText.monthCards.soloEditionCard.edition}</h3>
        <h3 className="pricingMonthlyFreeCardPrice">{secondSectionText.monthCards.soloEditionCard.price}</h3>
        <div className="pricingMonthlyFreeCardList">
            {secondSectionText.monthCards.soloEditionCard.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
        <button className="pricingMonthlyFreeCardButton">
            <img className="pricingMonthlyFreeIcon" src={paths.icons.download} alt="Download Icon" />
            {secondSectionText.monthCards.soloEditionCard.buttonText}
        </button>
    </div>);

    const monthlyPlanShogunCard = (<div className="pricingMonthlyShogunCard">
        <p className="pricingMonthlyShogunCardHighlight">{secondSectionText.monthCards.shogunEditionCard.highlight}</p>
        <h3 className="pricingMonthlyShogunCardEdition">{secondSectionText.monthCards.shogunEditionCard.edition}</h3>
        <h3 className="pricingMonthlyShogunCardPrice">{secondSectionText.monthCards.shogunEditionCard.price}</h3>
        <div className="pricingMonthlyFreeCardList">
            {secondSectionText.monthCards.shogunEditionCard.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
        <button className="pricingMonthlyShogunCardButton">
            <img className="pricingMonthlyFreeIcon" src={paths.icons.thunder} alt="Download Icon" />
            {secondSectionText.monthCards.soloEditionCard.buttonText}
        </button>
    </div>)

    const annualPlanShogunCard = (<div className="pricingAnnualShogunCard">
        <p className="pricingMonthlyShogunCardHighlight">{secondSectionText.annualCard.highlight}</p>
        <h3 className="pricingMonthlyShogunCardEdition">{secondSectionText.annualCard.edition}</h3>
        <h3 className="pricingMonthlyShogunCardPrice">{secondSectionText.annualCard.price}</h3>
        <p className="pricingAnnualShogunDescription">{secondSectionText.annualCard.description}</p>
        <p className="pricingAnnualShogunSavings">{secondSectionText.annualCard.savings}</p>
        <div className="pricingAnnualFreeCardList">
            {secondSectionText.monthCards.shogunEditionCard.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
        <div className="pricingAnnualMultiYearContainer">
            <h3 className="pricingAnnualMultiYearCardTitle">{secondSectionText.annualCard.card.title}</h3>
            <div className="pricingAnnualMultiYearCardContainers">
                <div className="pricingAnnualMultiYearCard1">
                    <div className="pricingAnnualMultiYearCard1Line1">
                        <p className="pricingAnnualMultiYearCardsTitle">{secondSectionText.annualCard.card.card1.title}</p>
                        <p className="pricingAnnualMultiYearCardPrice">{secondSectionText.annualCard.card.card1.price}</p>
                    </div>
                    <div className="pricingAnnualMultiYearCard1Line2">
                        <p className="pricingAnnualMultiYearCardsTotal">{secondSectionText.annualCard.card.card1.total}</p>
                        <p className="pricingAnnualMultiYearCardSavings">{secondSectionText.annualCard.card.card1.savings}</p>
                    </div>
                </div>
                <div className="pricingAnnualMultiYearCard2">
                    <div className="pricingAnnualMultiYearCard1Line1">
                        <p className="pricingAnnualMultiYearCardsTitle">{secondSectionText.annualCard.card.card2.title}</p>
                        <p className="pricingAnnualMultiYearCardPrice">{secondSectionText.annualCard.card.card2.price}</p>
                    </div>
                    <div className="pricingAnnualMultiYearCard1Line2">
                        <p className="pricingAnnualMultiYearCardsTotal">{secondSectionText.annualCard.card.card2.total}</p>
                        <p className="pricingAnnualMultiYearCardSavings">{secondSectionText.annualCard.card.card2.savings}</p>
                    </div>
                </div>
            </div>
        </div>
        <button className="pricingMonthlyShogunCardButton">
            <img className="pricingMonthlyFreeIcon" src={paths.icons.thunder} alt="Download Icon" />
            {secondSectionText.monthCards.soloEditionCard.buttonText}
        </button>
    </div>)


    return (
        <section className="pricingSecondSection">
            <div className="pricingSecondContent">
                {!isAnnual ?
                    <div className="pricingMonthlyCardsContainer">
                        {monthlyPlanFreeCard}
                        {monthlyPlanShogunCard}
                    </div> :
                    <div className="pricingAnnualCardsContainer">
                        {monthlyPlanFreeCard}
                        {annualPlanShogunCard}
                    </div>
                }
            </div>
        </section>
    )
}
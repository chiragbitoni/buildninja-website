import "./Second.css";
import { secondSectionTextIndia, secondSectionTextGlobal, secondSectionEnterpriseCardText } from "../../../../../../public/static/pricingPageText";
import { useSelector } from "react-redux";
import { paths } from "../../../../../../public/static/paths";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Second() {
  const { region, billing, multiYear } = useSelector((state) => state.pricing);
  const router = useRouter();
  const secondSectionText = region === "india" ? secondSectionTextIndia : secondSectionTextGlobal;
  const handleButtonClick = (e) => {
    router.push(e);
  }
  // ------------------------
  // SOLO EDITION CARD (Free)
  // ------------------------
  const monthlyPlanFreeCard = (
    <div className="pricingMonthlyFreeCard">
      <p className="pricingMonthlyFreeCardHighlight">{secondSectionText.monthCards.soloEditionCard.highlight}</p>
      <h3 className="pricingMonthlyFreeCardEdition">{secondSectionText.monthCards.soloEditionCard.edition}</h3>
      <h3 className="pricingMonthlyFreeCardPrice">{secondSectionText.monthCards.soloEditionCard.price}</h3>
      {secondSectionText.monthCards.soloEditionCard.priceDescription && (
        <p className="pricingMonthlySoloDescription">{secondSectionText.monthCards.soloEditionCard.priceDescription}</p>
      )}
      {secondSectionText.monthCards.soloEditionCard.ideal && (
        <p className="pricingMonthlySoloIdeal">{secondSectionText.monthCards.soloEditionCard.ideal}</p>
      )}

      {/* List 1 */}
      {secondSectionText.monthCards.soloEditionCard.list1 && (
        <div className="pricingMonthlyFreeCardList">
          {secondSectionText.monthCards.soloEditionCard.list1.map((item, index) => (
            <div key={index} className="pricingAnnualFreeCardListItem">
              <img src={paths.icons.greenTick} alt="Green tick icon indicating success, approval, or completion" />
              <li dangerouslySetInnerHTML={{ __html: item }}></li>
            </div>
          ))}
        </div>
      )}

      {/* Additional concurrent capacity */}
      {secondSectionText.monthCards.soloEditionCard.listCard && (
        <div className="pricingMonthlyFreeListCard">
          <p>{secondSectionText.monthCards.soloEditionCard.listCard.title}</p>
          {secondSectionText.monthCards.soloEditionCard.listCard.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      )}

      {/* List 2 */}
      {secondSectionText.monthCards.soloEditionCard.list2 && (
        <div className="pricingMonthlyFreeCardList2">
          {secondSectionText.monthCards.soloEditionCard.list2.map((item, index) => (
            <div key={index} className="pricingAnnualFreeCardListItem">
              <img src={paths.icons.greenTick} alt="Green tick icon indicating success, approval, or completion" />
              <li dangerouslySetInnerHTML={{ __html: item }}></li>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="pricingMonthlyFreeCardFooter">
        <button className="pricingMonthlyFreeCardButton" onClick={()=>{handleButtonClick("/install")}}>
          {secondSectionText.monthCards.soloEditionCard.buttonText}
          <img className="pricingMonthlyFreeIcon" src={paths.icons.navigation} alt="Download Icon" />
        </button>
        {secondSectionText.monthCards.soloEditionCard.ctaText && (
          <strong>
            <p className="pricingMonthlyFreeCardCtaText">
              {secondSectionText.monthCards.soloEditionCard.ctaText}
            </p>
          </strong>
        )}
      </div>
    </div>
  );

  // ------------------------
  // SHOGUN MONTHLY CARD
  // ------------------------
  const monthlyPlanShogunCard = (
    <div className="pricingMonthlyShogunCard">
      <p className="pricingMonthlyShogunCardHighlight">{secondSectionText.monthCards.shogunEditionCard.highlight}</p>
      <h3 className="pricingMonthlyShogunCardEdition">{secondSectionText.monthCards.shogunEditionCard.edition}</h3>
      <h3 className="pricingMonthlyShogunCardPrice">{secondSectionText.monthCards.shogunEditionCard.price}</h3>
      {secondSectionText.annualCard.ideal && (
        <p className="pricingAnnualShogunIdeal">{secondSectionText.annualCard.ideal}</p>
      )}
      <div className="pricingAnnualFreeCardListContainer">
        {secondSectionText.annualCard.list.map((item, index) => (
          <div key={index} className="pricingAnnualFreeCardListItem">
            <img src={paths.icons.greenTick} alt="Green tick icon indicating success, approval, or completion" />
            <li dangerouslySetInnerHTML={{ __html: item }}></li>
          </div>
        ))}
      </div>
      <div className="pricingMonthlyFreeCardFooter">
        <button className="pricingMonthlyShogunCardButton" onClick={()=>{handleButtonClick("/install")}}>
          {secondSectionText.monthCards.shogunEditionCard.buttonText}
          <img className="pricingMonthlyFreeIcon" src={paths.icons.navigation} alt="Trial Icon" />
        </button>
        <strong>
          <p className="pricingMonthlyShogunCardCtaText">
            {secondSectionText.monthCards.shogunEditionCard.ctaText}
          </p>
        </strong>
      </div>
    </div>
  );

  // ------------------------
  // SHOGUN ANNUAL / MULTI-YEAR CARDS
  // ------------------------
  const buildAnnualCard = (type) => {
    const plan =
      type === "annual"
        ? secondSectionText.annualCard
        : secondSectionText.multiYearCards?.[type];

    if (!plan) return null;

    return (
      <div className="pricingAnnualShogunCard">
        <p className="pricingMonthlyShogunCardHighlight">{plan.highlight}</p>
        <h3 className="pricingMonthlyShogunCardEdition">{plan.edition}</h3>
        <h3 className="pricingMonthlyShogunCardPrice">{plan.price}</h3>
        {plan.description && (
          <p className="pricingAnnualShogunDescription">{plan.description}</p>
        )}
        {plan.savings && (
          <p className="pricingAnnualShogunSavings">{plan.savings}</p>
        )}
        {plan.ideal && (
          <p className="pricingAnnualShogunIdeal">{plan.ideal}</p>
        )}

        <div className="pricingAnnualFreeCardListContainer">
          {secondSectionText.annualCard.list.map((item, index) => (
            <div key={index} className="pricingAnnualFreeCardListItem">
              <img src={paths.icons.greenTick} alt="Green tick icon indicating success, approval, or completion" />
              <li dangerouslySetInnerHTML={{ __html: item }}></li>
            </div>
          ))}
        </div>

        <div className="pricingMonthlyFreeCardFooter">
          <button className="pricingMonthlyShogunCardButton" onClick={()=>{handleButtonClick("/install")}}>
            {plan.buttonText}
            <img
              className="pricingMonthlyFreeIcon"
              src={paths.icons.navigation}
              alt="Trial Icon"
            />
          </button>
          <strong>
            <p className="pricingAnnualShogunCardCtaText">{plan.ctaText}</p>
          </strong>
        </div>
      </div>
    );
  };

  const EnterpriseCard = () => {
    return (
      <div className="pricingSecondAnnualEnterpriseCard">
        <p className="pricingSecondAnnualEnterpriseCardHighlight">
          {secondSectionEnterpriseCardText.highlight}
        </p>
        <h4 className="pricingSecondAnnualEnterpriseCardTitle">{secondSectionEnterpriseCardText.title}</h4>
        <p className="pricingSecondAnnualEnterpriseCardDescription">{secondSectionEnterpriseCardText.description}</p>
        <div className="pricingSecondAnnualEnterpriseCardButtonsContainer">
          <button className="pricingSecondAnnualEnterpriseCardButton" onClick={()=>{handleButtonClick("/support")}}>{secondSectionEnterpriseCardText.buttonText}</button>
          <p className="pricingSecondAnnualEnterpriseCardResponseTimeText">{secondSectionEnterpriseCardText.responseTimeText}</p>
        </div>
      </div>

    );
  }

  // ------------------------
  // MAIN RETURN SECTION
  // ------------------------
  useEffect(() => { }, [multiYear]);

  return (
    <section className="pricingSecondSection">
      <div className="pricingSecondContent">
        {billing === "annual" ? (
          <div className="pricingAnnualCardsContainer">
            {multiYear === "annual" && (
              <>
                {buildAnnualCard("annual")}
                {monthlyPlanFreeCard}
              </>
            )}
            {multiYear === "twoYear" && (
              <>
                {buildAnnualCard("twoYear")}
                {monthlyPlanFreeCard}
              </>
            )}
            {multiYear === "threeYear" && (
              <>
                {buildAnnualCard("threeYear")}
                {monthlyPlanFreeCard}
              </>
            )}
          </div>
        ) : (
          <div className="pricingMonthlyCardsContainer">
            {monthlyPlanShogunCard}
            {monthlyPlanFreeCard}
          </div>
        )}
      </div>
      {billing === "annual" ?
        <EnterpriseCard />
        : null}
    </section>
  );
}

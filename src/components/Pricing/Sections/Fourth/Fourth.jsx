import React from "react";
import { useSelector } from "react-redux";
import "./Fourth.css";
import { pricingFourthText } from "../../../../../public/static/pricingPageText";
import { paths } from "../../../../../public/static/paths";
import Image from "next/image";

export default function Fourth() {
  const { region } = useSelector((state) => state.pricing);
  const text = JSON.parse(JSON.stringify(pricingFourthText));
  text.cards[2].desc =
    region === "india"
      ? "Free up to 3 concurrent agents. ₹17,499/month unlimited users beyond that. No hidden costs, no complex calculations."
      : "Free up to 3 concurrent agents. $199/month unlimited users beyond that. No hidden costs, no complex calculations.";

  return (
    <section className="pricingFourthSection">
      <div className="pricingFourthHeader">
        <h2 dangerouslySetInnerHTML={{ __html: text.title }}></h2>
        <p>{text.subtitle}</p>
      </div>

      <div className="pricingFourthProblem">
        <div className="pricingFourthFlex">
          <p className="problemLabel">{text.problemTitle}</p>
          <span className="problemTag">{text.problemTag}</span>
        </div>
        <p className="problemDesc" dangerouslySetInnerHTML={{ __html: text.problemDesc }}></p>
      </div>

      <div className="pricingFourthCards">
        {text.cards.map((card, index) => (
          <div className="pricingFourthCard" key={index}>
            <div className="cardHeader">
              <Image width={0} height={0} className="cardIcon" src={card.icon} alt={card.alt}></Image>
              <div className="cardTitleRow">
                <h3>{card.title}</h3>
                {card.tag && <span className="cardTag">{card.tag}</span>}
              </div>
            </div>
            <p className="cardDesc">{card.desc}</p>
            {card.link && (
              <a href={`/faq?open=${card.id}`} className="cardLink">Learn more</a>
            )}
            {card.badges && (
              <div className="cardBadges">
                {card.badges.map((b, i) => (
                  <div key={i}>
                    <span key={i} className="badge">
                      <Image width={0} height={0} className="pricingFourthCardShield" src={paths.icons.cardPricingShield} alt="Grapecity white shield icon"></Image><p>
                        {b}
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

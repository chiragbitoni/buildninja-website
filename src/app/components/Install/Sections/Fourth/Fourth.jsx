"use client";

import "./Fourth.css";
import { fourthSectionText } from "../../../../../../public/static/installPageText";

export default function Fourth() {
  return (
    <section className="installFourthSection">
      <div className="installFourthContent">
        <h1 className="installFourthTitle">Need Help Getting Started?</h1>

        <div className="installFourthGrid">
          {fourthSectionText.cards.map((card, index) => (
            <div key={index} className="installFourthBox">
              <img
                src={card.icon}
                alt={card.title}
                className="installFourthIcon"
              />
              <h3 className="installFourthHeading">{card.title}</h3>
              <p className="installFourthText">{card.description}</p>
              <button className="installFourthBtn">{card.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

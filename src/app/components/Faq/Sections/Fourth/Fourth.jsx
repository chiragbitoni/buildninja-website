"use client";
import "./Fourth.css";
import { fourthSectionText } from "../../../../../../public/static/faqPageText";
import { useRouter } from "next/navigation";

export default function Fourth() {
  const router = useRouter();
  return (
    <section className="faqFourthSection">
      <div className="faqFourthContent">
        <h1 className="faqFourthTitle">{fourthSectionText.title}</h1>
        <p className="faqFourthSubtitle">{fourthSectionText.subTitle}</p>
        <div className="faqFourthGrid">
          {fourthSectionText.cards.map((card, index) => (
            <div key={index} className="faqFourthBox">
              <img
                src={card.icon}
                alt={card.title}
                className="faqFourthIcon"
              />
              <h3 className="faqFourthHeading">{card.title}</h3>
              <p className="faqFourthText">{card.description}</p>
              {card.link ?
                <button className="faqFourthBtn" onClick={()=>{window.location.href = card.link}}>{card.buttonText}</button> :
                <button className="faqFourthBtn" onClick={()=>{router.push(card.router)}}>{card.buttonText}</button>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

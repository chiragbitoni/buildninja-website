import React from "react";
import "./Seventh.css";
import { useSelector } from "react-redux";
import { pricingSeventhText } from "../../../../../public/static/pricingPageText";
import { useRouter } from "next/navigation";

function Seventh() {
  const { region, billing, multiYear } = useSelector((state) => state.pricing);
  const text = pricingSeventhText[region] || pricingSeventhText.global;

  // Combine all FAQs + button card into same list
  const faqsWithButton = [
    ...text.faqs,
    { isButton: true, question: "", answer: "" },
  ];
  const router = useRouter();
  const handleButtonClick = (e)=>{
    router.push(e);
  }
  return (
    <section className="pricingSeventhSection">
      <div className="pricingSeventhInner">
        <h2 className="pricingSeventhTitle">{text.title}</h2>

        <div className="pricingSeventhGrid">
          {faqsWithButton.map((faq, index) => (
            <div
              className={`pricingSeventhCard ${
                faq.isButton ? "pricingSeventhViewCard" : ""
              }`}
              key={index}
            >
              {faq.isButton ? (
                <button className="pricingSeventhButton" onClick={()=>{handleButtonClick("/faq")}}>{text.button}</button>
              ) : (
                <>
                  <h3 className="pricingSeventhQuestion">{faq.question}</h3>
                  <p className="pricingSeventhAnswer">{faq.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Seventh;

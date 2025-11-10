"use client";
import { useState } from "react";
import { thirdSectionText } from "../../../../../../public/static/faqPageText";
import "./Third.css";

export default function Third() {
  const [activeIndex, setActiveIndex] = useState({ category: null, index: null });
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs by question or answer
  const filteredFaqs = thirdSectionText.faqs.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const toggleFAQ = (categoryIndex, faqIndex) => {
    setActiveIndex(prev =>
      prev.category === categoryIndex && prev.index === faqIndex
        ? { category: null, index: null }
        : { category: categoryIndex, index: faqIndex }
    );
  };

  return (
    <section className="faqThirdSection">
      <div className="faqThirdContent">
        <div className="faq-search-container">
          <input
            type="text"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search-input"
          />
        </div>
        {filteredFaqs.map((category, catIdx) => (
          <div key={catIdx} className="faq-category">
            {category.catrgory && (
              <h2 className="faq-category-title"> {category.catrgory}</h2>
            )}
            {category.faqs.length === 0 ? (
              <p className="faq-no-results">No FAQs found.</p>
            ) : (
              <div className="faq-category-list">
                {category.faqs.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    className={`faq-item ${activeIndex.category === catIdx && activeIndex.index === faqIdx
                      ? "active"
                      : ""
                      }`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(catIdx, faqIdx)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon">
                        {activeIndex.category === catIdx && activeIndex.index === faqIdx
                          ? "▾"
                          : "▸"}
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
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

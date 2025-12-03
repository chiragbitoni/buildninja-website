"use client";
import { useEffect, useRef, useState } from "react";
import { thirdSectionText } from "../../../../../../public/static/faqPageText";
import "./Third.css";
import { useSearchParams } from "next/navigation";

export default function Third() {
  const [activeIndex, setActiveIndex] = useState({ category: null, index: null });
  const [searchTerm, setSearchTerm] = useState("");
  const faqRefs = useRef({});
  const searchParams = useSearchParams();
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

  // Filter FAQs by question or answer, keeping only categories that have matches
  const filteredFaqs = thirdSectionText.faqs
    .map(category => ({
      ...category,
      faqs: category.faqs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => category.faqs.length > 0); 

  // Toggle FAQ expand/collapse
  const toggleFAQ = (categoryIndex, faqIndex) => {
    setActiveIndex(prev =>
      prev.category === categoryIndex && prev.index === faqIndex
        ? { category: null, index: null }
        : { category: categoryIndex, index: faqIndex }
    );
  };

  // Highlight search term inside text
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="faq-highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };
  useEffect(() => {
    if (hasAutoScrolled) return; // ⛔ stop re-scroll

    const openId = searchParams.get("open");
    if (!openId) return;

    filteredFaqs.forEach((cat, catIndex) => {
      cat.faqs.forEach((faq, faqIndex) => {
        if (faq.id === openId) {
          setActiveIndex({ category: catIndex, index: faqIndex });

          setTimeout(() => {
            faqRefs.current[openId]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 200);

          setHasAutoScrolled(true);
        }
      });
    });
  }, [filteredFaqs, hasAutoScrolled]);

  return (
    <section className="faqThirdSection">
      <div className="faqThirdContent">
        {/* 🔍 Search Input */}
        <div className="faq-search-container">
          <input
            type="text"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search-input"
          />
        </div>

        {/* 🧭 Categories */}
        {filteredFaqs.length === 0 ? (
          <p className="faq-no-results">No FAQs found.</p>
        ) : (
          filteredFaqs.map((category, catIdx) => (
            <div key={catIdx} className="faq-category">
              {category.catrgory && (
                <h2 className="faq-category-title">{category.catrgory}</h2>
              )}
              <div className="faq-category-list">
                {category.faqs.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    ref={(el) => {
                      faqRefs.current[faq.id] = el;
                    }}
                    className={`faq-item ${activeIndex.category === catIdx && activeIndex.index === faqIdx
                      ? "active"
                      : ""
                      }`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(catIdx, faqIdx)}
                    >
                      <span>{highlightText(faq.question, searchTerm)}</span>
                      <span className="faq-icon">
                        {activeIndex.category === catIdx && activeIndex.index === faqIdx
                          ? "▾"
                          : "▸"}
                      </span>
                    </button>
                    <div className="faq-answer">
                      {/* <p>{highlightText(faq.answer, searchTerm)}</p> */}
                      <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, "<br>").replaceAll("**", "<strong>").replaceAll("/strong", "</strong>") }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

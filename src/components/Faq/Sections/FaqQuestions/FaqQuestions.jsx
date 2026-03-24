"use client";
import { useState, useRef, useEffect } from "react";
import s from "./FaqQuestions.module.css";
import { thirdSectionText } from "../../../../../public/static/faqPageText";
import { useSearchParams } from "next/navigation";

export default function FaqQuestions() {
  const [activeIndex, setActiveIndex] = useState({ category: null, index: null });
  const [searchTerm, setSearchTerm] = useState("");
  const faqRefs = useRef({});
  const searchParams = useSearchParams();
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

  // Filter FAQs by question or answer, keeping only categories that have matches
  const filteredFaqs = thirdSectionText.faqs
    .map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => {
        const cleanAnswer = faq.answer.replace(/<[^>]*>/g, "");
        return (
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cleanAnswer.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }),
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
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="faq-highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  const highlightHTML = (html, query) => {
    if (!query) return html;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})(?![^<]*>)`, "gi");

    return html.replace(
      regex,
      `<mark class="faq-highlight">$1</mark>`
    );
  };

  useEffect(() => {
    if (hasAutoScrolled) return;

    const openId = searchParams?.get("open");
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
          }, 300);

          setHasAutoScrolled(true);
        }
      });
    });
  }, [filteredFaqs, hasAutoScrolled, searchParams]);

  return (
    <section className={s.section}>
      <div className={s.inner}>
        {/* 🔍 Search Input */}
        <div className={s.searchContainer}>
          <svg className={s.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={s.searchInput}
          />
        </div>

        {/* 🧭 Categories */}
        {filteredFaqs.length === 0 ? (
          <p className={s.noResults}>No FAQs found for "{searchTerm}".</p>
        ) : (
          filteredFaqs.map((category, catIdx) => (
            <div key={catIdx} className={s.categoryGroup}>
              {(category.category || category.catrgory) && (
                <h2 className={s.categoryTitle}>{category.category || category.catrgory}</h2>
              )}
              <div className={s.faqList}>
                {category.faqs.map((faq, faqIdx) => {
                  const isOpen = activeIndex.category === catIdx && activeIndex.index === faqIdx;
                  return (
                    <div
                      key={faqIdx}
                      ref={(el) => { faqRefs.current[faq.id] = el; }}
                      className={`${s.faqCard} ${isOpen ? s.faqCardOpen : ""}`}
                      onClick={() => toggleFAQ(catIdx, faqIdx)}
                    >
                      <h3 className={s.faqQuestion}>
                        <span>{highlightText(faq.question, searchTerm)}</span>
                        <span className={`${s.faqChevron} ${isOpen ? s.faqChevronOpen : ""}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </h3>
                      {isOpen && (
                        <div
                          className={s.faqAnswer}
                          onClick={(e) => e.stopPropagation()}
                          dangerouslySetInnerHTML={{ __html: highlightHTML(faq.answer, searchTerm) }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

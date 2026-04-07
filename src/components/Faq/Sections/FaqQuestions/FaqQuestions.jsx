"use client";
import { useState, useRef, useEffect } from "react";
import s from "./FaqQuestions.module.css";
import { thirdSectionText } from "../../../../../public/static/faqPageText";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

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
        <motion.div 
          className={s.searchContainer} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
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
        </motion.div>

        {/* 🧭 Categories */}
        {filteredFaqs.length === 0 ? (
          <motion.p 
            className={s.noResults}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            No FAQs found for "{searchTerm}".
          </motion.p>
        ) : (
          filteredFaqs.map((category, catIdx) => (
            <motion.div 
              key={catIdx} 
              className={s.categoryGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
            >
              {(category.category || category.catrgory) && (
                <h2 className={s.categoryTitle}>{category.category || category.catrgory}</h2>
              )}
              <div className={s.faqList}>
                {category.faqs.map((faq, faqIdx) => {
                  const isOpen = activeIndex.category === catIdx && activeIndex.index === faqIdx;
                  return (
                    <motion.div
                      key={faqIdx}
                      ref={(el) => { faqRefs.current[faq.id] = el; }}
                      className={`${s.faqCard} ${isOpen ? s.faqCardOpen : ""}`}
                      onClick={() => toggleFAQ(catIdx, faqIdx)}
                      layout
                    >
                      <h3 className={s.faqQuestion}>
                        <span>{highlightText(faq.question, searchTerm)}</span>
                        <span className={`${s.faqChevron} ${isOpen ? s.faqChevronOpen : ""}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </h3>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={s.faqAnswer}
                            onClick={(e) => e.stopPropagation()}
                            style={{ overflow: "hidden" }}
                          >
                            <div dangerouslySetInnerHTML={{ __html: highlightHTML(faq.answer, searchTerm) }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}

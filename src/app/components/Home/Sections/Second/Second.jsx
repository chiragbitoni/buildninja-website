"use client";

import "./Second.css";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { secondSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
import "yet-another-react-lightbox/styles.css";

// ✅ Import Lightbox dynamically to avoid SSR issues
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function Second() {
  const [index, setIndex] = useState(-1);

  // Prepare slides for Lightbox
  const slides = secondSectionText.featuresCard.map((f) => ({
    src: f.img,
    alt: f.title,
  }));

  return (
    <section className="secondSection">
      <div className="secondSectionContent">
        <div>
          <h2 className="secondSectionTitle">
            {secondSectionText.title1}{" "}
            <span className="secondSectionTitlePink">
              {secondSectionText.title2}
            </span>
          </h2>
          <p className="secondSectionSubTitle">{secondSectionText.subtitle}</p>
        </div>

        {/* === Feature Cards Grid === */}
        <div className="features-section">
          {secondSectionText.featuresCard.map((f, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              onClick={() => setIndex(idx)} // open lightbox for that image
            >
              <div className="feature-icon">
                <Image
                  className="feature-icon-svg"
                  width="30"
                  height="30"
                  src={f.icon}
                  alt={f.title}
                />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div>
                <div className="feature-image">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={400}
                    height={220}
                  />
                </div>
                <div className="feature-card-hover-container">
                  <p className="feature-card-hover-text">{f.hover}</p>
                  <Image
                    className="feature-card-hover-icon"
                    width={20}
                    height={20}
                    src={paths.icons.arrowRightLong}
                    alt="arrow icon"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Lightbox Preview === */}
        {index >= 0 && (
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={slides}
            index={index}
            styles={{
              container: {
                backgroundColor: "rgba(0,0,0,0.95)",
              },
            }}
          />
        )}
      </div>
    </section>
  );
}

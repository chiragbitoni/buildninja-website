"use client";
import "./Fourth.css";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fourthSectionText } from "../../../../../../public/static/homePageText";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function Fourth() {
    const [index, setIndex] = useState(-1);

    const slides = fourthSectionText.featuresCard.map((f) => ({
        src: f.image,
        alt: f.title,
    }));


    return (
        <section className="fourthSection">
            <div className="fourthSectionContent">
                <h2 className="fourthSectionTitle">
                    {fourthSectionText.title1}{" "}
                    <span className="fourthSectionTitlePink">{fourthSectionText.title2}</span>
                </h2>
                <p className="fourthSectionSubTitle">{fourthSectionText.subtitle}</p>
            </div>

            <div className="fourthHomeFeatureCards">
                {fourthSectionText.featuresCard.map((f, idx) => (
                    <div className="fourthFeature-cardContainer" key={idx}>
                        <div className="fourthFeature-card">
                            <div className={`fourthFeature-content ${idx % 2 === 1 ? "reverse" : ""}`}>
                                <div className="fourthFeature-text">
                                    <h2 className="fourthFeature-title">{f.title}</h2>
                                    <p className="fourthFeature-description">{f.description}</p>
                                    <ul className="fourthFeature-points">
                                        {f.list.map((point, i) => (
                                            <li key={i}><b>{point.title}</b> - {point.desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <motion.div
                                    className="fourthFeature-image"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    onClick={() => setIndex(idx)}
                                >
                                    <Image
                                        src={f.image}
                                        alt={f.title}
                                        width={600}
                                        height={380}
                                        className="fourthFeature-img"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {index >= 0 && (
                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={slides}
                    index={index}
                    styles={{
                        container: {
                            backgroundColor: "rgba(0, 0, 0, 0.95)",
                        },
                    }}
                />
            )}
        </section>
    );
}

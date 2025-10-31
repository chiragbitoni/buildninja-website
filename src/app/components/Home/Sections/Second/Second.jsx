import "./Second.css";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { secondSectionText } from "../../../../../../public/static/homePageText";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { paths } from "../../../../../../public/static/paths";
export default function Second() {
    const [selected, setSelected] = useState(null);
    return (

        <section className="secondSection">
            <div className="secondSectionContent">
                <div>
                    <h2 className="secondSectionTitle">
                        {secondSectionText.title1} <span className="secondSectionTitlePink">{secondSectionText.title2}</span>
                    </h2>
                    <p className="secondSectionSubTitle">{secondSectionText.subtitle}</p>
                </div>
                <div className="features-section">
                    {secondSectionText.featuresCard.map((f, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-card"
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelected(f.img)}
                        >
                            <div className="feature-icon">
                                <Image className="feature-icon-svg" width="30" height="30" src={f.icon} alt={f.title}></Image>
                            </div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                            <div>

                                <div className="feature-image">
                                    <Image src={f.img} alt={f.title} width={400} height={220} />
                                </div>
                                <div className="feature-card-hover-container">
                                    <p className="feature-card-hover-text">{f.hover}</p>
                                    <Image className="feature-card-hover-icon" width={20} height={20} src={paths.icons.arrowRightLong} alt={"svgIcons"}></Image>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Full-screen preview */}
                    <AnimatePresence>
                        {selected && (
                            <motion.div
                                className="overlay"
                                onClick={() => setSelected(null)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="overlay-image"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.9 }}
                                >
                                    <Image src={selected} alt="Preview" width={1000} height={600} />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
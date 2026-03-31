"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { paths } from "../../../../../public/static/paths";
import s from "./Third.module.css";

export default function Third() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className={s.section}>
            <motion.div 
                className={s.container}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* LEFT CONTENT */}
                <motion.div 
                    className={s.left}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.span className={s.badge} variants={itemVariants}>
                        ESTABLISHED EXCELLENCE
                    </motion.span>

                    <motion.h2 className={s.title} variants={itemVariants}>
                        Built by <span>GrapeCity</span>
                    </motion.h2>

                    <motion.p className={s.description} variants={itemVariants}>
                        With over two decades of global trust, GrapeCity has been a pioneer in developer
                        tools. BuildNinja is the culmination of 25+ years of software engineering excellence,
                        designed to solve the real-world CI/CD pains we faced ourselves.
                    </motion.p>

                    <ul className={s.list}>
                        {[
                            { title: "Expert Support", desc: "Direct access to actual engineers" },
                            { title: "Global Trust", desc: "Trusted by enterprises worldwide" },
                            { title: "No Per-Seat Tax", desc: "Predictable, transparent pricing" },
                            { title: "Market Success", desc: "Streamlined release cycles" }
                        ].map((item, i) => (
                            <motion.li key={i} className={s.listItem} variants={itemVariants}>
                                <span className={s.check}>
                                    <Image className={s.checkImage} src={paths.icons.landingPageAssets.tickWithGreenBG} width={14} height={14} alt="Check mark" />
                                </span>
                                <div className={s.listItemText}>
                                    <strong>{item.title}</strong>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div 
                    className={s.right}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className={s.grid}>
                        {[
                            { icon: paths.icons.landingPageAssets.trophy, value: "25+", label: "Years of Innovation" },
                            { icon: paths.icons.landingPageAssets.golbe, value: "Global", label: "Enterprise Presence" },
                            { icon: paths.icons.landingPageAssets.agent_management, value: "10k+", label: "Devs Empowered" },
                            { icon: paths.icons.landingPageAssets.secure_check, value: "Secure", label: "Enterprise Proven" }
                        ].map((card, i) => (
                            <motion.div key={i} className={s.card} variants={itemVariants}>
                                <div className={s.icon}>
                                    <Image src={card.icon} width={48} height={48} alt={card.label} />
                                </div>
                                <h5 className={s.cardValue}>{card.value}</h5>
                                <p className={s.cardLabel}>{card.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}


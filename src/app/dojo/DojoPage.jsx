"use client";
import React from 'react';
import './DojoPage.css';
import { motion } from 'framer-motion';
import OrbitAnimation from '@/components/Home/OrbitAnimation';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function DojoPage() {
    const sandboxUrl = process.env.NEXT_PUBLIC_DOJO_URL;

    return (
        <div className="dojoPageMain">
            <div className="grid"></div>
            <OrbitAnimation />
            
            <motion.div 
                className="dojoHero"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.span variants={itemVariants} className="dojoBadge">Interactive Sandbox</motion.span>
                <motion.h1 variants={itemVariants} className="dojoTitle">Welcome to the Dojo</motion.h1>
                <motion.p variants={itemVariants} className="dojoSubtitle">
                    BuildNinja’s interactive sandbox environment where you can experiment with build configurations, 
                    simulate builds, and understand how execution works without impacting real projects.
                </motion.p>
                <div className="dojoActions">
                    <motion.button 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="dojoEnterBtn" 
                        onClick={() => window.open(sandboxUrl, "_self")}
                    >
                        Enter Dojo
                    </motion.button>
                    <motion.p variants={itemVariants} className="dojoSmallInfo">No installation required • Resets every 6 hours</motion.p>
                </div>
            </motion.div>

            <div className="dojoContent">
                <motion.section 
                    className="dojoSection"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>How Dojo Works</h2>
                    <p>Dojo is a shared sandbox designed for learning and experimentation. This environment provides a fully functional BuildNinja experience while applying usage limits to ensure fair access and system stability for all users.</p>
                </motion.section>

                <div className="dojoGrid">
                    <motion.div 
                        className="dojoCard"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -8, borderColor: "#FF4172", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                        viewport={{ once: true }}
                    >
                        <h3>Dojo Limitations</h3>
                        <ul>
                            <li>The sandbox resets automatically every 6 hours</li>
                            <li>All user-created projects and history are removed during reset</li>
                            <li>Maximum execution time of 5 minutes per build</li>
                            <li>Shared environment for optimal collaboration</li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        className="dojoCard"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -8, borderColor: "#FF4172", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                        viewport={{ once: true }}
                    >
                        <h3>Template Projects</h3>
                        <p>Dojo includes preconfigured template projects pined in your view to help you get started immediately. They demonstrate common BuildNinja use cases and features.</p>
                    </motion.div>
                </div>

                <motion.section 
                    className="dojoSection infoPanel"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="panelItem">
                        <h3>Authentication</h3>
                        <p>Access Dojo using the same email and password you used to register on the BuildNinja website. Authentication is handled automatically.</p>
                    </div>
                    <div className="panelItem">
                        <h3>Persistence</h3>
                        <p>Dojo does not retain data permanently. Copy any important configurations or logs externally before the periodic sandbox reset.</p>
                    </div>
                </motion.section>

                <section className="dojoSection exercises">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >Suggested Exercises</motion.h2>
                    <div className="exerciseTable">
                        <div className="exerciseRow header">
                            <span>Exercise</span>
                            <span>What You Do</span>
                            <span>What to Observe</span>
                        </div>
                        {[
                            { name: "Run Your First Build", do: "Open the default build configuration", see: "Real-time execution logs and status" },
                            { name: "Break the Build", do: "Modify a step with an invalid command", see: "How failures are detected and reported" },
                            { name: "Simulate Workflow", do: "Create a multi-step install/test/build", see: "End-to-end output and behavior" }
                        ].map((ex, i) => (
                            <motion.div 
                                key={i} 
                                className="exerciseRow"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="exName">{ex.name}</span>
                                <span>{ex.do}</span>
                                <span>{ex.see}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <motion.div 
                    className="finalCTA"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>The Dojo Awaits, Ninja</h2>
                    <p className="ctaSubtitle">Step into the sandbox, experiment with build pipelines, and master the core features of BuildNinja in minutes.</p>
                    <motion.button 
                        whileHover={{ scale: 1.1, boxShadow: "0 0 30px #FF4172" }}
                        className="dojoEnterBtn large" 
                        onClick={() => window.open(sandboxUrl, "_self")}
                    >
                        Launch Dojo Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

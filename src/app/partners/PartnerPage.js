"use client";
import { motion } from "framer-motion";
import PartnerHero from "../../components/Partner/Sections/PartnerHero/PartnerHero";
import PartnerBenefits from "../../components/Partner/Sections/PartnerBenefits/PartnerBenefits";
import PartnerDemographics from "../../components/Partner/Sections/PartnerDemographics/PartnerDemographics";
import PartnerModels from "../../components/Partner/Sections/PartnerModels/PartnerModels";
import PartnerForm from "../../components/Partner/Sections/PartnerForm/PartnerForm";

const revealVariants = {
    hidden: { 
        opacity: 0, 
        y: 80, 
        scale: 0.96,
        filter: "blur(10px)"
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 1.2, ease: "easeOut" }
        }
    }
};

export default function PartnerPage() {
    return (
        <div>
            <PartnerHero />
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
            >
                <PartnerBenefits />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
            >
                <PartnerDemographics />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
            >
                <PartnerModels />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
            >
                <PartnerForm />
            </motion.div>
        </div>
    );
}
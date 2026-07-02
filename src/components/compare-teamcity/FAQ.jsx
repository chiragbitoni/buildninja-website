"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Can BuildNinja replace TeamCity for .NET and Windows builds?",
    a: "Yes. BuildNinja has native MSBuild compilation and VSTest execution built in - no plugin installation or configuration required. Windows agents install via the Unified Installer and run natively on Windows Server and Windows desktop environments. Teams migrating from TeamCity's .NET workflows typically complete the transition in a few hours.",
  },
  {
    q: "Does BuildNinja support build chains like TeamCity?",
    a: "Full build chain support with DAG-based pipeline dependencies is on the BuildNinja roadmap for v1.2.0. Currently, multi-stage pipelines with sequential and parallel steps are fully supported. Teams with complex multi-project build chains should evaluate their specific dependency requirements before switching.",
  },
  {
    q: "How does BuildNinja compare to TeamCity on security and RBAC?",
    a: "Both platforms offer full RBAC with project-level and system-level permissions. BuildNinja includes AES-256 encryption for all secrets and all five major SSO providers in the free Growth Edition. TeamCity requires additional configuration or paid tiers for equivalent SSO coverage.",
  },
  {
    q: "TeamCity Professional is also free - why choose BuildNinja over it?",
    a: "TeamCity Professional caps you at 3 build agents and 100 build configurations. Most teams outgrow this quickly and face a significant jump to the $2,399/yr Enterprise license (includes 3 agents) plus $359/yr per additional agent. BuildNinja Growth Edition has no such caps - unlimited agents, unlimited configurations, unlimited users - all free.",
  },
  {
    q: "How long does it take to set up BuildNinja compared to TeamCity?",
    a: "BuildNinja deploys in under 5 minutes via a single Docker command or the Windows Unified Installer. TeamCity full enterprise setup with SSL, database configuration, agent setup, and LDAP/SSO integration typically takes several hours to a full day for an experienced DevOps engineer.",
  },
  {
    q: "Is there a migration guide from TeamCity to BuildNinja?",
    a: 'Yes. Most TeamCity-to-BuildNinja migrations complete in a few hours to a couple of days. The recommended approach: deploy BuildNinja alongside TeamCity, migrate low-risk projects first using the Dojo sandbox, move production pipelines after validation, then decommission TeamCity once the team is comfortable. See the Migration Guide section above for a detailed 5-step process.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-alt" style={{ marginBottom: "10px", display: "inline-flex" }}>
            Common questions
          </span>
          <h2 className={styles.sectionTitle}>BuildNinja vs TeamCity - common questions</h2>
        </motion.div>

        <div className={styles.faqCol}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <button
                className={styles.faqQ}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <Plus size={18} className={styles.faqIcon} />
              </button>
              <div className={styles.faqA}>
                <p>{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

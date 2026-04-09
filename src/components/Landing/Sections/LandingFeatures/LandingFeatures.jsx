"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import s from "./LandingFeatures.module.css";

const features = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: 'Build Automation & Scheduling',
        description: 'Trigger builds automatically with advanced scheduling and multi-environment support (dev, staging, production). Optimize workflows with flexible dependency resolution.',
        tags: ['Cron Support', 'Multi-stage Pipelines', 'Environment Scoping'],
        videoId: '5wFDALkVM0Y',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/schedule-build-triggers',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                <line x1="6" y1="9" x2="6" y2="21" />
            </svg>
        ),
        title: 'Version Control & Native Git',
        description: 'Deep integrations with GitHub, GitLab, Bitbucket, and any Git host. Built-in Git with intelligent caching cuts clone time dramatically.',
        tags: ['GitHub', 'GitLab', 'Bitbucket', 'Git Cache'],
        videoId: 'YOpVrKIF8wE',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/configure-and-edit-builds',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: 'Artifact & Deployment Management',
        description: 'Store, version, and distribute build outputs. Deploy to Kubernetes or Docker with zero downtime using canary strategies and environment-specific secrets.',
        tags: ['Docker', 'Kubernetes', 'Canary Deploy'],
        videoId: 'NJHpySRbJNs',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/configure-and-edit-builds',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Real-time Visibility & High-Density Dashboards',
        description: 'Monitor builds live — filter logs by runner, step, or time. Dashboards auto-refresh with customisable time ranges and beautiful performance charts.',
        tags: ['Live Logs', 'Auto-refresh', 'Build Charts'],
        videoId: 'Pjl3muKtmhE',
        videoLink: 'https://buildninja.grapehub.io/docs/user-guide/customize-dashboard-view',
        dojoLink: '/dojo',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Agent Management',
        description: 'Authorize, monitor, and configure build agents across Windows, Linux, and macOS. Set capability requirements to route builds to the right agent automatically.',
        tags: ['Windows', 'Linux', 'macOS', 'Auto-routing'],
        videoId: 'MnvaPLguA6c',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-agents/',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: 'Enterprise Security & RBAC',
        description: 'Role-based access control (RBAC) at project and system level. Native support for LDAP and granular permissions management. AES-256 encryption for all secrets.',
        tags: ['RBAC', 'LDAP Integration', 'AES-256'],
        videoId: 'C-Ln6bbGo2E',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/manage-project-and-configuration-access',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
        title: 'Single Sign-On (SSO) Support',
        description: 'Supports multiple SSO providers including GitHub, GitLab, Google, Microsoft, and Slack for streamlined enterprise authentication.',
        tags: ['OAuth 2.0', 'OIDC', 'SAML 2.0', 'Enterprise Ready'],
        videoId: 'C-Ln6bbGo2E',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/manage-project-and-configuration-access',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
            </svg>
        ),
        title: 'Pipeline Runners',
        description: 'Execute scripts in any shell. Run commands on remote servers via SSH. Define build parameters and variables securely at config or project level.',
        tags: ['SSH Runner', 'Script Runner', 'Build Params'],
        videoId: 'IOd9CmP6G4c',
        videoLink: 'https://buildninja.grapehub.io/docs/getting-started/interface-basics#build-runners',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: 'Notifications & Alerts',
        description: 'Configurable alerts for build results, agent disconnections, approvals, and more. Full SMTP + customisable email templates for every event.',
        tags: ['SMTP', 'Custom Templates', 'Slack-ready'],
        videoId: '2OuADSNMEoc',
        videoLink: 'https://buildninja.grapehub.io/docs/manage-projects-and-builds/configure-build-notification-settings',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
            </svg>
        ),
        title: 'Unified Installer & Quick Setup',
        description: 'Install Server, Agent, and MongoDB in minutes with a single installer. Native support for Windows, Linux, and macOS. Get running from zero in under 5 minutes.',
        tags: ['One-click Install', 'Cross-platform', 'Docker & K8s'],
        videoId: 'zOW9BCYQkxk',
        videoLink: 'https://buildninja.grapehub.io/docs/getting-started/quick-setup-guide/configure-server-and-agent-on-windows',
    },
];

export default function LandingFeatures() {
    const dispatch = useDispatch();

    const handleVideoClick = (e, feature) => {
        e.stopPropagation();
        if (!feature.videoId) return;
        dispatch(
            openVideo({
                videoId: feature.videoId,
                title: feature.title,
                ctaText: feature.description,
                link: feature.videoLink,
            })
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className={s.section}>
            <motion.div 
                className={s.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className={s.label}>Powerful Features</span>
                <h3 className={s.title}>One platform, zero compromises</h3>
                <p className={s.subtitle}>
                    Every capability your engineering team needs — packaged into a cohesive, self-hosted CI/CD platform.
                </p>
            </motion.div>

            <motion.div 
                className={s.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className={s.card}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={s.iconBox}>
                            {feature.icon}
                        </div>

                        <div>
                            <h3 className={s.cardTitle}>{feature.title}</h3>
                            <p className={s.cardDesc}>{feature.description}</p>
                        </div>
                        
                        {feature.tags && (
                            <div className={s.tagRow}>
                                {feature.tags.map((tag, i) => (
                                    <span key={i} className={s.tag}>{tag}</span>
                                ))}
                            </div>
                        )}

                        {feature.videoId && (
                            <div className={s.buttonRow}>
                                <button
                                    className={s.videoBadge}
                                    onClick={(e) => handleVideoClick(e, feature)}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                    Watch Demo
                                </button>
                                {feature.dojoLink && (
                                    <Link href={feature.dojoLink} className={s.dojoBadge}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                        Try Dojo (No Install)
                                    </Link>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
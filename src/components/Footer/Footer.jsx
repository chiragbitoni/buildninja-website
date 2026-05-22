"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";
const DOCS_URL = process.env.NEXT_PUBLIC_DOCUMENTATION_URL || "";
const GRAPEHUB_URL = process.env.NEXT_PUBLIC_GRAPEHUB_URL || "";
const today = new Date();
const footerText = {
    company: {
        name: "BuildNinja",
        description:
            "CI/CD that just works.",
        description2: " Deploy with confidence, scale with ease.",
        copyright: "© " + today.getFullYear().toString() + " BuildNinja. All Rights Reserved.",
    },
    sections: [
        {
            title: "Product",
            links: [
                { label: "Features", link: "/features" },
                { label: "Pricing", link: "/pricing" },
                { label: "Install", link: "/install" },
                { label: "Dojo", link: "/dojo" },
                { label: "FAQ", link: "/faq" },
                { label: "Partners", link: "/partners" }
                // { label: "Roadmap", link: "/roadmap" },
            ],
        },
        {
            title: "Documentation",
            links: [
                { label: "Documentation", link: `${DOCS_URL}/docs/overview` },
                { label: "Getting Started", link: `${DOCS_URL}/docs/category/getting-started` },
                { label: "Tutorials", link: `${DOCS_URL}/docs/category/quick-setup-guide` },
                { label: "Licensing", link: `${DOCS_URL}/docs/category/licensing` },
                { label: "Release Notes", link: `${DOCS_URL}/docs/category/release-notes` },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", link: "/about" },
                { label: "Blog", link: "/blog" },
                { label: "Contact", link: "/contact" },
                { label: "Support", link: `/support` },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", link: "/privacy-policy" },
                { label: "Terms of Service", link: "/terms-of-service" },
                { label: "EULA", link: `/eula` },
                { label: "Refund & Cancellation", link: "/refund-and-cancellation-policy" },
            ],
        },
    ],
};

export default function Footer() {
    const router = useRouter();
    const handleClick = (link) => {
        if (!link) return;
        // External link (starts with http)
        if (link.startsWith("http")) {
            window.location.href = link;
            return;
        }
        // Internal navigation
        router.push(link);
    };

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    {/* Left Section */}
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogoContainer}>
                            <div className={styles.footerLogo}>
                                <Image width={178} height={48} src="/resources/logo_buildninja.svg" alt="BuildNinja Logo" className={styles.footerBuildNinjaLogo} />
                            </div>
                            {/* <h3 className={styles.footerTitle}>{footerText.company.name}</h3> */}
                        </div>
                        <p className={styles.footerDesc}>{footerText.company.description}<br />{footerText.company.description2}</p>

                        <div className={styles.footerGCSocial}>
                            <Image width={0} height={0} src="/resources/Footer/social/linkedin.png" alt="LinkedIn" className={styles.footerSocialIcons} onClick={() => { window.location.href = "https://www.linkedin.com/showcase/build-ninja/" }}></Image>
                            <Image width={0} height={0} src="/resources/Footer/social/instagram.png" alt="Instagram" className={styles.footerSocialIcons} onClick={() => { window.location.href = "https://www.instagram.com/grapecityindia/" }}></Image>
                            <Image width={0} height={0} src="/resources/Footer/social/facebook.png" alt="Facebook" className={styles.footerSocialIcons} onClick={() => { window.location.href = "https://www.facebook.com/GrapeCityIndiaPvtLtd" }}></Image>
                            <Image width={0} height={0} src="/resources/Footer/social/youtube.png" alt="YouTube" className={styles.footerSocialIcons} onClick={() => { window.location.href = "https://www.youtube.com/@BuildNinja_CICD" }}></Image>
                            <Image width={0} height={0} src="/resources/Footer/social/github.svg" alt="Github" className={styles.footerSocialIcons} onClick={() => { window.location.href = "https://github.com/BuildNinja-CICD" }}></Image>
                        </div>
                        <p className={styles.footerCopy}>{footerText.company.copyright}</p>
                    </div>
                    {/* Links Sections */}
                    <div className={styles.footerLinksContainer}>
                        {footerText.sections.map((section, idx) => (
                            <div className={styles.footerColumn} key={idx}>
                                <h4 className={styles.footerHeading}>{section.title}</h4>
                                <ul className={styles.footerList}>
                                    {section.links.map((item, i) => (
                                        <li key={i} className={styles.footerListItem}>
                                            <a
                                                href={item.link}
                                                onClick={(e) => {
                                                    if (!item.link.startsWith("http")) {
                                                        e.preventDefault();
                                                        router.push(item.link);
                                                    }
                                                }}
                                                className={styles.footerLink}
                                            >
                                                {item.label}
                                            </a>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

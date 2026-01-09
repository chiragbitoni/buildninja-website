"use client";
import "./Footer.css";
import { useRouter } from "next/navigation";
const DOCS_URL = process.env.NEXT_PUBLIC_DOCUMENTATION_URL || "";
const GRAPEHUB_URL = process.env.NEXT_PUBLIC_GRAPEHUB_URL || "";
const footerText = {
    company: {
        name: "BuildNinja",
        description:
            "CI/CD that just works.",
        description2: " Deploy with confidence, scale with ease.",
        copyright: "© 2025 GrapeCity India Pvt Ltd. All Rights Reserved.",
    },
    sections: [
        {
            title: "Product",
            links: [
                { label: "Features", link: "/features" },
                { label: "Pricing", link: "/pricing" },
                { label: "Install", link: "/install" },
                { label: "FAQ", link: "/faq" },
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
                { label: "About Us", link: `${GRAPEHUB_URL}/about` },
                { label: "Blog", link: `${GRAPEHUB_URL}/blog/categories/buildninja` },
                { label: "Contact", link: `${GRAPEHUB_URL}/contact` },
                { label: "Support", link: `/support` },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", link: `${GRAPEHUB_URL}/privacy-policy` },
                { label: "Terms of Service", link: `${GRAPEHUB_URL}/terms-of-service` },
                { label: "EULA", link: `/eula` },
                { label: "Refund & Cancellation", link: `${GRAPEHUB_URL}/refund-and-cancellation-policy` },
                { label: "Shipping Policy", link: `${GRAPEHUB_URL}/shipping-policy` },
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
        <footer className="footerContainer">
            <div className="footerWrapper">
                <div className="footerContent">
                    {/* Left Section */}
                    <div className="footerBrand">
                        <div className="footerLogoContainer">
                            <div className="footerLogo">
                                <img src="/resources/Favicon/faviconWhite.png" alt="BuildNinja Logo" />
                            </div>
                            <h3 className="footerTitle">{footerText.company.name}</h3>
                        </div>
                        <p className="footerDesc">{footerText.company.description}<br/>{footerText.company.description2}</p>
                        <img src="/resources/GrapecityWhite.png" alt="BuildNinja Logo" className="footerGCLogo" />
                        <div className="footerGCSocial">
                            <img src="/resources/Footer/social/linkedin.png" className="footerSocialIcons" onClick={() => { window.location.href = "https://www.linkedin.com/company/grapecityindiapvtltd" }}></img>
                            <img src="/resources/Footer/social/instagram.png" className="footerSocialIcons" onClick={() => { window.location.href = "https://www.instagram.com/grapecityindia/" }}></img>
                            <img src="/resources/Footer/social/facebook.png" className="footerSocialIcons" onClick={() => { window.location.href = "https://www.facebook.com/GrapeCityIndiaPvtLtd" }}></img>
                            <img src="/resources/Footer/social/youtube.png" className="footerSocialIcons" onClick={() => { window.location.href = "https://www.youtube.com/@grapecityindiapvtltd" }}></img>
                        </div>
                        <p className="footerCopy">{footerText.company.copyright}</p>
                    </div>
                    {/* Links Sections */}
                    <div className="footerLinksContainer">
                        {footerText.sections.map((section, idx) => (
                            <div className="footerColumn" key={idx}>
                                <h4 className="footerHeading">{section.title}</h4>
                                <ul className="footerList">
                                    {section.links.map((item, i) => (
                                        <li key={i} className="footerListItem">
                                            <button onClick={() => handleClick(item.link)} className="footerLink btnLink"> {item.label}</button>
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

"use client";
import "./Footer.css";
import { useRouter } from "next/navigation";
const DOCS_URL = process.env.NEXT_PUBLIC_DOCUMENTATION_URL || "";
const footerText = {
    company: {
        name: "BuildNinja",
        description:
            "CI/CD that just works. Deploy with confidence, scale with ease.",
        copyright: "© 2025 BuildNinja. All rights reserved.",
    },
    sections: [
        {
            title: "Navigation",
            links: [
                { label: "Features", link: "/features" },
                { label: "Pricing", link: "/pricing" },
                { label: "Install", link: "/install" },
                { label: "FAQ", link: "/faq" },
                { label: "Roadmap", link: "/roadmap" },
            ],
        },
        {
            title: "Documentation",
            links: [
                { label: "Documentation", link: `${DOCS_URL}/docs` },
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
                { label: "Support", link: "/support" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", link: "/privacy-policy" },
                { label: "Terms of Service", link: "/terms-of-service" },
                { label: "EULA", link: "/eula" },
                { label: "Refund & Cancellation", link: "/refund-and-cancellation-policy" },
                { label: "Shipping Policy", link: "/shipping-policy" },
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
                        <p className="footerDesc">{footerText.company.description}</p>
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
                                            <button
                                                onClick={() => handleClick(item.link)}
                                                className="footerLink btnLink"
                                            >
                                                {item.label}
                                            </button>
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

"use client";
import "./Footer.css";
import { useRouter } from "next/navigation";

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
                {
                    label: "Documentation",
                    link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`,
                },
                { label: "Download", link: "/download" },
                { label: "Support", link: "/support" },
                { label: "FAQ", link: "/faq" },
            ],
        },
        {
            title: "Docs & Support",
            links: [
                { label: "Getting Started", link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`,  },
                { label: "Integrations", link: "#" },
                { label: "Tutorials", link: "#" },
                { label: "Community", link: "#" },
                { label: "Status Page", link: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", link: "#" },
                { label: "Careers", link: "#" },
                { label: "Blog", link: "#" },
                { label: "Privacy Policy", link: "#" },
                { label: "Terms of Service", link: "#" },
                { label: "Contact", link: "#" },
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

import "./Footer.css";

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
                "Features & Pricing",
                "Demo",
                "Documentation",
                "Install",
                "Support",
                "FAQ",
            ],
        },
        {
            title: "Docs & Support",
            links: [
                "Getting Started",
                "API Reference",
                "Integrations",
                "Tutorials",
                "Community",
                "Status Page",
            ],
        },
        {
            title: "Company",
            links: [
                "About Us",
                "Careers",
                "Blog",
                "Privacy Policy",
                "Terms of Service",
                "Contact",
            ],
        },
    ],
};

export default function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerWrapper">
                <div className="footerContent">
                    {/* Left Section */}
                    <div className="footerBrand">
                        <div className="footerLogoContainer">
                            <div className="footerLogo"> <img src="resources/Favicon/faviconWhite.png" alt="BuildNinja Logo" /></div>
                            <h3 className="footerTitle">{footerText.company.name}</h3>
                        </div>
                        <div>
                            <p className="footerDesc">{footerText.company.description}</p>
                        </div>
                        <p className="footerCopy">{footerText.company.copyright}</p>
                    </div>

                    {/* Links Sections */}
                    <div className="footerLinksContainer">
                        {footerText.sections.map((section, idx) => (
                            <div className="footerColumn" key={idx}>
                                <h4 className="footerHeading">{section.title}</h4>
                                <ul className="footerList">
                                    {section.links.map((link, i) => (
                                        <li key={i} className="footerListItem">
                                            <a href="#" className="footerLink">
                                                {link}
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

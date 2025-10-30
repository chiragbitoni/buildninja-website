import "./Fourth.css";
import Image from "next/image";
import { fourthSectionText } from "../../../../../../public/static/homePageText";
export default function Fourth() {
    return (

        <section className="fourthSection">
            <div className="fourthSectionContent">
                <div>
                    <h2 className="fourthSectionTitle">
                        {fourthSectionText.title1} <span className="fourthSectionTitlePink">{fourthSectionText.title2}</span>
                    </h2>
                    <p className="fourthSectionSubTitle">{fourthSectionText.subtitle}</p>
                </div>
            </div>
            <div className="fourthHomeFeatureCards">
                {fourthSectionText.featuresCard.map((fourthFeature, index) => (
                    <div className="fourthFeature-cardContainer" key={index}>
                        <div key={index} className="fourthFeature-card">
                            <div
                                className={`fourthFeature-content ${index % 2 === 1 ? "reverse" : ""
                                    }`}
                            >
                                <div className="fourthFeature-text">
                                    <h2 className="fourthFeature-title">{fourthFeature.title}</h2>
                                    <p className="fourthFeature-description">{fourthFeature.description}</p>
                                    <ul className="fourthFeature-points">
                                        {fourthFeature.list.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="fourthFeature-image">
                                    <Image
                                        src={fourthFeature.image}
                                        alt={fourthFeature.title}
                                        width={600}
                                        height={380}
                                        className="fourthFeature-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="fourthHomeFeatureCards"></div>
            </div>
        </section>
    )
}
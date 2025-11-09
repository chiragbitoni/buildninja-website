import Image from "next/image";
import "./Eighth.css";
import { paths } from "../../../../../../public/static/paths";
import { eighthSectionText } from "../../../../../../public/static/homePageText";

export default function Eighth() {
    const cards = [
        { id: 1, key: "problem", color: "#FF4172", ...eighthSectionText.problem },
        { id: 2, key: "approach", color: "#4395FF", ...eighthSectionText.approach },
        { id: 3, key: "result", color: "#40FF1E", ...eighthSectionText.result },
    ];

    return (
        <section className="eighthSection">
            <h1 className="eighthTitle">{eighthSectionText.title}</h1>

            <div className="eighthCards">
                {cards.map((card) => (
                    <div key={card.id} className={`eighthCard ${card.key}`}>
                        <div className="eighthCardHeader">
                            <div className="eighthNumber">{card.id}</div>
                            <Image
                                src={card.icon}
                                alt={card.title}
                                width={50}
                                height={50}
                                className="eighthIcon"
                            />
                        </div>
                        <h2 className="eighthHeading">{card.title}</h2>
                        <p
                            className="eighthText"
                            dangerouslySetInnerHTML={{ __html: card.description }}
                        ></p>
                    </div>
                ))}
            </div>
        </section>
    );
}

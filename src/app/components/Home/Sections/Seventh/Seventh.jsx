import Image from "next/image";
import './Seventh.css';
import { seventhSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";

export default function Seventh() {
    const cards = [
        { icon: paths.icons.upward, title: seventhSectionText.card1.title, desc: seventhSectionText.card1.description },
        { icon: paths.icons.clock, title: seventhSectionText.card2.title, desc: seventhSectionText.card2.description },
        { icon: paths.icons.whiteShield, title: seventhSectionText.card3.title, desc: seventhSectionText.card3.description, highlight: true },
        { icon: paths.icons.circleGreenCheck, title: seventhSectionText.card4.title, desc: seventhSectionText.card4.description },
    ];

    return (
        <section className="seventhSection">
            <div className="seventhContent">
                <h1 className="seventhTitle">{seventhSectionText.title}</h1>
                <p className="seventhIntro">{seventhSectionText.subTitle}</p>
                <div className="seventhCards">
                    {cards.map((c, idx) => (
                        <div
                            key={idx}
                            className={`seventhCard ${c.highlight ? 'highlight' : ''}`}
                            role="group"
                            aria-label={c.title}
                        >
                            <div className="cardIcon">
                                <Image src={c.icon} alt={`${c.title} icon`} width={48} height={48} />
                            </div>

                            <div className="cardValue">{c.title}</div>

                            <div className="cardLabel">{c.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

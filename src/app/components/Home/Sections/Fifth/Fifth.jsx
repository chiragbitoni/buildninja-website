import "./Fifth.css";
import { fifthSectionText } from "../../../../../../public/static/homePageText";
import Image from "next/image";

export default function Fifth() {
    return (
        <section className="fifthHomeSection">
            <div className="fifthHomeContent">
                {/* FIRST TITLE */}
                <h2 className="fifthHomeTitle">{fifthSectionText.title}</h2>

                {/* SUBTITLE */}
                <div className="fifthHomeSubTitle">
                    <p>
                        {fifthSectionText.subTitle}
                        <br />
                        {fifthSectionText.subTitle2}
                    </p>
                </div>

                {/* CARDS */}
                <div className="fifthHomeCardsContainer">
                    {fifthSectionText.cards.map((data, index) => (
                        <div className="fifthHomeCard" key={index}>
                            <Image
                                width={100}
                                height={100}
                                alt={data.text}
                                src={data.icon}
                                className={
                                    data.icon.includes("ninty") || data.icon.includes("500")
                                        ? "fifthHomeCardIcon1"
                                        : "fifthHomeCardIcon2"
                                }
                            />
                            <div className="fifthHomeCardText">
                                {data.boldText && <strong>{data.boldText}</strong>}
                                <p>{data.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SECOND SECTION TITLES */}
                <h2 className="fifthHomeSecondTitle">{fifthSectionText.secondTitle}</h2>
                <h2 className="fifthHomeThirdTitle">{fifthSectionText.thirdTitle}</h2>
            </div>
        </section>
    );
}

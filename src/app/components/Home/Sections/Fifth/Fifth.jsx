import "./Fifth.css";
import { fifthSectionText } from "../../../../../../public/static/homePageText";
import Image from "next/image";
export default function Fifth() {
    return (
        <section className="fifthHomeSection">
            <div className="fifthHomeContent">
                <h2 className="fifthHomeTitle">{fifthSectionText.title}</h2>
                <p className="fifthHomeSubTitle">{fifthSectionText.subTitle}</p>
                <div className="fifthHomeCardsContainer">
                    {fifthSectionText.cards.map((data, index) => (
                        <div className="fifthHomeCard" key={index}>
                            <Image width={100} height={100} alt={data.text} src={data.icon} className={data.icon.includes("ninty") || data.icon.includes("500") ? "fifthHomeCardIcon1" : "fifthHomeCardIcon2"} />
                            <div className="fifthHomeCardText">
                                <p className="text1">{data.text}</p>
                                {data.text2 && <p className="text2">{data.text2}</p>}
                                {data.text3 && <p className="text3">{data.text3}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="fifthHomeTitle">{fifthSectionText.secondTitle}</h2>
                <h2 className="fifthHomeThirdTitle">{fifthSectionText.thirdTitle}</h2>    
            </div>
        </section>
    )
}
import Image from "next/image";
import './Ninth.css';
import { ninthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Ninth() {
    return (
        <section className="ninthSection">
            <div className="ninthContent">
                <h1 className="ninthTitle">
                    {ninthSectionText.title}
                </h1>
                <h3 className="ninthSubTitle">
                    {ninthSectionText.subtitle}
                </h3>
                <div className="ninth-inner-grid">
                    <button className="ninthPrimaryBtn">{ninthSectionText.primaryButton}</button>
                    <button className="ninthDemoBtn">{ninthSectionText.secondaryButton}</button>
                </div>
                <div className="ninthSecondTitleContainer">
                    <img src={paths.icons.greenShield} className="ninthSecondTitleIcon"></img>
                    <h4 className="ninthSecondTitle">{ninthSectionText.secondTitle}</h4>
                </div>
                <div className="ninthListGrid">
                    {ninthSectionText.list.map((item, index) => {
                        const alignClass = (index + 1) % 2 === 0 ? "rightAlign" : "";
                        return (
                            <div key={index} className={`ninthListContainer ${alignClass}`}>
                                <img src={paths.icons.greenTick} className="ninthTickIcon"></img>
                                <li className="ninthList">{item}</li>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

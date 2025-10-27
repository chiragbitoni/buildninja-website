import Image from "next/image";
import './Eighth.css';
import { eighthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Eighth() {
    return (
        <section className="eighthSection">
            <div className="eighthContent">
                <h1 className="eighthTitle">
                    {eighthSectionText.title}
                </h1>
                <h3 className="eightSubTitle">
                    {eighthSectionText.subtitle}
                </h3>
                <div className="eighth-inner-grid">
                    <button className="eightPrimaryBtn">{eighthSectionText.primaryButton}</button>
                    <button className="eightDemoBtn">{eighthSectionText.secondaryButton}</button>
                </div>
                <div className="eighthSecondTitleContainer">
                    <img src={paths.icons.greenShield} className="eightSecondTitleIcon"></img>
                    <h4 className="eightSecondTitle">{eighthSectionText.secondTitle}</h4>
                </div>
                <div className="eightListGrid">
                    {eighthSectionText.list.map((item, index) => {
                        const alignClass = (index + 1) % 2 === 0 ? "rightAlign" : "";
                        return (
                            <div key={index} className={`eightListContainer ${alignClass}`}>
                                <img src={paths.icons.greenTick} className="eightTickIcon"></img>
                                <li className="eighthList">{item}</li>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

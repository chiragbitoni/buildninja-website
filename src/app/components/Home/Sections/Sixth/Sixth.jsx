import Image from "next/image";
import './Sixth.css';
import { sixthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Sixth() {
    return (
        <section className="sixthSection">
            <div className="sixthContent">
                <div className="iconContainer">
                    <img src={paths.icons.target} className="iconsClass"></img>
                </div>
                <h1 className="sixthTitle">
                    {sixthSectionText.title1}<span className="text-green-600">{sixthSectionText.title2}</span>{sixthSectionText.title3}
                </h1>
                <div className="sixth-simple-grid">
                    <div className="sixth-simple-box">
                        <ul className="sixth-simple-list">
                            {sixthSectionText.list.map((item, index) => (
                                <div className="sixthListContainer" key={index}>
                                    <img src={paths.icons.greenTick} className="sixthTickIcon"></img><li className="sixth-simple-box-text">{item}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="sixth-simple-box">
                        <div className="smaller-box-container">
                            <div className="small-box">
                                <img src={paths.icons.upward} className="sixth-simple-box-icon" alt="Upward Icon"></img>
                                <h3 className="sixth-simple-box-heading">{sixthSectionText.card1.title}</h3>
                                <p className="sixth-simple-small-box-text">{sixthSectionText.card1.description}</p>
                            </div>
                            <div className="small-box">
                                <img src={paths.icons.clock} className="sixth-simple-box-icon" alt="Clock Icon"></img>
                                <h3 className="sixth-simple-box-heading">{sixthSectionText.card2.title}</h3>
                                <p className="sixth-simple-small-box-text">{sixthSectionText.card2.description}</p>
                            </div>
                            <div className="small-box">
                                <img src={paths.icons.whiteShield} className="sixth-simple-box-icon" alt="Shield Icon"></img>
                                <h3 className="sixth-simple-box-heading">{sixthSectionText.card3.title}</h3>
                                <p className="sixth-simple-small-box-text">{sixthSectionText.card3.description}</p>
                            </div>
                            <div className="small-box">
                                <img src={paths.icons.circleGreenCheck} className="sixth-simple-box-icon" alt="Check Icon"></img>
                                <h3 className="sixth-simple-box-heading">{sixthSectionText.card4.title}</h3>
                                <p className="sixth-simple-small-box-text">{sixthSectionText.card4.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

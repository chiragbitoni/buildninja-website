import Image from "next/image";
import './Seventh.css';
import { seventhSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Seventh() {
    return (
        <section className="seventhSection">
            <div className="seventhContent">
                <div className="seventh-simple-grid">
                    <div className="seventh-simple-box">
                        <h1 className="seventhTitle">
                            {seventhSectionText.title}
                        </h1>
                        <div className="seventh-inner-grid">
                            <div className="pr-block">
                                <div className="pr-row">
                                    <div className="pr-title">{seventhSectionText.problem.title}</div>
                                    <div className="pr-text">
                                        {seventhSectionText.problem.description}
                                    </div>
                                </div>
                            </div>
                            <div className="pr-block">
                                <div className="pr-row">
                                    <div className="pr-title">{seventhSectionText.result.title}</div>
                                    <div className="pr-text">
                                        {seventhSectionText.result.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seventh-simple-box">
                        <div className="approachContainer">
                            <h3 className="seventhCardTitle">{seventhSectionText.card.title}</h3>
                            <p className="seventhCardDescription">{seventhSectionText.card.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

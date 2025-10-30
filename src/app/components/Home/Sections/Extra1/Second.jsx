import Image from "next/image";
import './Second.css';
import { secondSectionText } from "../../../../../../public/static/homePageText";
export default function Second() {
    const subtitleParagraph = <p className="subtitleParagraph">
        <span className="text-pink-600 font-bold">{secondSectionText.subtitle1}</span>{secondSectionText.subtitle2}<span className="font-semibold">{secondSectionText.subtitle3}</span>{secondSectionText.subtitle4}<span className="font-semibold">{secondSectionText.subtitle5}</span>{secondSectionText.subtitle6}.
    </p>;
    return (
        <section className="secondSection">
            <div className="secondContent">
                <h1 className="secondTitle">
                    {secondSectionText.title}
                </h1>
                <h2 className="secondSubtitle">
                    {secondSectionText.secondaryTitle}
                </h2>
                {subtitleParagraph}
                <h2 className="secondThirdSubtitle mb-8">
                    {secondSectionText.thirdTitle}
                </h2>
                <div className="simple-grid">
                    {/* External Problems */}
                    <div className="simple-box">
                        <h3 className="simple-box-heading">{secondSectionText.externalProblems.title}</h3>
                        <ul className="second-simple-list">
                            {secondSectionText.externalProblems.problems.map((problem, index) => (
                                <li key={index}>{problem}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Internal Problems */}
                    <div className="simple-box">
                        <h3 className="simple-box-heading">{secondSectionText.internalProblems.title}</h3>
                        <ul className="second-simple-list">
                            {secondSectionText.internalProblems.problems.map((problem, index) => (
                                <li key={index}>{problem}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Philosophical Problems */}
                    <div className="simple-box">
                        <h3 className="simple-box-heading">{secondSectionText.philosophicalProblems.title}</h3>
                        <ul className="second-simple-list">
                            {secondSectionText.philosophicalProblems.problems.map((problem, index) => (
                                <li key={index}>{problem}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

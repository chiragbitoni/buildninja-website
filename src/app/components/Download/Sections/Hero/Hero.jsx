import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/downloadPageText";
export default function Hero() {
    return (
        <section className="downloadHeroSection">
            <div className="downloadHeroContent">
                <p className="downloadHeroHighlight">{heroSectionText.highlight}</p>
                <h1 className="downloadHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="downloadHeroSubtitle">
                    {heroSectionText.subTitle}<br />
                </p>
                <div className="downloadHeroEmailContainer">
                    <input
                        name='email'
                        type="email"
                        autoComplete="email"
                        className="downloadHeroEmailInput"
                        placeholder={heroSectionText.downloadCContainerText.placeHolder}
                    />
                    <button className="downloadHeroEmailButton">
                        {heroSectionText.downloadCContainerText.buttonText}
                    </button>
                    <div className="downloadHeroEmailIconTextContainer">
                        {heroSectionText.downloadCContainerText.iconText.map((text, index) => (
                            <div className='downloadHeroEmailIconContainer' key={index} >
                                <img className='downloadHeroEmailIcon' src={heroSectionText.downloadCContainerText.iconPath}></img>
                                <div className="downloadHeroEmailIconTextItem">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

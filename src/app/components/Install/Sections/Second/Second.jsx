import './Second.css';
import { secondSectionText } from '../../../../../../public/static/installPageText';
export default function Second() {
    return (
        <section className="installSecondSection">
            <div className="installSecondContent">
                <h1 className="installSecondTitle">
                    {secondSectionText.title} <br />
                </h1>
                <p className="installSecondSubtitle">
                    {secondSectionText.subTitle}<br />
                </p>
            </div>
        </section>
    );
}

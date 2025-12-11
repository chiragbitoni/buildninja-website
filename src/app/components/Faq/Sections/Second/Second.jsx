"use client"
import './Second.css';
import { secondSectionText } from '../../../../../../public/static/faqPageText';
export default function Second() {
    return (
        <section className="faqSecondSection">
            <div className="faqSecondContent">
                <h2 className="faqSecondContent">
                    {secondSectionText.content} <br />
                </h2>

            </div>
        </section>
    );
}

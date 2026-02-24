import "./Hero.css";
import {eulaContent} from "../../../../../../public/static/eulaPageText"
export default function Hero() {
    return (
        <section className="eulaHeroSection">
            <div className="eulaHeroContent">
                <div dangerouslySetInnerHTML={{ __html: eulaContent }}></div>
            </div>
        </section>
    )
}
import "./Third.css";
import { thirdSectionText } from "../../../../../public/static/featuresPageText";
import { useRouter } from "next/navigation";

export default function Third(){
    const router = useRouter();
    return (
        <section className="thirdFeaturesSection">
            <h2 className="thirdFeaturesTitle">{thirdSectionText.title}</h2>
            <p className="thirdFeaturesDescription">{thirdSectionText.description}</p>
            <div className="thirdFeaturesButtonContainer">
                <button className="thirdFeaturesFreeButton" onClick={()=>{router.push("/install")}}>{thirdSectionText.button1}</button>
                {/* <button className="thirdFeaturesShogunButton">{thirdSectionText.button2}</button> */}
            </div>
        </section>
    )
}
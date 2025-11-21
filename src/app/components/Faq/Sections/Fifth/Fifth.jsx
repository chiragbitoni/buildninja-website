import "./Fifth.css";
import { fifthSectionText } from "../../../../../../public/static/faqPageText";
import { useRouter } from "next/navigation";

export default function Fifth(){
    const router = useRouter();
    return (
        <section className="faqFifthSection">
            <h2 className="faqFifthTitle">{fifthSectionText.title}</h2>
            <p className="faqFifthDescription">{fifthSectionText.description}</p>
            <div className="faqFifthButtonContainer">
                <button className="faqFifthFreeButton" onClick={()=>{router.push("/install")}}>{fifthSectionText.button1}</button>
            </div>
        </section>
    )
}
import Image from "next/image";
import './Sixth.css';
import { sixthSectionText } from "../../../../public/static/homePageText";
import { paths } from "../../../../public/static/paths";
export default function Sixth() {
    return (
        <section className="sixthSection">
            <div className="sixthContent">
                <h2 className="sixthTitle">
                    {sixthSectionText.title}
                </h2>
                <div className="sixth-simple-grid">
                    <ul className="sixthSimple-list">
                        {sixthSectionText.list1.map((item, index) => (
                            <li key={index} className="sixth-simple-box-text">
                                <Image width={0} height={0} src={`${paths.root}${item.icon}`} alt={item.alt} />
                                {item.description}
                            </li>
                        ))}
                    </ul>
                    <ul className="sixthSimple-list">
                        {sixthSectionText.list2.map((item, index) => (
                            <li key={index} className="sixth-simple-box-text">
                                <Image
                                    src={`${paths.root}${item.icon}`}
                                    alt={item.alt}
                                    width={26}
                                    height={26}
                                    sizes="(max-width: 640px) 20px, 24px"
                                />
                                {item.description}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import './Fifth.css';
import { fifthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Fifth() {
    return (
        <section className="fifthSection">
            <div className="fifthContent">
                <h1 className="fifthTitle">
                    {fifthSectionText.title}
                </h1>

                <div className="fifth-simple-grid">
                    <ul className="simple-list">
                        {fifthSectionText.list1.map((item, index) => (
                            <li key={index} className="fifth-simple-box-text">
                                <img src={`${paths.root}${item.icon}`} alt="" />
                                {item.description}
                            </li>
                        ))}
                    </ul>
                    <ul className="simple-list">
                        {fifthSectionText.list2.map((item, index) => (
                            <li key={index} className="fifth-simple-box-text">
                                <Image
                                    src={`${paths.root}${item.icon}`}
                                    alt=""
                                    width={24}
                                    height={24}
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

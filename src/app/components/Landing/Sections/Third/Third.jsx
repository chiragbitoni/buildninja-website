import Image from "next/image";
import "./Third.css";
import { paths } from "../../../../../../public/static/paths";

export default function Third() {
    return (
        <section className="landingThirdSection">
            <div className="landingThirdContainer">

                {/* LEFT CONTENT */}
                <div className="landingThirdLeft">
                    <span className="landingThirdBadge">ESTABLISHED EXCELLENCE</span>

                    <h2 className="landingThirdTitle">
                        Built by <span>GrapeCity</span>
                    </h2>

                    <p className="landingThirdDescription">
                        With over two decades of global trust, GrapeCity has been a pioneer in developer
                        tools. BuildNinja is the culmination of 25+ years of software engineering excellence,
                        designed to solve the real-world CI/CD pains we faced ourselves.
                    </p>

                    <ul className="landingThirdList">
                        <li>
                            <span className="landingThirdCheck"><Image className="landingThirdCheckImage" src={paths.icons.landingPageAssets.tickWithGreenBG} width={0} height={0} alt="Grapcity White Tick Icon"></Image></span>
                            <div>
                                <strong>Expert Support</strong>
                                <p>Direct access to actual engineers</p>
                            </div>
                        </li>

                        <li>
                            <span className="landingThirdCheck"><Image className="landingThirdCheckImage" src={paths.icons.landingPageAssets.tickWithGreenBG} width={0} height={0} alt="Grapcity White Tick Icon"></Image></span>
                            <div>
                                <strong>Global Trust</strong>
                                <p>Trusted by enterprises worldwide</p>
                            </div>
                        </li>

                        <li>
                            <span className="landingThirdCheck"><Image className="landingThirdCheckImage" src={paths.icons.landingPageAssets.tickWithGreenBG} width={0} height={0} alt="Grapcity White Tick Icon"></Image></span>
                            <div>
                                <strong>No Per-Seat Tax</strong>
                                <p>Predictable, transparent pricing</p>
                            </div>
                        </li>

                        <li>
                            <span className="landingThirdCheck"><Image className="landingThirdCheckImage" src={paths.icons.landingPageAssets.tickWithGreenBG} width={0} height={0} alt="Grapcity White Tick Icon"></Image></span>
                            <div>
                                <strong>Market Success</strong>
                                <p>Streamlined release cycles</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* RIGHT CONTENT */}
                <div className="landingThirdRight">
                    <div className="landingThirdGrid">

                        <div className="landingThirdCard">
                            <div className="landingThirdIcon trophy">
                                <Image src={paths.icons.landingPageAssets.trophy} width={48} height={48} alt="Grapcity Trophy Icon"></Image>
                            </div>
                            <h5>25+</h5>
                            <p>YEARS OF INNOVATION</p>
                        </div>

                        <div className="landingThirdCard">
                            <div className="landingThirdIcon globe">
                                <Image src={paths.icons.landingPageAssets.golbe} width={48} height={48} alt="Grapcity Golbe Icon"></Image>
                            </div>
                            <h5>Global</h5>
                            <p>ENTERPRISE PRESENCE</p>
                        </div>

                        <div className="landingThirdCard">
                            <div className="landingThirdIcon users"><Image src={paths.icons.landingPageAssets.agent_management} width={48} height={48} alt="Grapcity Users Icon"></Image></div>
                            <h5>10k+</h5>
                            <p>DEVS EMPOWERED</p>
                        </div>

                        <div className="landingThirdCard">
                            <div className="landingThirdIcon shield">
                                <Image src={paths.icons.landingPageAssets.secure_check} width={48} height={48} alt="Grapcity Shield Icon"></Image>
                            </div>
                            <h5>Secure</h5>
                            <p>ENTERPRISE PRESENCE</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

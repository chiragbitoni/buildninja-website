import { useState } from "react";
import "./Fifth.css";
import { sendLeadEmail } from "@/services/email/sendEmail";
import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import 'react-international-phone/style.css'
import Image from "next/image";
import { paths } from "../../../../../../public/static/paths";

export default function Fifth() {


    return (
        <section className="partnerPageFifthSection">
            <div className="partnerFifthBanner">
                <Image src="/resources/icons/partnerPageAssets/buildNinjaStars.svg" width={20} height={20} alt="Grapecity Stars Icon"></Image>
                <p>How it works</p>
            </div>
            <div className="partnerFifthHeader">
                <h3 className="partnerFifthHeaderTitle">Ready to explore a partnership?</h3>
                <p className="partnerFifthHeaderSubtitle">If your organization is looking to enhance its DevOps offerings, improve client delivery, or build integrations within the CI/CD ecosystem, we’d love to talk.</p>
            </div>
            <div className="partnerPageFifthContainer">
                {/* LEFT CONTENT */}
                <div className="partnerPageFifthLeftCard">
                    <p className="partnerPageFifthSmallLabel">Quick summary</p>

                    <h2 className="partnerPageFifthCardTitle">
                        BuildNinja in 30 seconds
                    </h2>
                    <hr />
                    <div className="partnerPageFifthFeatureList">
                        <div className="partnerPageFifthFeatureItem">
                            <h4>Self-hosted & secure</h4>
                            <p>Keep pipelines, artifacts, and secrets fully inside the environment.</p>
                        </div>

                        <div className="partnerPageFifthFeatureItem">
                            <h4>Fast execution engine</h4>
                            <p>Parallel builds and high throughput for modern delivery.</p>
                        </div>

                        <div className="partnerPageFifthFeatureItem">
                            <h4>Flexible deployment</h4>
                            <p>Kubernetes, VMs, on-prem, or air-gapped.</p>
                        </div>

                        <div className="partnerPageFifthFeatureItem">
                            <h4>Predictable pricing</h4>
                            <p>No build-minute billing—transparent and consistent.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="partnerPageFifthNextStep">
                        <Image src="/resources/icons/partnerPageAssets/handshake.svg" height={32} width={32} alt="Grapecity Hand Shake Icon"></Image>
                        <div>
                            <strong>Next step</strong>
                            <p>We’ll align on a partner motion and map a pilot to a clear outcome.</p>
                        </div>
                    </div>

                    <button className="partnerPageFifthPrimaryBtn">
                        Email partnership
                    </button>
                </div>
                {/* RIGHT */}
                <div className="partnerPageFifthRight">
                    <div className="partnerPageFifthRightCard">
                        <div>
                            <div className="partnerPageFifthRightHeader">
                                <div>
                                    <h3 className="partnerPageFifthFormTitle">Our commitment</h3>
                                    <p className="partnerPageFifthFormSubtitle">
                                        Partner support you can count on
                                    </p>
                                </div>
                                <div className="partnerPageFifthRightHeaderImageWrapper">
                                    <Image src="/resources/icons/partnerPageAssets/flowerTick.svg" height={48} width={48} alt="Grapecity Hand Shake Icon"></Image>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Dedicated partnership manager</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Priority support for engineering & deployment</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Shared go-to-market motions</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Access to roadmap sessions</p>
                                    </li>
                                    <li>
                                        <Image src={paths.icons.landingPageAssets.tickWithGreenBG} width={30} height={30} alt="Grapcity White Tick Icon"></Image>
                                        <p>Early access to new features</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="partnerFifthSupport">
                                <Image src="/resources/icons/partnerPageAssets/clockBrown.svg" height={32} width={32} alt="Grapecity Hand Shake Icon"></Image>
                                <div>
                                    <h5>Simple enablement path</h5>
                                    <p>Start with a short discovery call, align on the engagement model, then run a co-planned pilot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partnerPageFifthRightCard partnerPageFifthRightCard2">
                        <h4 className="partnerPageFifthFormTitle">
                            What kind of partnership are you looking for?
                        </h4>

                        <form className="partnerPageFifthForm">
                            <select className="partnerPageFifthInput">
                                <option>Please select</option>
                                <option>Technology Partner</option>
                                <option>Reseller</option>
                                <option>System Integrator</option>
                            </select>

                            <div className="partnerPageFifthFormRow">
                                <input
                                    className="partnerPageFifthInput"
                                    placeholder="Your Name"
                                />
                                <input
                                    className="partnerPageFifthInput"
                                    placeholder="Your Company Email"
                                />
                            </div>

                            <input
                                className="partnerPageFifthInput"
                                placeholder="Your Phone Number"
                            />

                            <button type="submit" className="partnerPageFifthPrimaryBtn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

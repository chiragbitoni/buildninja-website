import Image from "next/image";
import "./Eighth.css";
import { eighthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";

export default function Eighth() {
    return (
        <section className="eighthSection">
            <h1 className="eighthTitle">Built by Engineers Who Use Their Own Tools</h1>
            <div className="eighthItem">
                <Image
                    src={paths.icons.problem}
                    alt="Problem Icon"
                    width={60}
                    height={60}
                    className="eighthIcon"
                />
                <h2 className="eighthHeading problem">The Problem</h2>
                <p className="eighthText">
                    We were tired of CI/CD tools that promised simplicity but delivered complexity.
                    Every deployment was a gamble, every configuration change a potential disaster.
                </p>
            </div>
            <Image className="eightHomedownArrowIcon" src={paths.icons.downArrow} height={30} width={30} alt={"Down Arrow"}></Image>
            <div className="eighthItem">
                <Image
                    src={eighthSectionText.approach.icon}
                    alt="Approach Icon"
                    width={60}
                    height={60}
                    className="eighthIcon"
                />
                <h2 className="eighthHeading approach">Our Approach</h2>
                <p className="eighthText">
                    We built BuildNinja with a simple philosophy: if it’s not simple enough for a new
                    engineer to understand in 5 minutes, it’s too complex. We eat our own dog food —
                    BuildNinja deploys itself.
                </p>
            </div>
            <Image className="eightHomedownArrowIcon" src={paths.icons.downArrow} height={30} width={30} alt={"Down Arrow"}></Image>
            <div className="eighthItem">
                <Image
                    src={paths.icons.result}
                    alt="Result Icon"
                    width={60}
                    height={60}
                    className="eighthIcon"
                />
                <h2 className="eighthHeading result">The Result</h2>
                <p className="eighthText">
                    A CI/CD platform that works the way engineers think. No YAML wizardry required.
                    No PhD in DevOps necessary. Just reliable, fast deployments that let you focus
                    on building great software.
                </p>
            </div>
        </section>
    );
}

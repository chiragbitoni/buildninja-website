import Image from "next/image";
import './Ninth.css';
import { ninthSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
import { useRouter } from "next/navigation";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { useDispatch } from "react-redux";
export default function Ninth() {
    const router = useRouter();
    const dispatch = useDispatch();
    return (
        <section className="ninthSection">
            <div className="ninthContent">
                <h1 className="ninthTitle">
                    {ninthSectionText.title}
                </h1>
                <h3 className="ninthSubTitle">
                    {ninthSectionText.subtitle}<br />
                    {ninthSectionText.subtitle2}<br />
                    {ninthSectionText.subtitle3}
                </h3>
                <div className="ninth-inner-grid">
                    <button className="ninthPrimaryBtn" onClick={() => { router.push("/install") }}>{ninthSectionText.primaryButton}</button>
                    <button className="ninthDemoBtn" onClick={() => dispatch(openVideo(process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID))}>{ninthSectionText.secondaryButton}</button>
                </div>
                <div className="ninthSecondTitleContainer">
                    <img src={paths.icons.greenShield} className="ninthSecondTitleIcon" alt="Green shield icon symbolizing security and protection"></img>
                    <h4 className="ninthSecondTitle">{ninthSectionText.secondTitle}</h4>
                </div>
                <div className="ninthListGrid">
                    {ninthSectionText.list.map((item, index) => {
                        const alignClass = (index + 1) % 2 === 0 ? "rightAlign" : "";
                        return (
                            <div key={index} className={`ninthListContainer ${alignClass}`}>
                                <img src={paths.icons.greenTick} className="ninthTickIcon" alt="Green tick icon indicating success, approval, or completion"></img>
                                <li className="ninthList">{item}</li>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

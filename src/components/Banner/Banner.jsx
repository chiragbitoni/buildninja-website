import Image from "next/image";
import "./Banner.css"
import { useRouter } from "next/navigation";
import { paths } from "../../../public/static/paths";
import { siteConfig } from '@/config/site';
export default function Banner() {
    const router = useRouter();
    return (
        <div className="bannerContainer" onClick={() => { router.push("/install"); }}>
            <p className="bannerHighlight">NEW </p>  <p className="bannerText">
                BuildNinja {siteConfig.version} is live!
                <span className="bannerBold">
                    Free for 3 concurrent build and unlimited agents
                </span>
            </p>
            {/* <Image src={paths.icons.arrowRightWhiteLong} width={24} height={24} alt="Grapecity Right Arrow Logo">s</Image> */}
            <Image width={30} height={30} alt="Grapecity BuildNinja Stars Logo" src={paths.icons.buildninjaStars}></Image>
        </div>
    )
}
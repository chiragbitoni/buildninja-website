import Image from "next/image";
import "./Banner.css"
import { useRouter } from "next/navigation";
import { paths } from "../../../public/static/paths";
export default function Banner() {
    const router = useRouter();
    return (
        <div className="bannerContainer" onClick={()=>{router.push("/install");}}>
            <p className="bannerHighlight">NEW </p>  <p>BuildNinja 1.1.0 is live! <b>Free for 3 concurrent build and unlimited agents</b> </p><Image src={paths.icons.arrowRightWhiteLong} width={24} height={24} alt="Grapecity Right Arrow Logo"></Image> <Image width={24} height={24} alt="Grapecity BuildNinja Stars Logo" src={paths.icons.buildninjaStars}></Image>
        </div>
    )
}
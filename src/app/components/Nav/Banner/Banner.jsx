'use client';

import { usePathname } from "next/navigation";
import "./Banner.css";
export default function Banner() {
    const pathname = usePathname();

    if (pathname !== "/") return null; // cleaner early return

    return (
        <section className="navbarBannerSection">
            <div dangerouslySetInnerHTML={{ __html: "<strong>BuildNinja 1.0</strong> Now Available | <strong>Unlimited</strong> Agents | <strong>Free</strong> up to 3 concurrent builds" }}>
            </div>
        </section>
    );
}

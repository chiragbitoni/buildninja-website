import Image from "next/image";
import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/homePageText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { openVideo } from "@/redux/slice/videoPopupSlice";
import { useDispatch } from "react-redux";

export default function Hero() {
    const router = useRouter();
    const dispatch = useDispatch();
    const images = [
        "/resources/Home/Slides/slide1.png",
        "/resources/Home/Slides/slide2.png",
        "/resources/Home/Slides/slide3.png",
    ];
    const paginationRef = useRef(null);
    return (
        <section className="heroSection">
            <div className="heroContent">
                <h1 className="heroTitle">
                    {heroSectionText.title1} <br />
                    {heroSectionText.title2}
                </h1>
                <p className="heroSubtitle">
                    {heroSectionText.subtitle}<br />
                    {heroSectionText.subtitle2}<br />
                    {heroSectionText.subtitle3}
                </p>
                <div className="heroButtons">
                    <button className="demoBtn" onClick={() => { router.push("/install") }}>{heroSectionText.primaryButton}</button>
                    <button className="heroBtn" onClick={() => dispatch(openVideo(process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID))}>{heroSectionText.secondaryButton}</button>
                </div>

                <div className="heroCarousel">
                    <div className="star-border rounded-xl p-[1px] overflow-hidden dark:shadow-2xl dark:shadow-indigo-900/10">
                        <div className="star-inner rounded-lg">
                            <Swiper
                                modules={[Autoplay, EffectFade, Pagination]}
                                slidesPerView={1}
                                loop={true}
                                effect="fade"
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                pagination={{
                                    clickable: true,
                                    el: paginationRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.pagination.el = paginationRef.current;
                                }}
                                className="mySwiper"
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            width={960}
                                            height={540}
                                            className="w-full h-auto"
                                            priority={index === 0}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="custom-pagination" ref={paginationRef}></div>
                </div>
            </div>
        </section>
    );
}

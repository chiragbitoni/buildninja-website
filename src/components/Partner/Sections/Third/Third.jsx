"use client";
import { useState, useEffect, useRef } from "react";
import "./Third.css";
import Image from "next/image";
import { paths } from "../../../../../public/static/paths";

const partnerData = [
  {
    id: 1,
    image: paths.icons.partnerPageAssets.cloudConsulting,
    title: "DevOps & Cloud Consulting",
    description:
      "Deliver BuildNinja as part of modernization, platform engineering, or transformation programs.",
    points: [
      "Assess + migrate from legacy CI",
      "Kubernetes-based CI/CD rollout",
      "Regulated/air-gapped implementations",
    ],
    support:
      "You'll get onboarding support, a clear delivery playbook, and a path to co-marketing once we're aligned on customer outcomes.",
  },
  {
    id: 2,
    image: paths.icons.partnerPageAssets.products,
    title: "Software / Product Companies",
    description:
      "Bundle enterprise-grade self-hosted CI/CD into your platform offering, or ship integrations that unlock adoption.",
    points: [
      "Integration plugins",
      "OEM/embedded deployments",
      "Platform engineering bundles",
    ],
    support:
      "You’ll get onboarding support, a clear delivery playbook, and a path to co-marketing once we’re aligned on customer outcomes.",
  },
  {
    id: 3,
    image: paths.icons.partnerPageAssets.flowerTick,
    title: "System Integrators",
    description:
      "Provide end-to-end dev platform solutions with a secure, compliant CI/CD layer.",
    points: [
      "Enterprise rollouts",
      "Policy + compliance tooling",
      "Migration factories",
    ],
    support:
      "You’ll get onboarding support, a clear delivery playbook, and a path to co-marketing once we’re aligned on customer outcomes.",
  },
  {
    id: 4,
    image: paths.icons.partnerPageAssets.connector,
    title: "Managed Service Providers",
    description:
      "Offer BuildNiNja as part of managed DevOps, infrastructure, or delivery pipelines.",
    points: [
      "Managed CI runners",
      "SRE-aligned support",
      "Cost-optimized delivery",
    ],
    support:
      "You’ll get onboarding support, a clear delivery playbook, and a path to co-marketing once we’re aligned on customer outcomes.",
  },
];

export default function PartnerThirdSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const active = partnerData[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === partnerData.length - 1 ? 0 : prev + 1
      );
    }, 3000); // change every 3 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // 👆 Manual click
  const handleClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true); // stop auto switching
  };

  return (
    <section className="partnerThirdSection">
      <div className="partnerThirdBanner">
        <Image src={paths.icons.partnerPageAssets.buildninjaStars} width={20} height={20} alt="Grapecity Stars Icon"></Image>
        <p>Why partner</p>
      </div>
      <h4 className="partnerThirdTitle">Teams we love working with</h4>
      <p className="partnerThirdSubtitle">DevOps-forward organizations who care about security, reliability, and a great<br /> developer experience.</p>
      <div className="partnerThirdContainer">
        {/* LEFT SIDE */}
        <div className="partnerThirdLeft">
          {partnerData.map((item, index) => (
            <div
              key={item.id}
              className={`partnerThirdCard ${activeIndex === index ? "partnerThirdActive" : ""
                }`}

              onClick={() => handleClick(index)}

            >
              <Image src={item.image} width={40} height={40} alt={`Grapecity ${item.title} Icon`}></Image>
              <div>
                <h4 className="partnerThirdCardTitle">{item.title}</h4>
                <p className="partnerThirdCardDesc">{item.description}</p>
              </div>
              <Image src={paths.icons.partnerPageAssets.rightArrow} width={10} height={10} alt={`Grapecity Arrow Icon`} className="pricingLeftArrowIcon"></Image>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="partnerThirdRight">
          <div className="partherThirdRightContainer">
            <div>
              <p className="partnerThirdRightHeading">Good fit for</p>
              <h3 className="partnerThirdRightTitle">{active.title}</h3>
              <p className="partnerThirdRightDesc">{active.description}</p>
            </div>
            <div className="partnerPageThirdRightHeaderImageWrapper">
              <Image src={paths.icons.partnerPageAssets.products} height={48} width={48} alt="Grapecity Hand Shake Icon"></Image>
            </div>
          </div>
          <hr />
          <ul className="partnerThirdPoints">
            {active.points.map((point, index) => (
              <li key={index}>
                <span className="partherThirdCheck"><Image className="partherThirdCheckImage" src={paths.icons.landingPageAssets.tickWithGreenBG} width={25} height={25} alt="Grapcity White Tick Icon"></Image></span>
                {point}
              </li>
            ))}
          </ul>

          <div className="partnerThirdSupport">
            <Image src={paths.icons.partnerPageAssets.products} height={32} width={32} alt="Grapecity Hand Shake Icon"></Image>
            <div>
              <h5>How we’ll support you</h5>
              <p>{active.support}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

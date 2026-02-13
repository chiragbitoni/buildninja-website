"use client";
import { useState } from "react";
import "./Third.css";
import Image from "next/image";

const partnerData = [
  {
    id: 1,
    image: "/resources/icons/partnerPageAssets/cloudConsulting.svg",
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
    image: "/resources/icons/partnerPageAssets/cloudConsulting.svg",
    title: "Software / Product Companies",
    description:
      "Bundle enterprise-grade self-hosted CI/CD into your platform offering.",
    points: [
      "White-label CI/CD integration",
      "Secure multi-tenant architecture",
      "API-first extensibility",
    ],
    support:
      "Technical onboarding, integration documentation, and direct solution engineering support.",
  },
  {
    id: 3,
    image: "/resources/icons/partnerPageAssets/cloudConsulting.svg",
    title: "System Integrators",
    description:
      "Provide end-to-end DevOps solutions with secure CI/CD layer.",
    points: [
      "Enterprise DevOps transformation",
      "Secure deployment workflows",
      "Compliance-ready pipelines",
    ],
    support:
      "Architecture assistance, customer demos, and joint implementation strategy.",
  },
  {
    id: 4,
    image: "/resources/icons/partnerPageAssets/products.svg",
    title: "Managed Service Providers",
    description:
      "Offer BuildNinja as part of managed DevOps and delivery pipelines.",
    points: [
      "Managed CI/CD infrastructure",
      "Monitoring + support",
      "Recurring revenue opportunities",
    ],
    support:
      "Go-to-market toolkit, training sessions, and dedicated partner manager.",
  },
];

export default function PartnerThirdSection() {
  const [active, setActive] = useState(partnerData[0]);

  return (
    <section className="partnerThirdSection">
      <div className="partnerThirdBanner">
        <Image src="/resources/icons/partnerPageAssets/buildNinjaStars.svg" width={20} height={20} alt="Grapecity Stars Icon"></Image>
        <p>Why partner</p>
      </div>
      <div className="partnerThirdContainer">
        {/* LEFT SIDE */}
        <div className="partnerThirdLeft">
          {partnerData.map((item) => (
            <div
              key={item.id}
              className={`partnerThirdCard ${active.id === item.id ? "partnerThirdActive" : ""
                }`}
              onClick={() => setActive(item)}
            >
              <Image src={item.image} width={40} height={40} alt="Image"></Image>
              <div>
                <h4 className="partnerThirdCardTitle">{item.title}</h4>
                <p className="partnerThirdCardDesc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="partnerThirdRight">
          <h3 className="partnerThirdRightTitle">{active.title}</h3>
          <p className="partnerThirdRightDesc">{active.description}</p>

          <ul className="partnerThirdPoints">
            {active.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="partnerThirdSupport">
            <h5>How we’ll support you</h5>
            <p>{active.support}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

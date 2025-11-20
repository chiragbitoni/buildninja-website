import React from "react";
import { useSelector } from "react-redux";
import "./Table.css";
import { paths } from "../../../../../../public/static/paths";

export default function Table() {
  const { region } = useSelector((state) => state.pricing);




  const TickText = ({ children }) => (
    <span className="pricingTableTickText">
      <img
        src={paths.icons.greenTickWithBG}
        alt="tick"
        className="pricingTableTick"
        loading="lazy"
      />
      {children}
    </span>
  );

  const pricingData = {
    india: {
      title: "Everything You Need, Choose Your Scale",
      subtitle:
        "Select your region to see pricing in your currency. Currently showing India (₹ INR) pricing",
      rows: [
        { feature: "Monthly Price", solo: "FREE", shogun: "₹16,999" },
        {
          feature: "Annual Price",
          solo: "FREE",
          shogun: (
            <>
              ₹1,36,999/year
              <small>(₹11,416/month</small>
                SAVE ₹67,989/year
            </>
          ),
        },
        {
          feature: "2-Year Upfront",
          solo: "FREE",
          shogun: (
            <>
              ₹2,19,999
              <small>(₹9,166/month)</small>
                SAVE ₹1,04,989/year
            </>
          ),
        },
        {
          feature: "3-Year Upfront",
          solo: "FREE",
          shogun: (
            <>
              ₹2,74,999
              <small>(₹7,638/month)</small>
                SAVE ₹1,13,899/year
            </>
          ),
        },
        {
          feature: "Best For",
          solo: "Individual developers & small teams",
          shogun: "Enterprise organizations",
        },
        { feature: "Users", solo: "Up to 10", shogun: <TickText>Unlimited</TickText>},
        {
          feature: "Build Agents",
          solo: <TickText>Unlimited</TickText>,
          shogun: <TickText>Unlimited</TickText>,
        },
        {
          feature: "Concurrent Agents",
          solo: "3 builds at same time",
          shogun: <TickText>Unlimited builds at same time</TickText>,
        },
        {
          feature: "Additional Concurrent",
          solo: (
            <>
              ₹12,199/month <br />₹16,999/year <br />₹26,999/2-year <br />₹37,999/3-year
            </>
          ),
          shogun: <TickText>Included</TickText>,
        },
        { feature: "Projects", solo: "Up to 100", shogun: <TickText>Unlimited</TickText> },
        {
          feature: "Configurations",
          solo: "Up to 100",
          shogun: <TickText>Unlimited</TickText>,
        },
        {
          feature: "Build History",
          solo: "30 days",
          shogun: <TickText>Perpetual (forever)</TickText>,
        },
        {
          feature: "SSO Integrations",
          solo: "1 provider",
          shogun: <TickText>All 5 providers</TickText>,
        },
        {
          feature: "Support",
          solo: "Community",
          shogun: <TickText>Priority business hours</TickText>,
        },
        {
          feature: "Migration Assistance",
          solo: "Self-service guides",
          shogun: (
            <TickText>
              Free for 10 projects (annual/2-year/3-year)
            </TickText>
          ),
        },
        {
          feature: "Professional Services",
          solo: "–",
          shogun: (
            <TickText>20 hours/year (annual/2-year/3-year)</TickText>
          ),
        },
        {
          feature: "License Buyout Credit",
          solo: "–",
          shogun: <TickText>25% credit (annual/2-year/3-year)</TickText>,
        },
        { feature: "Trial Period", solo: "30 days demo", shogun: "30 days demo" },
        { feature: "Grace Period", solo: "7 days", shogun: "7 days" },
      ],
    },
  };

  const table = pricingData[region] || pricingData.india;

  return (
    <section className="pricingTableSection">
      <div className="pricingTableHeader">
        <h2>{table.title}</h2>
        <p>{table.subtitle}</p>
      </div>

      <div className="pricingTableWrapper">
        <table className="pricingTable">
          <thead>
            <tr>
              <th className="alignLeft">Feature</th>
              <th className="alignLeft">Solo Edition</th>
              <th className="alignLeft">Shogun Edition</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index}>
                <td className="alignLeft">{row.feature}</td>
                <td className="alignLeft">{row.solo}</td>
                <td className="alignLeft">{row.shogun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

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
        { feature: "Monthly Price", solo: "FREE", shogun: "₹17,499" },
        {
          feature: "Annual Price",
          solo: "FREE",
          shogun: (
            <>
              ₹1,39,999/year
              <small>(₹11,666/month)</small>
              <span className="pricingTableGreenText">Save 33%</span>
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
              <span className="pricingTableGreenText">Save 48%</span>
            </>
          ),
        },
        {
          feature: "3-Year Upfront",
          solo: "FREE",
          shogun: (
            <>
              ₹2,79,999
              <small>(₹7,777/month)</small>
              <span className="pricingTableGreenText">SAVE 56%</span>
            </>
          ),
        },
        {
          feature: "Best For",
          solo: "Individual developers & small teams",
          shogun: "Growing Teams",
        },
        { feature: "Users", solo: "Up to 10", shogun: <TickText>Unlimited</TickText> },
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
              ₹2,199/month <br />₹16,999/year <span className="pricingTableGreenText">(SAVE 36%)</span><br />₹25,999/2-year <span className="pricingTableGreenText">(SAVE 51%)</span><br />₹34,999/3-year <span className="pricingTableGreenText">(SAVE 56%)</span>
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
        { feature: "Grace Period", solo: "7 days", shogun: "7 days" },
      ],
    },
    global:{
      title: "Everything You Need, Choose Your Scale",
      subtitle:
        "Select your region to see pricing in your currency. Currently showing India (₹ INR) pricing",
      rows: [
        { feature: "Monthly Price", solo: "FREE", shogun: "$199" },
        {
          feature: "Annual Price",
          solo: "FREE",
          shogun: (
            <>
              $1,599/year
              <small>($133/month)</small>
              <span className="pricingTableGreenText">Save 33%</span>
            </>
          ),
        },
        {
          feature: "2-Year Upfront",
          solo: "FREE",
          shogun: (
            <>
               $2,499/year
              <small>($104/month)</small>
              <span className="pricingTableGreenText">Save 48%</span>
            </>
          ),
        },
        {
          feature: "3-Year Upfront",
          solo: "FREE",
          shogun: (
            <>
             $3,199/year
              <small>($89/month)</small>
              <span className="pricingTableGreenText">Save 55%</span>
            </>
          ),
        },
        {
          feature: "Best For",
          solo: "Individual developers & small teams",
          shogun: "Growing Teams",
        },
        { feature: "Users", solo: "Up to 10", shogun: <TickText>Unlimited</TickText> },
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
              $25/month <br />$199/year <span className="pricingTableGreenText">(SAVE 34%)</span><br />$299/2-year <span className="pricingTableGreenText">(SAVE 50%)</span><br />$399/3-year <span className="pricingTableGreenText">(SAVE 56%)</span>
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
        { feature: "Grace Period", solo: "7 days", shogun: "7 days" },
      ],
    },
  };


  const table =
  region === "india"
    ? pricingData.india
    : pricingData.global;

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
              <th className="alignLeft">Shogun Edition</th>
              <th className="alignLeft">Solo Edition</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index}>
                <td className="alignLeft">{row.feature}</td>
                <td className="alignLeft">{row.shogun}</td>
                <td className="alignLeft">{row.solo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import { thirdSectionText } from "../../../../../../public/static/pricingPageText";
import "./Third.css";

export default function Third() {
  return (
    <section className="thirdPricingFeatureSection">
      <div>
        <h1 className="thirdPricingFeatureComparisionHeading">
          {thirdSectionText.heading}
        </h1>

        {/* ✅ New scroll wrapper */}
        <div className="thirdPricing-scrollWrapper">
          <table className="thirdPricing-table">
            <thead>
              <tr>
                {thirdSectionText.tableHeaders.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {thirdSectionText.tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td>{row.solo}</td>
                  <td>{row.shogun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

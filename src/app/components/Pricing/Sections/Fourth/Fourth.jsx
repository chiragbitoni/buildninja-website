import "./Fourth.css";
import { fourthSectionText } from "../../../../../../public/static/pricingPageText";
import { paths } from "../../../../../../public/static/paths";

export default function Fourth() {
  return (
    <section>
      <div className="fourthfeatures-root">
        <h2 className="fourthfeatures-title">{fourthSectionText.title}</h2>

        <div className="fourthfeatures-columns">
          {fourthSectionText.columns.map((column) => (
            <div className="fourthfeatures-card" key={column.heading}>
              <div className="fourthfeatures-header">
                <img
                  src={
                    column.heading === "Core Platform"
                      ? paths.icons.server
                      : paths.icons.shield
                  }
                  className="fourthPricingHeaderIcon"
                  alt="Feature icon"
                />
                <span className="fourthfeatures-card-title">
                  {column.heading}
                </span>
              </div>

              <ul className="fourthfeatures-list">
                {column.features.map((feature, index) => (
                  <li key={index}>
                    <img
                      src={paths.icons.greenTick}
                      className="fourthPricingTickIcon"
                      alt="Tick icon"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

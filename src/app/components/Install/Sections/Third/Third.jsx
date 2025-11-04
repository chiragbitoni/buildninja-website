import { thirdSectionText } from "../../../../../../public/static/installPageText";
import "./Third.css";

export default function Third() {
  const { card1, card2, card1Icon, card2Icon, title } = thirdSectionText;

  const renderCard = (data, icon) => (
    <div className="installThirdCard">
      <div className="installThirdCardHeadingContainer">
        <img
          src={icon}
          alt="icon"
          className="installThirdCardHeadingIcon"
        />
        <h3 className="installThirdCardTitle">{data.title}</h3>
      </div>

      <div className="installThirdCardContent">
        {Object.entries(data)
          .filter(([key]) => key !== "title")
          .map(([key, value]) => (
            <div key={key} className="installThirdCardRow">
              <span className="installThirdKey">{key}</span>
              <span className="installThirdValue">{value}</span>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <section className="installThirdSection">
      <div className="installThirdContent">
        <h2 className="installThirdTitle">{title}</h2>

        <div className="installThirdContainer">
          {renderCard(card1, card1Icon)}
          {renderCard(card2, card2Icon)}
        </div>
      </div>
    </section>
  );
}

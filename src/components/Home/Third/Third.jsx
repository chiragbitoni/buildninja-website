import Image from "next/image";
import "./Third.css";
import { thirdSectionText } from "../../../../public/static/homePageText";
import { paths } from "../../../../public/static/paths";

export default function Third() {
  return (
    <section className="thirdSection">
      <div className="thirdContent">
        <h1 className="thirdTitle">{thirdSectionText.title}</h1>

        <div className="third-simple-grid">
          {/* Step 1 */}
          <div className="third-simple-box">
            <Image width={0} height={0}
              src={paths.icons.pullAndRun}
              alt="CDS Icon"
              className="third-simple-box-icon"
            />
            <button className="third-simple-box-button" disabled>
              {thirdSectionText.card1Step}
            </button>
            <h3 className="third-simple-box-heading">
              {thirdSectionText.card1Title}
            </h3>
            <pre>
              <code>{thirdSectionText.card1command}</code>
            </pre>
            <p className="third-simple-box-heading">
              {thirdSectionText.card1Requirements}
            </p>
            <p className="third-simple-box-text">
              {thirdSectionText.card1Text}
            </p>
          </div>

          {/* Step 2 */}
          <div className="third-simple-box">
            <Image width={0} height={0}
              src={paths.icons.connectCode}
              alt="Versioning Icon"
              className="third-simple-box-icon"
            />
            <button className="third-simple-box-button" disabled>
              {thirdSectionText.card2Step}
            </button>
            <h3 className="third-simple-box-heading">
              {thirdSectionText.card2Title}
            </h3>
            <p className="third-simple-box-text" dangerouslySetInnerHTML={{__html:thirdSectionText.card2Text}}>
            </p>
          </div>

          {/* Step 3 */}
          <div className="third-simple-box">
            <Image width={0} height={0}
              src={paths.icons.configuration}
              alt="Circle Check Icon"
              className="third-simple-box-icon"
            />
            <button className="third-simple-box-button" disabled>
              {thirdSectionText.card3Step}
            </button>
            <h3 className="third-simple-box-heading">
              {thirdSectionText.card3Title}
            </h3>
            <p className="third-simple-box-text">
              {thirdSectionText.card3Text}
            </p>
          </div>

          {/* Step 4 */}
          <div className="third-simple-box">
            <Image width={0} height={0}
              src={paths.icons.expand}
              alt="Upward Icon"
              className="third-simple-box-icon"
            />
            <button className="third-simple-box-button" disabled>
              {thirdSectionText.card4Step}
            </button>
            <h3 className="third-simple-box-heading">
              {thirdSectionText.card4Title}
            </h3>
            <p className="third-simple-box-text">
              {thirdSectionText.card4Text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import './Third.css';
import { thirdSectionText } from "../../../../../../public/static/homePageText";
import { paths } from "../../../../../../public/static/paths";
export default function Third() {
    return (
        <section className="thirdSection">
            <div className="thirdContent">
                <div className='thirdGrid'>
                    <div className="thirdCol">
                        <h3 className='thirdTitle'>{thirdSectionText.leftCell.title}</h3>
                        <ul className="third-simple-list1">
                            {thirdSectionText.leftCell.list.map((item, index) => (
                                <div className="thirdListContainer" key={index}>
                                    <li className="third-simple-box-text">{item}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="thirdCol">
                        <div className='rightCellContainer'>
                            <h3 className='thirdTitle'>{thirdSectionText.rightCell.title}</h3>
                            <ul className="third-simple-list2">
                                {thirdSectionText.rightCell.list.map((item, index) => (
                                    <div className="thirdListContainer" key={index}>
                                        <img src={paths.icons.greenTick} className="sixthTickIcon"></img><li className="third-simple-box-text">{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

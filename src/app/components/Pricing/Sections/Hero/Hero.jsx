import './Hero.css';
import { heroSectionText } from "../../../../../../public/static/pricingPageText";
import { useDispatch, useSelector } from 'react-redux';
import { setBillingCycle, togglePlan } from '@/redux/slice/planSlice';
export default function Hero() {
    const dispatch = useDispatch();
    const isAnnual = useSelector((state)=> state.plan.isAnnual);

    const handleToggle = ()=>{
        dispatch(togglePlan());
    }
    return (
        <section className="pricingHeroSection">
            <div className="pricingHeroContent">
                <h1 className="pricingHeroTitle">
                    {heroSectionText.title} <br />
                </h1>
                <p className="pricingHeroSubtitle">
                    {heroSectionText.subtitle}<br />
                </p>
                <div className="pricingPlanToggleSwitchContainer">
                    <p className="toggleSwitchOption1">{heroSectionText.toggleSwitch.option1}</p>
                    <label className="switch">
                        <input type="checkbox" checked={isAnnual} onChange={handleToggle}></input>
                        <span className="slider"></span>
                    </label>
                    <p className="toggleSwitchOption2">{heroSectionText.toggleSwitch.option2}</p>
                    <p className="toggleSwitchSavings">{heroSectionText.toggleSwitch.savings}</p>
                </div>
            </div>
        </section>
    );
}

"use client";
import PartnerHero from "../../components/Partner/Sections/PartnerHero/PartnerHero";
import PartnerBenefits from "../../components/Partner/Sections/PartnerBenefits/PartnerBenefits";
import PartnerDemographics from "../../components/Partner/Sections/PartnerDemographics/PartnerDemographics";
import PartnerModels from "../../components/Partner/Sections/PartnerModels/PartnerModels";
import PartnerForm from "../../components/Partner/Sections/PartnerForm/PartnerForm";
export default function PartnerPage() {
    return (
        <div>
            <PartnerHero />
            <PartnerBenefits />
            <PartnerDemographics />
            <PartnerModels />
            <PartnerForm />
        </div>
    );
}

import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { HowItWorks } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { CTA } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/CTA";
import { ourSpecialFeaturesData } from "../../data/LegalServicesPagesData/CommonData/ourSpecialFeaturesData";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";
import { OurPartners } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/OurPartners";
import { typesOfTrademark } from "../../data/LegalServicesPagesData/TrademarkSearch/typesOfTrademark";
import { trademarkRegistrationHeroHeadingData } from "../../data/LegalServicesPagesData/TrademarkRegistration/trademarkRegistrationHeroHeading";

function TrademarkRegistration() {
  return (
    <div>
      <HeroHeading data={trademarkRegistrationHeroHeadingData.data} />
      <CustomH2 title={"How it Works?"} />
      <HowItWorks />
      <CustomH2 title={"Types of Trademark"} />
      <Benefits mockdata={typesOfTrademark} />
      <CTA
        data={{
          heading: "Start with Trademark Registration",
          subheading: "Trademark Registration by Experts",
          link: "",
        }}
      />
      <CustomH2 title={"Our Special Features"} />
      <Benefits mockdata={ourSpecialFeaturesData} />
      <CustomH2 title={"Our Testimonials"} />
      <Testimonials />
      <CustomH2 title={"Our Partners"} />
      <OurPartners />
      <CTA
        data={{
          heading: "Start with Trademark Registration",
          subheading: "Trademark Registration by Experts",
          link: "",
        }}
      />
    </div>
  );
}

export default TrademarkRegistration;

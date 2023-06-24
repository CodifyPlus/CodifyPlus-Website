import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import { heroHeadingData } from "../../data/LegalServicesPagesData/OnePersonCompany/heroHeadingData";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { HowItWorks } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { opBenefits } from "../../data/LegalServicesPagesData/OnePersonCompany/opBenefits";
import { CTA } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/CTA";
import { ourSpecialFeaturesData } from "../../data/LegalServicesPagesData/CommonData/ourSpecialFeaturesData";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";

function OnePersonCompany() {
  return (
    <div>
      <HeroHeading data={heroHeadingData.data} />
      <CustomH2 title={"How it Works?"} />
      <HowItWorks />
      <CustomH2 title={"Benefits of OPC"} />
      <Benefits mockdata={opBenefits} />
      <CTA data={{heading: "Get Company Compliances Done", subheading: "Private Limited Company Compliances with us.", link: ""}} />
      <CustomH2 title={"Our Special Features"} />
      <Benefits mockdata={ourSpecialFeaturesData} />
      <CustomH2 title={"Our Testimonials"} />
      <Testimonials />
    </div>
  );
}

export default OnePersonCompany;

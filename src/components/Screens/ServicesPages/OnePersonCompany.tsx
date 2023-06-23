import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import { heroHeadingData } from "../../data/LegalServicesPagesData/OnePersonCompany/heroHeadingData";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { HowItWorks } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { opBenefits } from "../../data/LegalServicesPagesData/OnePersonCompany/opBenefits";

function OnePersonCompany() {
  return (
    <div>
      <HeroHeading data={heroHeadingData.data} />
      <CustomH2 title={"How it Works?"} />
      <HowItWorks />
      <CustomH2 title={"Benefits of OPC"} />
      <Benefits mockdata={opBenefits} />
    </div>
  );
}

export default OnePersonCompany;

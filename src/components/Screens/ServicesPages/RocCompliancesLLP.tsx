import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { HowItWorks } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { CTA } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/CTA";
import { ourSpecialFeaturesData } from "../../data/LegalServicesPagesData/CommonData/ourSpecialFeaturesData";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";
import { OurPartners } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/OurPartners";
import { rocCompliancesLLPData } from "../../data/LegalServicesPagesData/RocCompliancesLLP/rocCompliancesLLPHeroHeading";

function RocCompliancesLLP() {
  return (
    <div>
      <HeroHeading data={rocCompliancesLLPData.data} />
      <CustomH2 title={"How it Works?"} />
      <HowItWorks />
      <CTA
        data={{
          heading: "Start with AMP Compliances of LLP",
          subheading: "Managed by Experts",
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
          heading: "Start with AMP Compliances of LLP",
          subheading: "Managed by Experts",
          link: "",
        }}
      />
    </div>
  );
}

export default RocCompliancesLLP;

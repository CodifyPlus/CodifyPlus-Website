import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { HowItWorks } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { CTA } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/CTA";
import { ourSpecialFeaturesData } from "../../data/LegalServicesPagesData/CommonData/ourSpecialFeaturesData";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";
import { OurPartners } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/OurPartners";
import { sec8Benefits } from "../../data/LegalServicesPagesData/Section8Company/sec8Benefits";
import { heroHeadingData } from "../../data/LegalServicesPagesData/Section8Company/heroHeadingData";

function Section8Company() {
  return (
    <div>
      <HeroHeading data={heroHeadingData.data} />
      <CustomH2 title={"How it Works?"} />
      <HowItWorks />
      <CustomH2 title={"Benefits of Section 8 Company"} />
      <Benefits mockdata={sec8Benefits} />
      <CTA
        data={{
          heading: "Start with Business Registration",
          subheading: "Private Limited Company Registration in just 7 Days",
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
          heading: "Start with Business Registration",
          subheading: "Private Limited Company Registration in just 7 Days",
          link: "",
        }}
      />
    </div>
  );
}

export default Section8Company;

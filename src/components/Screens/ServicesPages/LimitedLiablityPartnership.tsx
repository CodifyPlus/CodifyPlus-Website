import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import { heroHeadingData } from "../../data/LegalServicesPagesData/LimitedLiablityPartnership/heroHeadingData";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { HowItWorks } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HowItWorks";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { llpbenefits } from "../../data/LegalServicesPagesData/LimitedLiablityPartnership/llpBenefits";
import { CTA } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/CTA";
import { ourSpecialFeaturesData } from "../../data/LegalServicesPagesData/CommonData/ourSpecialFeaturesData";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";

function LimitedLiablityPartnership() {
  return (
    <div>
      <HeroHeading data={heroHeadingData.data} />
      <CustomH2 title={"How it Works?"} />
      <HowItWorks />
      <CustomH2 title={"Benefits of Limited Liability Partnership"} />
      <Benefits mockdata={llpbenefits} />
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
    </div>
  );
}

export default LimitedLiablityPartnership;

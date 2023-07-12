import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { Benefits } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Benefits";
import { CTA } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/CTA";
import { ourSpecialFeaturesData } from "../../data/LegalServicesPagesData/CommonData/ourSpecialFeaturesData";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";
import { OurPartners } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/OurPartners";
import { trademarkSearchHeroHeadingData } from "../../data/LegalServicesPagesData/TrademarkSearch/trademarkSearchHeroHeading";
import { typesOfTrademark } from "../../data/LegalServicesPagesData/TrademarkSearch/typesOfTrademark";

function TrademarkSearch() {
  return (
    <div>
      <HeroHeading data={trademarkSearchHeroHeadingData.data} />
      <CustomH2 title={"Types of Trademark"} />
      <Benefits mockdata={typesOfTrademark} />
      <CTA
        data={{
          heading: "Start with Trademark Registration",
          subheading: "Trademark Registration by experts",
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
          subheading: "Trademark Registration by experts",
          link: "",
        }}
      />
    </div>
  );
}

export default TrademarkSearch;

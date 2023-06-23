import React from "react";
import { HeroHeading } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/HeroHeading";
import { heroHeadingData } from "../../data/LegalServicesPagesData/OnePersonCompany/heroHeadingData";

function OnePersonCompany() {
  return (
    <div>
      <HeroHeading data={heroHeadingData.data} />
    </div>
  );
}

export default OnePersonCompany;

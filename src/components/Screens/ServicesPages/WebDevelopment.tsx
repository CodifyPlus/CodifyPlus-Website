import React from "react";
import { WebDevelopmentHero } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/Hero";
import { PreviousWork } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/PreviousWork";
import { previousWorkData1 } from "./PreviousWorkData1";
import { previousWorkData2 } from "./PreviousWorkData2";

function WebDevelopmentPage() {
  return (
    <div>
      <WebDevelopmentHero />
      <PreviousWork data={previousWorkData1} />
      <PreviousWork data={previousWorkData2} />
      Still Not Convinced?
    </div>
  );
}

export default WebDevelopmentPage;

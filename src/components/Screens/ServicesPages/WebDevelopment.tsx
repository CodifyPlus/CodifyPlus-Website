import React from "react";
import { WebDevelopmentHero } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/Hero";
import { PreviousWork } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/PreviousWork";
import { previousWorkData1 } from "./PreviousWorkData1";
import { previousWorkData2 } from "./PreviousWorkData2";
import { Title } from "@mantine/core";

function WebDevelopmentPage() {
  return (
    <div>
      <WebDevelopmentHero />
      <Title
        align="center"
        mb={50}
        sx={(theme) => ({
          fontWeight: 900,
        })}
      >
        Some of our previous work
      </Title>
      <PreviousWork data={previousWorkData1} />
      <PreviousWork data={previousWorkData2} />
      <Title
        align="center"
        mt={50}
        sx={(theme) => ({
          fontWeight: 900,
        })}
      >
        Still Not Convinced? Let's Talk!
      </Title>
    </div>
  );
}

export default WebDevelopmentPage;

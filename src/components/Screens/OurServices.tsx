import { Container } from "@mantine/core";
import React, { Suspense } from "react";
import featuredData from "../data/featuredData";
const FeaturesSection = React.lazy(() =>
  import("../Fragments/HomeFragments/Featured").then((module) => ({
    default: module.FeaturesSection,
  }))
);

function OurServices() {
  return (
    <Container my="md">
      <Suspense fallback={<div></div>}>
        <FeaturesSection {...featuredData} />
      </Suspense>
    </Container>
  );
}

export default OurServices;

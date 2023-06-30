import React, { Suspense } from "react";
import featuredData from "../data/featuredData";
const Hero = React.lazy(() =>
  import("../Fragments/HomeFragments/Hero").then((module) => ({
    default: module.Hero,
  }))
);
const FeaturesSection = React.lazy(() =>
  import("../Fragments/HomeFragments/Featured").then((module) => ({
    default: module.FeaturesSection,
  }))
);

function Home() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Hero></Hero>
        <FeaturesSection {...featuredData} />
      </Suspense>
    </>
  );
}

export default Home;

import React, { Suspense, useState } from "react";
import { Container, Grid, SimpleGrid } from "@mantine/core";
const LeftPanel = React.lazy(
  () => import("../Fragments/GSTCalculatorFragments/LeftPanel")
);
const RightPanel = React.lazy(
  () => import("../Fragments/GSTCalculatorFragments/RightPanel")
);

const GSTHeader = React.lazy(() =>
  import("../Fragments/GSTCalculatorFragments/GSTHeader").then((module) => ({
    default: module.GSTHeader,
  }))
);

function GSTCalculator() {
  const [toggle, setToggle] = useState(false);
  const [cost, setCost] = useState("");
  const [rate, setRate] = useState(5);
  const [profitRatio, setProfitRatio] = useState("");

  let selling;
  let profit;
  let gst;

  if (profitRatio === "" && toggle === false) {
    selling = Math.floor(+cost + (+cost * +rate) / 100);
    gst = Math.floor((+cost * +rate) / 100);
  } else if (profitRatio === "" && toggle === true) {
    const r = Math.floor((+cost * 100) / (100 + +rate));
    selling = Math.floor(r);
    gst = Math.floor(+cost - selling);
  } else if (profitRatio !== "" && toggle === false) {
    profit = Math.floor((+profitRatio * +cost) / 100);
    selling = Math.floor(+cost + profit + ((profit + +cost) * +rate) / 100);
    gst = Math.floor(((profit + +cost) * +rate) / 100);
  } else if (toggle === true) {
    const r = Math.floor((+cost * 100) / (100 + +rate));
    selling = Math.floor(r);
    gst = Math.floor(+cost - selling);
  }

  return (
    <Container my="md">
      <Suspense fallback={<div></div>}>
        <GSTHeader />
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <LeftPanel
            toggle={toggle}
            setToggle={setToggle}
            cost={cost}
            setCost={setCost}
            rate={rate}
            setRate={setRate}
            profitRatio={profitRatio}
            setProfitRatio={setProfitRatio}
          />
          <Grid gutter="md">
            <Grid.Col>
              <RightPanel
                selling={selling}
                profit={profit}
                gst={gst}
                toggle={toggle}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Suspense>
    </Container>
  );
}

export default GSTCalculator;

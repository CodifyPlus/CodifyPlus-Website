/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { Title, useMantineColorScheme } from "@mantine/core";
import { useEffect } from "react";
export default function ScheduleMeeting() {
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns["30min"]("ui", {
        theme: colorScheme,
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title
        order={2}
        mb={50}
        mt={0}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Schedule a Meeting
      </Title>
      <Cal
        calLink="anshgoyal/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: colorScheme }}
      />
    </>
  );
}

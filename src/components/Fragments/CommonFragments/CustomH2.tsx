import { Title } from "@mantine/core";
import React from "react";

function CustomH2({ title }: any) {
  return (
    <Title
      align="center"
      sx={(theme) => ({
        fontWeight: 900,
      })}
    >
      {title}
    </Title>
  );
}

export default CustomH2;

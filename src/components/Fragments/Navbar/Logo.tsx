import React from "react";
import WhiteBGLogo from "./CodifyPlusLogoLightMode.png";
import BlackBGLogo from "./CodifyPlusLogoDarkMode.png";
import BlackBGLogoWebm from "./CodifyPlus Animated Logo Dark.webm";
import WhiteBGLogoWebm from "./CodifyPlus Animated Logo.webm";
import { useMantineTheme } from "@mantine/core";

function Logo() {
  const { colorScheme } = useMantineTheme();
  return (
    <div>
      <video autoPlay loop muted width={150}>
        <source
          src={colorScheme === "dark" ? BlackBGLogoWebm : WhiteBGLogoWebm}
          type="video/webm"
        />
        <img
          src={colorScheme === "dark" ? BlackBGLogo : WhiteBGLogo}
          alt=""
          width={150}
        />
      </video>
    </div>
  );
}

export default Logo;

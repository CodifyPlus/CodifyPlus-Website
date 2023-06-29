import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Home from "./components/Screens/Home";
import GSTCalculator from "./components/Screens/GSTCalculator";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Fragments/Footer/Footer";
import footerLinks from "./components/data/footerLinks";
import { ContactUs } from "./components/Screens/ContactUs";
import OurProcess from "./components/Screens/OurProcess";
import OurServices from "./components/Screens/OurServices";
import OurProcesData from "./components/data/OurProcessData";
import WebDevelopmentPage from "./components/Screens/ServicesPages/WebDevelopment";
import OnePersonCompany from "./components/Screens/ServicesPages/OnePersonCompany";
import SoleProprietorship from "./components/Screens/ServicesPages/SoleProprietorship";
import LimitedLiablityPartnership from "./components/Screens/ServicesPages/LimitedLiablityPartnership";
import { MegaNavbar } from "./components/Fragments/Navbar/MegaNavbar";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: "Mulish, sans-serif",
          primaryColor: "yellow"
        }}
        withGlobalStyles
        withNormalizeCSS
      >
      
        <MegaNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="gst-calculator" element={<GSTCalculator />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="our-process" element={<OurProcess title={OurProcesData.data.title} description={OurProcesData.data.description} />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route path="op" element={<OnePersonCompany />} />
          <Route path="sole-proprietorship-firm" element={<SoleProprietorship />} />
          <Route path="limited-liability-partnership" element={<LimitedLiablityPartnership />} />
        </Routes>
        <Footer data={footerLinks.data} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Home from "./components/Screens/Home";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Fragments/Footer/Footer";
import footerLinks from "./components/data/footerLinks";
import OurProcesData from "./components/data/OurProcessData";
import { MegaNavbar } from "./components/Fragments/Navbar/MegaNavbar";
import React from "react";
const GSTCalculator = React.lazy(
  () => import("./components/Screens/GSTCalculator")
);
const ContactUs = React.lazy(() =>
  import("./components/Screens/ContactUs").then((module) => ({
    default: module.ContactUs,
  }))
);
const OurProcess = React.lazy(() => import("./components/Screens/OurProcess"));
const OurServices = React.lazy(
  () => import("./components/Screens/OurServices")
);
const WebDevelopmentPage = React.lazy(
  () => import("./components/Screens/ServicesPages/WebDevelopment")
);
const OnePersonCompany = React.lazy(
  () => import("./components/Screens/ServicesPages/OnePersonCompany")
);
const SoleProprietorship = React.lazy(
  () => import("./components/Screens/ServicesPages/SoleProprietorship")
);
const LimitedLiablityPartnership = React.lazy(
  () => import("./components/Screens/ServicesPages/LimitedLiablityPartnership")
);

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
          primaryColor: "yellow",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MegaNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route
            path="gst-calculator"
            element={
              <React.Suspense fallback={<></>}>
                <GSTCalculator />
              </React.Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <React.Suspense fallback={<></>}>
                <ContactUs />
              </React.Suspense>
            }
          />
          <Route
            path="our-process"
            element={
              <React.Suspense fallback={<></>}>
                <OurProcess
                  title={OurProcesData.data.title}
                  description={OurProcesData.data.description}
                />
              </React.Suspense>
            }
          />
          <Route
            path="our-services"
            element={
              <React.Suspense fallback={<></>}>
                <OurServices />
              </React.Suspense>
            }
          />
          <Route
            path="web-development"
            element={
              <React.Suspense fallback={<></>}>
                <WebDevelopmentPage />
              </React.Suspense>
            }
          />
          <Route
            path="op"
            element={
              <React.Suspense fallback={<></>}>
                <OnePersonCompany />
              </React.Suspense>
            }
          />
          <Route
            path="sole-proprietorship-firm"
            element={
              <React.Suspense fallback={<></>}>
                <SoleProprietorship />
              </React.Suspense>
            }
          />
          <Route
            path="limited-liability-partnership"
            element={
              <React.Suspense fallback={<></>}>
                <LimitedLiablityPartnership />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer data={footerLinks.data} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

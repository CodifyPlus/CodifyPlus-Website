import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Center,
  Loader,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Home from "./components/Screens/Home";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Fragments/Footer/Footer";
import { footerLinks, footerLinks2 } from "./components/data/footerLinks";
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
const AboutUs = React.lazy(() => import("./components/Screens/AboutUs"));
const ScheduleMeeting = React.lazy(
  () => import("./components/Screens/ScheduleMeeting")
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
const Section8Company = React.lazy(
  () => import("./components/Screens/ServicesPages/Section8Company")
);
const PrivateLimitedCompany = React.lazy(
  () => import("./components/Screens/ServicesPages/PrivateLimitedCompany")
);
const MSMERegistration = React.lazy(
  () => import("./components/Screens/ServicesPages/MSMERegistration")
);
const TrademarkSearch = React.lazy(
  () => import("./components/Screens/ServicesPages/TrademarkSearch")
);
const TrademarkRegistration = React.lazy(
  () => import("./components/Screens/ServicesPages/TrademarkRegistration")
);
const RocCompliancesPvtLtdCo = React.lazy(
  () => import("./components/Screens/ServicesPages/RocCompliancesPvtLtdCo")
);
const RocCompliancesLLP = React.lazy(
  () => import("./components/Screens/ServicesPages/RocCompliancesLLP")
);
const GSTRegistration = React.lazy(
  () => import("./components/Screens/ServicesPages/GSTRegistration")
);
const FSSAIRegistration = React.lazy(
  () => import("./components/Screens/ServicesPages/FSSAIRegistration")
);
const ISOCertification = React.lazy(
  () => import("./components/Screens/ServicesPages/ISOCertification")
);
const ImportExportCode = React.lazy(
  () => import("./components/Screens/ServicesPages/ImportExportCode")
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
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <GSTCalculator />
              </React.Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <ContactUs />
              </React.Suspense>
            }
          />
          <Route
            path="our-process"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
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
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <OurServices />
              </React.Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <AboutUs />
              </React.Suspense>
            }
          />
          <Route
            path="schedule-meeting"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <ScheduleMeeting />
              </React.Suspense>
            }
          />
          <Route
            path="web-development"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <WebDevelopmentPage />
              </React.Suspense>
            }
          />
          <Route
            path="op"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <OnePersonCompany />
              </React.Suspense>
            }
          />
          <Route
            path="sole-proprietorship-firm"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <SoleProprietorship />
              </React.Suspense>
            }
          />
          <Route
            path="limited-liability-partnership"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <LimitedLiablityPartnership />
              </React.Suspense>
            }
          />
          <Route
            path="section-8-company"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <Section8Company />
              </React.Suspense>
            }
          />
          <Route
            path="private-limited-company"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <PrivateLimitedCompany />
              </React.Suspense>
            }
          />
          <Route
            path="msme-registration"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <MSMERegistration />
              </React.Suspense>
            }
          />
          <Route
            path="trademark-search"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <TrademarkSearch />
              </React.Suspense>
            }
          />
          <Route
            path="trademark-registration"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <TrademarkRegistration />
              </React.Suspense>
            }
          />
          <Route
            path="roc-compliance-pvt-ltd-company"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <RocCompliancesPvtLtdCo />
              </React.Suspense>
            }
          />
          <Route
            path="roc-compliance-llp"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <RocCompliancesLLP />
              </React.Suspense>
            }
          />
          <Route
            path="gst-registration"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <GSTRegistration />
              </React.Suspense>
            }
          />
          <Route
            path="fssai-registration"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <FSSAIRegistration />
              </React.Suspense>
            }
          />
          <Route
            path="iso-certification"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <ISOCertification />
              </React.Suspense>
            }
          />
          <Route
            path="import-export-code"
            element={
              <React.Suspense
                fallback={
                  <>
                    <Center>
                      <Loader />
                    </Center>
                  </>
                }
              >
                <ImportExportCode />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer data={footerLinks.data} footerLinks2={footerLinks2.data} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

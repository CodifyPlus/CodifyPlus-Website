import React from "react";
import { WebDevelopmentHero } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/Hero";
import { PreviousWork } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/PreviousWork";
import { previousWorkData1 } from "./PreviousWorkData1";
import { previousWorkData2 } from "./PreviousWorkData2";
import {
  Title,
  Text,
  Container,
  Button,
  createStyles,
  rem,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { FAQsWebDevelopment } from "../../Fragments/ServicePagesFragments/WebDevelopmentPageFragment/FAQs";
import CustomH2 from "../../Fragments/CommonFragments/CustomH2";
import { Testimonials } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/Testimonials";
import { OurPartners } from "../../Fragments/ServicePagesFragments/LegalServicesPagesFragments/OurPartners";

const useStyles = createStyles((theme) => ({
  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "center",
      fontSize: theme.fontSizes.md,
    },
  },
}));

function WebDevelopmentPage() {
  const { classes } = useStyles();
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
        Still Confused?
      </Title>
      <Container p={0} size={800}>
        <Text
          size="lg"
          className={classes.description}
          color="dimmed"
          align="center"
          mt={10}
          p={10}
        >
          You might have a different website design in mind, or your business
          wants something unique. Don't worry, connect with our experts and
          discuss your website plan, and we would suggest you something at the
          best of our prices.
        </Text>
      </Container>
      <Container>
        <div className={classes.controls}>
          <Button
            component={Link}
            to="https://wa.me/917494909769?text=Hey.%20I%20want%20to%20know%20more%20about%20website%20development%20from%20CodifyPlus"
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            target={"_blank"}
          >
            Talk with us
          </Button>
          <Button
            component={Link}
            to="https://wa.me/917494909769?text=Hey.%20I%20want%20to%20know%20more%20about%20website%20development%20from%20CodifyPlus"
            className={classes.control}
            size="lg"
            target={"_blank"}
          >
            Get Quotation
          </Button>
        </div>
      </Container>
      <FAQsWebDevelopment />
      <CustomH2 title={"Our Testimonials"} />
      <Testimonials />
      <CustomH2 title={"Our Partners"} />
      <OurPartners />
    </div>
  );
}

export default WebDevelopmentPage;

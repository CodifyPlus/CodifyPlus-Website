import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
} from "@mantine/core";
import { Dots } from "./Dots";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(40),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(20),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(34),
      textAlign: "center",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "center",
      fontSize: theme.fontSizes.md,
    },
  },

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
}));

export function WebDevelopmentHero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title align={"center"} className={classes.title}>
          Web Development{" "}
          <Text component="span" className={classes.highlight} inherit>
            Services
          </Text>{" "}
        </Title>

        <Container p={0} size={800}>
          <Text size="lg" color="dimmed" className={classes.description}>
          Based on the recent study, up to 75% of customers expect brands to have a proper website. Website development is not an easy task. Web development demands a lot of IT skills and software knowledge. CodifyPlus has initiated web development services at the most affordable prices.
          </Text>
        </Container>

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
      </div>
    </Container>
  );
}

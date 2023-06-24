import {
  createStyles,
  Text,
  Title,
  Button,
  Image,
  rem,
  Container,
} from "@mantine/core";
import image from "./image.svg";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },
}));

export function CTA({ data }: any) {
  const { classes } = useStyles();
  return (
    <Container size="lg" mb={40}>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>{data.heading}</Title>
          <Text fw={500} fz="lg" mb={5}>
            {data.subheading}
          </Text>
          <Text fz="sm" c="dimmed">
            Every Start-Up deserves seamless, trusted & hassle-free Legal
            Services along with StartUp mentorship, in a very cost-effective
            manner.
          </Text>

          <div className={classes.controls}>
            <Button target={"_blank"} component={Link} to={data.link}>Get Quotation</Button>
          </div>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}

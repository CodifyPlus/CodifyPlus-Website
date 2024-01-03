import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Grid,
  Center,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import LogoStatic from "../Navbar/LogoStatic";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
  footerLinks2: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function Footer({ data, footerLinks2 }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Center>
        <Text
          key={index}
          className={classes.link}
          component={Link}
          to={link.link}
        >
          {link.label}
        </Text>
      </Center>
    ));

    return (
      <Grid.Col md={6} lg={3}>
        <Center>
          <div className={classes.wrapper} key={group.title}>
            <Center>
              <Text className={classes.title}>{group.title}</Text>
            </Center>
            {links}
          </div>
        </Center>
      </Grid.Col>
    );
  });

  const groups2 = footerLinks2.map((group) => {
    const links = group.links.map((link, index) => (
      <Center>
        <Text
          align="center"
          key={index}
          className={classes.link}
          component={Link}
          to={link.link}
        >
          {link.label}
        </Text>
      </Center>
    ));

    return (
      <Grid.Col md={6} lg={3}>
        <Center>
          <div className={classes.wrapper} key={group.title}>
            <Center>
              <Text className={classes.title}>{group.title}</Text>
            </Center>
            {links}
          </div>
        </Center>
      </Grid.Col>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Grid grow>
          <Grid.Col md={6} lg={3}>
            <Center>
              <div className={classes.logo}>
                <Center>
                  <LogoStatic />
                </Center>
                <Center>
                  <Text
                    size="xs"
                    color="dimmed"
                    className={classes.description}
                  >
                    Business Accelerator and Toolkit
                  </Text>
                </Center>
              </div>
            </Center>
          </Grid.Col>
          {groups}
        </Grid>
      </Container>
      <Container className={classes.inner}>
        <Grid>{groups2}</Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 CodifyPlus.com | All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

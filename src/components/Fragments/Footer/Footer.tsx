import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Grid,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconChevronRight,
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

  center: {
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
      display: "flex",
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

  wrapper: {},

  link: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
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
      <Group spacing={0}>
        <IconChevronRight size={17} />
        &nbsp;
        <Text
          size={17}
          key={index}
          className={classes.link}
          component={Link}
          to={link.link}
        >
          {link.label}
        </Text>
      </Group>
    ));

    return (
      <Grid.Col md={6} lg={3}>
        <div className={classes.wrapper} key={group.title}>
          <Text size={20} className={classes.title}>
            {group.title}
          </Text>
          {links}
        </div>
      </Grid.Col>
    );
  });

  const groups2 = footerLinks2.map((group) => {
    const links = group.links.map((link, index) => (
      <Group spacing={0}>
        <IconChevronRight size={17} />
        &nbsp;
        <Text
          size={17}
          key={index}
          className={classes.link}
          component={Link}
          to={link.link}
        >
          {link.label}
        </Text>
      </Group>
    ));

    return (
      <Grid.Col md={6} lg={3}>
        <div className={classes.wrapper} key={group.title}>
          <Text size={20} className={classes.title}>
            {group.title}
          </Text>
          {links}
        </div>
      </Grid.Col>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="auto" maw={1200} className={classes.inner}>
        <Grid grow>
          <Grid.Col md={6} lg={3}>
            <div className={classes.center}>
              <div className={classes.logo}>
                <LogoStatic />
                <Text size="xs" color="dimmed" className={classes.description}>
                  Business Accelerator and Toolkit
                </Text>
              </div>
            </div>
          </Grid.Col>
          {groups}
        </Grid>
      </Container>
      <Container size="auto" maw={1200} className={classes.inner}>
        <Grid grow>{groups2}</Grid>
      </Container>
      <Container size="auto" maw={1200} className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 CodifyPlus.com | All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            component={Link}
            to="https://twitter.com/CodifyPlus"
            size="lg"
          >
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to="https://www.instagram.com/codifyplus"
            size="lg"
          >
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

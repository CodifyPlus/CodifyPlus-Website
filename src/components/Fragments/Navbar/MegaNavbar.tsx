import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconMoneybag,
  IconLock,
  IconGlobe,
  IconSearch,
  IconTrademark,
  IconShield,
  IconBrush,
  IconBolt,
  IconCopyright,
  IconNews,
  IconShieldBolt,
  IconTable,
  IconCurrencyTugrik,
  IconVideo,
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconMail,
  IconShieldCheckered,
  IconHelp,
  IconLicense,
  IconSquareDot,
  IconTruck,
  IconBuilding,
} from "@tabler/icons-react";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { Link } from "react-router-dom";
import LogoStatic from "./LogoStatic";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  subGroup: {
    [theme.fn.smallerThan("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));

const mockdata_shurukro = [
  {
    icon: IconLock,
    title: "Pvt. Ltd. Company",
    description: "Register Your Private Limited Company from anywhere in India",
    link: "",
  },
  {
    icon: IconCoin,
    title: "Section 8 Company",
    description: "Register Your NGO/ Section 8 Company Online",
    link: "",
  },
  {
    icon: IconBook,
    title: "LLP Registration",
    description: "Register Your One Person Company by Start-Up Kro",
    link: "",
  },
  {
    icon: IconFingerprint,
    title: "UDYAM Registration",
    description: "Register Your MSME (UDYAM) Online in 24 Hrs",
    link: "",
  },
  {
    icon: IconChartPie3,
    title: "OPC Registration",
    description: "Register Your One Person Company by Start-Up Kro",
    link: "",
  },
  {
    icon: IconNotification,
    title: "Partnership Firm Registration",
    description: "Register Your Partnership Firm Online ",
    link: "",
  },
  {
    icon: IconGlobe,
    title: "Website Development",
    description:
      "Take your business online with our website development services",
    link: "",
  },
  {
    icon: IconBuilding,
    title: "Sole Proprietorship",
    description: "Register Your Sole Prop Online within 7 Days",
    link: "",
  },
];

const mockdata_protectkro = [
  {
    icon: IconSearch,
    title: "Trademark Search",
    description: "Get FREE Instant Trademark Search Report (TSR)",
    link: "",
  },
  {
    icon: IconTrademark,
    title: "Trademark Registration",
    description: "Get Trademark Application Filed within 4 Days",
    link: "",
  },
  {
    icon: IconShield,
    title: "Trademark Objection",
    description: "Clear the Trademark Objections by our IP Experts",
    link: "",
  },
  {
    icon: IconBrush,
    title: "Logo Designing",
    description: "Logo Designing starting at Just Rs. 999/-",
    link: "",
  },
  {
    icon: IconBolt,
    title: "Pitch Designing",
    description: "Business & Funding Pitch Designing by Start-Up Mentors",
    link: "",
  },
  {
    icon: IconCopyright,
    title: "Copyright",
    description: "Protect your books, websites, content with Copyright",
    link: "",
  },
  {
    icon: IconNews,
    title: "Brochure",
    description: "Brochure, Poster & Graphic Designing starting at Rs. 99/-",
    link: "",
  },
  {
    icon: IconShieldBolt,
    title: "Patent",
    description: "Patent Search & 1:1 mentoring by Patent Attorney",
    link: "",
  },
];

const mockdata_managekro = [
  {
    icon: IconTable,
    title: "Tax Compliances",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconCurrencyTugrik,
    title: "ITR",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconGlobe,
    title: "Website Management",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconVideo,
    title: "LMS Portal",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconMoneybag,
    title: "GST Compliances",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
];

const mockdata_growkro = [
  {
    icon: IconBrandWhatsapp,
    title: "WhatsApp Marketing",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconBrandTelegram,
    title: "Telegram Marketing",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconMail,
    title: "Email Marketing",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconMoneybag,
    title: "Funding",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconShieldCheckered,
    title: "Due Diligence",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconHelp,
    title: "Loan Assistance",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconLicense,
    title: "GST License",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconSquareDot,
    title: "FSSAI License",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconTruck,
    title: "Import/Export Code (IEC)",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
  {
    icon: IconLicense,
    title: "ISO Certification",
    description: "Calculate your GST on the products can services",
    link: "gst-calculator",
  },
];

export function MegaNavbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened_services, { toggle: toggleLinks_services }] =
    useDisclosure(false);
  const [linksOpened_tools, { toggle: toggleLinks_tools }] =
    useDisclosure(false);
  const [linksOpened_protectkro, { toggle: toggleLinks_protectkro }] =
    useDisclosure(false);
  const [linksOpened_growkro, { toggle: toggleLinks_growkro }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const links_shurukro = mockdata_shurukro.map((item) => (
    <UnstyledButton
      onClick={closeDrawer}
      component={Link}
      to={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group className={classes.subGroup} noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const links_protectkro = mockdata_protectkro.map((item) => (
    <UnstyledButton
      onClick={closeDrawer}
      component={Link}
      to={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group className={classes.subGroup} noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const links_managekro = mockdata_managekro.map((item) => (
    <UnstyledButton
      onClick={closeDrawer}
      component={Link}
      to={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group className={classes.subGroup} noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const links_growkro = mockdata_growkro.map((item) => (
    <UnstyledButton
      onClick={closeDrawer}
      component={Link}
      to={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group className={classes.subGroup} noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <Header
        height={60}
        px="md"
        style={{ position: "fixed", zIndex: 10, top: 0 }}
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Link to="/">
            <LogoStatic />
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Shuru Kro
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Services</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links_shurukro}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Connect on WhatsApp
                      </Text>
                      <Text size="xs" color="dimmed">
                        Directly chat with one of our executive and get quote
                        easily
                      </Text>
                    </div>
                    <Button
                      component={Link}
                      to={
                        "https://wa.me/917494909769?text=I want to opt for a service from CodifyPlus by StartupKro"
                      }
                      variant="default"
                    >
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Protect Kro
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Services</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links_protectkro}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Connect on WhatsApp
                      </Text>
                      <Text size="xs" color="dimmed">
                        Directly chat with one of our executive and get quote
                        easily
                      </Text>
                    </div>
                    <Button
                      component={Link}
                      to={
                        "https://wa.me/917494909769?text=I want to opt for a service from CodifyPlus by StartupKro"
                      }
                      variant="default"
                    >
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Manage Kro
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Tools</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links_managekro}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Connect on WhatsApp
                      </Text>
                      <Text size="xs" color="dimmed">
                        Directly chat with one of our executive and get quote
                        easily
                      </Text>
                    </div>
                    <Button
                      component={Link}
                      to={
                        "https://wa.me/917494909769?text=I want to opt for a service from CodifyPlus by StartupKro"
                      }
                      variant="default"
                    >
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Grow Kro
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Services</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links_growkro}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Connect on WhatsApp
                      </Text>
                      <Text size="xs" color="dimmed">
                        Directly chat with one of our executive and get quote
                        easily
                      </Text>
                    </div>
                    <Button
                      component={Link}
                      to={
                        "https://wa.me/917494909769?text=I want to opt for a service from CodifyPlus by StartupKro"
                      }
                      variant="default"
                    >
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="schedule-meeting" className={classes.link}>
              Schedule a meeting
            </Link>
            <Link
              to="https://dashboard.codifyplus.com"
              className={classes.link}
            >
              Dashboard
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <DarkModeButton />
            <Button
              component={Link}
              to={"https://dashboard.codifyplus.com/login"}
              variant="default"
            >
              Log in
            </Button>
            <Button
              component={Link}
              to={"https://dashboard.codifyplus.com/register"}
            >
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="CodifyPlus"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link onClick={closeDrawer} to="/" className={classes.link}>
            Home
          </Link>
          <UnstyledButton
            className={classes.link}
            onClick={toggleLinks_services}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Shuru Kro
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened_services}>{links_shurukro}</Collapse>
          <UnstyledButton
            className={classes.link}
            onClick={toggleLinks_protectkro}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Protect Kro
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened_protectkro}>{links_protectkro}</Collapse>
          <UnstyledButton className={classes.link} onClick={toggleLinks_tools}>
            <Center inline>
              <Box component="span" mr={5}>
                Manage Kro
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened_tools}>{links_managekro}</Collapse>
          <UnstyledButton
            className={classes.link}
            onClick={toggleLinks_growkro}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Grow Kro
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened_growkro}>{links_growkro}</Collapse>
          <Link
            onClick={closeDrawer}
            to="schedule-meeting"
            className={classes.link}
          >
            Schedule a meeting
          </Link>
          <Link
            onClick={closeDrawer}
            to="https://dashboard.codifyplus.com"
            className={classes.link}
          >
            Dashboard
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" pb="xl" px="md">
            <DarkModeButton />
            <Button
              component={Link}
              to={"https://dashboard.codifyplus.com/login"}
              variant="default"
            >
              Log in
            </Button>
            <Button
              component={Link}
              to={"https://dashboard.codifyplus.com/register"}
            >
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

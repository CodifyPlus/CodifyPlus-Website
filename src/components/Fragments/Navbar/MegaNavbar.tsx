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
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconMoneybag,
  } from '@tabler/icons-react';
import Logo from './Logo';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import { Link } from 'react-router-dom';
  
  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(42),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: `calc(${theme.spacing.md} * -1)`,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
    subGroup: {
      [theme.fn.smallerThan('sm')]: {
        paddingLeft: "20px",
        paddingRight: "20px"
      },
    },
  }));
  
  const mockdata_services = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
      link: '',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
      link: '',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
      link: '',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
      link: '',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
      link: '',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
      link: '',
    },
  ];

  const mockdata_tools = [
    {
      icon: IconMoneybag,
      title: 'GST Calculator',
      description: 'Calculate your GST on the products can services',
      link: 'gst-calculator',
    },
  ];
  
  export function MegaNavbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened_services, { toggle: toggleLinks_services }] = useDisclosure(false);
    const [linksOpened_tools, { toggle: toggleLinks_tools }] = useDisclosure(false);
    const { classes, theme } = useStyles();
  
    const links_services = mockdata_services.map((item) => (
      <UnstyledButton onClick={closeDrawer} component={Link} to={item.link} className={classes.subLink} key={item.title}>
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

    const links_tools = mockdata_tools.map((item) => (
        <UnstyledButton onClick={closeDrawer} component={Link} to={item.link} className={classes.subLink} key={item.title}>
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
        <Header height={60} px="md" style={{position: "fixed", zIndex: 10, top: 0}}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Link to="/">
            <Logo/>
            </Link>
  
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <Link to="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                    </Center>
                  </Link>
                </HoverCard.Target>
  
                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text fw={500}>Services</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links_services}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text fw={500} fz="sm">
                          Connect on WhatsApp
                        </Text>
                        <Text size="xs" color="dimmed">
                          Directly chat with one of our executive and get quote easily
                        </Text>
                      </div>
                      <Button component={Link} to={"https://wa.me/917494909769?text=I want to opt for a service from CodifyPlus by StartupKro"} variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <Link to="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Tools
                      </Box>
                      <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                    </Center>
                  </Link>
                </HoverCard.Target>
  
                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                  <Group position="apart" px="md">
                    <Text fw={500}>Tools</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                  />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links_tools}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text fw={500} fz="sm">
                          Connect on WhatsApp
                        </Text>
                        <Text size="xs" color="dimmed">
                          Directly chat with one of our executive and get quote easily
                        </Text>
                      </div>
                      <Button component={Link} to={"https://wa.me/917494909769?text=I want to opt for a service from CodifyPlus by StartupKro"} variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link to="contact-us" className={classes.link}>
                Contact
              </Link>
              <Link to="https://dashboard.codifyplus.com" className={classes.link}>
                Dashboard
              </Link>
            </Group>
  
            <Group className={classes.hiddenMobile}>
                <DarkModeButton/>
              <Button component={Link} to={"https://dashboard.codifyplus.com/login"} variant="default">Log in</Button>
              <Button component={Link} to={"https://dashboard.codifyplus.com/register"}>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
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
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <UnstyledButton className={classes.link} onClick={toggleLinks_services}>
              <Center inline>
                <Box component="span" mr={5}>
                  Services
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened_services}>{links_services}</Collapse>
            <UnstyledButton className={classes.link} onClick={toggleLinks_tools}>
              <Center inline>
                <Box component="span" mr={5}>
                  Tools
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened_tools}>{links_tools}</Collapse>
            <Link to="contact-us" className={classes.link}>
              Contact
            </Link>
            <Link to="https://dashboard.codifyplus.com" className={classes.link}>
              Dashboard
            </Link>
  
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" pb="xl" px="md">
                <DarkModeButton/>
              <Button component={Link} to={"https://dashboard.codifyplus.com/login"} variant="default">Log in</Button>
              <Button component={Link} to={"https://dashboard.codifyplus.com/register"} >Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }
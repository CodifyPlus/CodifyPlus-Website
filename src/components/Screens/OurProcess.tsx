import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconGauge, IconUser, IconMessage2, IconLock, IconTools, IconDatabase } from '@tabler/icons-react';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'Unlock the power of extreme performance with our cutting-edge web development and legal solutions, delivering unrivaled speed and efficiency for your online presence.',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'At the intersection of privacy and excellence, our web development and legal solutions offer a steadfast commitment to protecting your online presence, prioritizing privacy in every aspect of our services.',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Step into a world where security is inherent. Our web development and legal solutions are designed with a secure-by-default approach, ensuring your digital assets are fortified against potential threats right from the start.',
  },
  {
    icon: IconMessage2,
    title: 'Quality Support',
    description:
      'Experience unparalleled quality support with our dedicated team, ready to assist you at every stage of your journey, ensuring seamless web development and legal solutions that meet your unique needs.',
  },
  {
    icon: IconTools,
    title: 'Seamless Integration',
    description:
      'Experience seamless integration across platforms with our comprehensive solutions, ensuring smooth compatibility and enhanced efficiency throughout your digital ecosystem.',
  },
  {
    icon: IconDatabase,
    title: 'Data-driven Insights',
    description:
      'Unlock the power of data with our advanced analytics solutions, providing actionable insights to drive informed decision-making and maximize your business potential.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export default function OurProcess({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
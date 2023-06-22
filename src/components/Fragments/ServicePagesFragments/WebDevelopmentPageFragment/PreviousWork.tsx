import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(200),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

function Card({ image, title, category, link }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button target={"_blank"} component={Link} to={link} variant="white" color="dark">
        Live Preview
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://websitedemos.net/homemade-beauty-products-02/wp-content/uploads/sites/830/2021/08/homemade-beauty-products-social-image.jpg',
    title: '',
    category: '',
    link: 'https://websitedemos.net/beauty-products-store-04',
  },
  {
    image:
      'https://updates.theme-fusion.com/wp-content/uploads/2021/08/preview_avada_digial_agency.jpg',
    title: '',
    category: '',
    link: 'https://avada.website/digital-agency/',
  },
  {
    image:
      'https://updates.theme-fusion.com/wp-content/uploads/2022/12/preview_corporation.jpg',
    title: '',
    category: '',
    link: 'https://avada.website/corporation/',
  },
  {
    image:
      'https://updates.theme-fusion.com/wp-content/uploads/2023/02/retro.jpg',
    title: '',
    category: '',
    link: 'https://avada.website/retro/',
  },
  {
    image:
      'https://updates.theme-fusion.com/wp-content/uploads/2023/04/magazine.jpg',
    title: '',
    category: '',
    link: 'https://avada.website/magazine/',
  },
  {
    image:
      'https://updates.theme-fusion.com/wp-content/uploads/2016/08/forum_thumbnail.jpg',
    title: '',
    category: '',
    link: 'https://avada.website/forum/',
  },
];

export function PreviousWork() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="25%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      mr={20}
      ml={20}
      mt={40}
    >
      {slides}
    </Carousel>
  );
}
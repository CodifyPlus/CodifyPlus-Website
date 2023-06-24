import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  useMantineTheme,
  rem,
  Container,
  Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(150),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
    >
        <Image src={image} />
    </Paper>
  );
}

const data = [
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/Syangbo-Logo-e1683621280831.jpg",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/Mayaakatha-Logo-e1683621247459.jpg?fit=150%2C150&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/02/Get_Yo_Space_Logo-removebg-preview-e1683621851263.png?fit=150%2C87&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/02/Devas-Unlimited-e1683621879547.jpg?fit=150%2C150&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/Konika-Minolta-Logo-e1683621298274.png?fit=150%2C87&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/TOK_Logo-e1683621235342.jpg?fit=150%2C99&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/VTI-Logo-e1683621270741.jpg?fit=150%2C96&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/Fallow-Dezience-Tree-e1683621258225.png?fit=150%2C150&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/03/Sweta-Jewellery-e1683621289419.png?fit=150%2C150&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/05/d3b6e8_39cb2f4ff4e44d5cabc47fc459e4c4d8mv2-e1683621693666.jpg?fit=100%2C100&ssl=1",
  },
  {
    image:
      "https://i0.wp.com/startupkro.com/wp-content/uploads/2023/05/Fem-First-Sneha-e1683621701337.jpg?fit=150%2C147&ssl=1",
  },
];

export function OurPartners() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="lg" mt={40} mb={40}>
      <Carousel
        loop
        slideSize="20%"
        breakpoints={[{ maxWidth: "sm", slideSize: "50%", slideGap: rem(10) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 1}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

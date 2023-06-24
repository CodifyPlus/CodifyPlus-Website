import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  useMantineTheme,
  rem,
  Container,
  Avatar,
  Card,
} from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function CardF({ image, title, category }: CardProps) {
  return (
    <Card p={0}>
      <Paper withBorder shadow="md" p="xl" radius="md">
        <div>
          <Avatar ta="center" src={image} size={60} radius={120} mx="auto" />
          <Text ta="center" fz="lg" weight={500} mt="md">
            {title}
          </Text>
          <Text ta="justify" c="dimmed" fz="sm">
            {category}
          </Text>
        </div>
      </Paper>
    </Card>
  );
}

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Vaidhya",
    category:
      "“Being an Entrepreneur I need someone who can guide me from scratch for initiating my Food Start-Up, commencing from registration to build my online presence.”",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Ashima Ahuja",
    category:
      "They not only helps me choosing right business strategy but there also completes the process registering my MSME & Start-Up.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Nivedita Singh",
    category:
      "They not only helps me choose the right business strategy but also completes registering my MSME & Start-Up and builds an E-Commerce Web page for my business. ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Snigdha Binaykia",
    category:
      "I got my trademark without any hassles and on time. Professional and top-quality service. Excellent communication and updating the filing status on a daily basis.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Lokinder Singh",
    category:
      "“Ishani, the founder herself developed DBA Rohtak Website & she is handling all other social media of DBA with such ease. We tried many digital service providers but no one is reliable.”",
  },
];

export function Testimonials() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardF {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="lg" mt={40}>
      <Carousel
        withControls={false}
        loop
        slideSize="25%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 1}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

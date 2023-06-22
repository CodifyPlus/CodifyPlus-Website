import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";
import image from "./image.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

export function FAQsWebDevelopment() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg" mt={40}>
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  What is the development of web pages?
                </Accordion.Control>
                <Accordion.Panel>
                  {
                    "Web development is the process of creating and maintaining websites; it's the work done in the background to make a website look great, function quickly, and provide a positive user experience."
                  }
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  When it comes to the process, how much input do I have?
                </Accordion.Control>
                <Accordion.Panel>
                  {
                    "Our team of experts will keep you updated on all the functions. Each and every stage of the web designing will be updated to you."
                  }
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Can my website be viewed on mobile devices?
                </Accordion.Control>
                <Accordion.Panel>
                  {
                    "Yes, You can view your website exactly as a mobile user would see it with Chrome's toggling device function."
                  }
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  How much time does a website take to build?
                </Accordion.Control>
                <Accordion.Panel>
                  {
                    "It could take between five and six months to plan and launch a professionally designed website. With us we can get it perfectly crafted in much less time."
                  }
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>
                  If I need assistance with my site in the future, what should I
                  do?
                </Accordion.Control>
                <Accordion.Panel>
                  {
                    "Reach out to us, yes based on the package you choose we will provide backup support upto 1 year."
                  }
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>
                  My question in not listed here.
                </Accordion.Control>
                <Accordion.Panel>
                  {
                    "Don't worry. Feel free to contact us, and we would answer all of your questions."
                  }
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}

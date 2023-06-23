import {
  createStyles,
  Group,
  Paper,
  Text,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconNotebook, IconPhoneCall, IconDiamond } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const data = [
  {
    title: "Fill Up Form",
    value: "Fill Up Form",
    desc: "Simply fill the form & opt for probable service you are thinking to have to get started.",
  },
  {
    title: "Call to Discuss",
    value: "Call to Discuss",
    desc: "Our expert will connect with you & prepare documents, after you choose any service."
  },
  {
    title: "Enjoy the process",
    value: "Enjoy the process",
    desc: "Track your services at the dashboard"
  },
];

export function HowItWorks() {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    let DiffIcon;
    if(stat.value === "Fill Up Form"){
        DiffIcon = IconNotebook;
    }
    else if(stat.value === "Call to Discuss"){
        DiffIcon = IconPhoneCall;
    }
    else{
        DiffIcon = IconDiamond;
    }

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart" mb={20}>
          <div>
            <Text
              c="dimmed"
              tt="uppercase"
              fw={700}
              fz="xs"
              className={classes.label}
            >
              {stat.title}
            </Text>
            <Text fw={700} fz="xl">
              {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            sx={(theme) => ({
              color: theme.colors.yellow[6],
            })}
            size={38}
            radius="md"
          >
            <DiffIcon size="1.8rem" stroke={1.5} />
          </ThemeIcon>
        </Group>
          <Text component="span" color="dimmed" fw={700}>
          {stat.desc}
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}

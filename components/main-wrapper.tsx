import { 
  Grid, 
  SimpleGrid, 
  Mark, 
  Button
} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useEffect } from 'react'


const useStyles = createStyles((theme) => ({
    h1: {
        fontSize: 54,
        fontWeight: 700,
        lineHeight: 'initial',
        height: 'fit-content',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 40,
        },
    },
    p: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 'initial',
        height: 'fit-content',
        //marginTop: '-160px',
        color: '#626a7a'
    },
    button: {
      //marginTop: '-160px'
    },

    flex: {
      alignContent: 'flex-start',
    }

}));

export function MainWrapper() {
  const { classes } = useStyles();
  const anim = [
    <><Mark color="indigo">MINECRAFT</Mark></>,
    <><Mark color="indigo"></Mark>MINECRAFT</>,
    <><Mark color="indigo">M</Mark>INECRAFT</>,
    <><Mark color="indigo">MI</Mark>NECRAFT</>,
    <><Mark color="indigo">MIN</Mark>ECRAFT</>,
    <><Mark color="indigo">MINE</Mark>CRAFT</>,
    <><Mark color="indigo">MINEC</Mark>RAFT</>,
    <><Mark color="indigo">MINECR</Mark>AFT</>,
    <><Mark color="indigo">MINECRA</Mark>FT</>,
    <><Mark color="indigo">MINECRAF</Mark>T</>,
  ]
  let text = anim[0];

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      i++;
      if (i >= anim.length) i = 0;
      text = anim[i];
    }, 500);
  }, []);

  return (
    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <Grid p={30} className={classes.flex}>
        <h1 className={classes.h1}>
          Добро пожаловать<br />
          на Тёмный рынок <br />
          Майнкрафта!
        </h1>
        <p className={classes.p}>
          На нашей торговой площадке,<br />
          вы сможете приобрести запрещенные товары<br />
          в игре {text}, или начать продать свои товары.
        </p>
        <Button color="blue" variant="outline" size="lg" className={classes.button} mt={20} onClick={() => {window.location.href = 'https://t.me/store_matrix_bot'}}>
          Перейти в магазин
        </Button>
      </Grid>
      <Grid>
        <img src="/main.png" width="100%" />
      </Grid>
    </SimpleGrid>
  );
}
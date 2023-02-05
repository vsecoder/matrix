import { createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inline: {
    display: 'inline-block',
    cursor: 'pointer',
    fontSize: '1.7rem',
    fontWeight: 'bolder',

    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.4rem',
    },
  },
  image: {
    width: '64px',
    display: 'inline-block',
    margin: '5px',
    marginTop: '-5px'
  },
  link: {
    color: 'white',
    cursor: 'pointer'
  },
}));


export function MatrixLogo() {
  const { classes } = useStyles();

  return (
    <Link href='/' className={classes.link}>
      <div className={classes.inline}>
        <img src="/logo.png" className={classes.image} />
        <h2 className={classes.inline}>Matrix</h2>
      </div>
    </Link>
  );
}
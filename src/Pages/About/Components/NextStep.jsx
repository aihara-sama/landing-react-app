import { Grid, Link, makeStyles } from '@material-ui/core'

import darkClothes from '../../../assets/images/dark-clothes.jpg'

import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  h5: {
    letterSpacing: '2px',
    color: '#E3BC69',
    fontSize: theme.typography.pxToRem(16),
    fontFamily: 'Karla',
    marginBottom: '.8rem',
    textAlign: 'left',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
    },
  },
  innerImg: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  h2: {
    marginTop: '0',
    letterSpacing: '2px',
    fontSize: theme.typography.pxToRem(20),
    fontFamily: 'JosefinSans',
    color: 'white',
    marginBottom: '2rem',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  link: {
    fontSize: theme.typography.pxToRem(13),
    fontFamily: 'Karla',
    background: 'white',
    display: 'inline-block',
    color: 'black',
    padding: '1.5rem 4rem',
    border: 'none',
    letterSpacing: '2px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    transition: theme.transitions.duration.standard + 'ms',

    '&:hover': {
      transform: 'translateY(-10px)',
      background: '#E3BC69',
    },
  },
  p: {
    fontSize: theme.typography.pxToRem(14),
    fontFamily: 'Roboto',
    color: 'white',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
      fontSize: theme.typography.pxToRem(16),
    },
  },
  img: {
    width: '100%',
    background: `url(${darkClothes})`,
    height: '400px',
    backgroundPosition: '41%',
    padding: '3rem 2rem',
  },
}))

const NextStep = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <div className={classes.img}>
        <Grid className={classes.innerImg} alignItems="center" container>
          <Grid item xs={12} md={6}>
            <h5 className={classes.h5}>YA ESTÁS AQUÍ</h5>
            <h2 className={classes.h2}>DA EL SIGUIENTE PASO</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              underline="none"
              to="/register"
              className={classes.link}
              component={RouterLink}
            >
              REGISTRO
            </Link>
            <p className={classes.p}>Acceso exclusivo a mayores de 18 años.</p>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default NextStep

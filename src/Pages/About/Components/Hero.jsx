import { Grid, makeStyles } from '@material-ui/core'

import peopleDrinkingWine from '../../../assets/images/a-man-and-woman-holding-wineglasses.png'

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    margin: '2rem 1rem',

    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  h5: {
    fontSize: theme.typography.pxToRem(14),
    fontFamily: 'Rubik',
    color: '#4F4F4F',
    textAlign: 'left',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  h2: {
    fontSize: theme.typography.pxToRem(24),
    fontFamily: 'JosefinSans',
    letterSpacing: '2px',
  },
  span: {
    color: '#D4A339',
  },
  img: {
    width: '100%',
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Grid spacing={4} alignItems="center" container>
        <Grid item xs={12} md={8}>
          <h5 className={classes.h5}>ACERCA DE</h5>
          <h2 className={classes.h2}>
            LA HERRAMIENTA PARA LOGRAR UNA{' '}
            <span className={classes.span}>CONEXIÓN DIRECTA</span>
          </h2>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={peopleDrinkingWine} className={classes.img} />
        </Grid>
      </Grid>
    </section>
  )
}

export default Hero

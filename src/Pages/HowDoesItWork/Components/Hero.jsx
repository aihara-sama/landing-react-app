import { Grid, makeStyles, Typography } from '@material-ui/core'
import heroImg from '../../../assets/images/a-woman-and-a-man-outside.png'

const useStyles = makeStyles((theme) => ({
  section: {
    margin: '2rem 1rem',
    textAlign: 'center',
  },
  header: {
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(22),
    margin: '1.5rem 0',
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(39),
    },
  },
  p: {
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(16),
    lineHeight: '1.6',
    marginTop: 0,

    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  img: {
    width: '100%',
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Grid justify="center" spacing={4} alignItems="center" container>
        <Grid xs={12} sm={6} lg={4} item>
          <img src={heroImg} className={classes.img} />
        </Grid>
        <Grid xs={12} sm={6} lg={4} item>
          <Typography variant="h2" className={classes.header}>
            CONEXIONES DIRECTAS
          </Typography>
          <p className={classes.p}>
            Relaciones reales con las expectativas claras desde un principio,
            donde <b>Sugar</b> y <b>Baby</b> buscan crecer y mejorar sus estilos
            de vida.
          </p>
        </Grid>
      </Grid>
    </section>
  )
}

export default Hero

// Mui Helpers
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Link, Typography } from '@material-ui/core'

// Images
import betterLifeStyleImg from '../../../assets/images/a-man-in-a-jacket-and-a-woman-in-a-dress.png'

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    margin: theme.spacing(1),
    marginBottom: '3rem',
  },
  img: {
    width: '100%',
  },
  header: {
    fontFamily: 'JosefinSans',
    letterSpacing: '2px',
    fontSize: theme.typography.pxToRem(18),
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.pxToRem(41),
      textAlign: 'left',
      marginTop: '20%',
    },
  },
  p: {
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(16),
    marginTop: '.3rem',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  linkWrapper: {
    marginBottom: '1rem',
    background: 'black',

    // Media
    [theme.breakpoints.up('sm')]: {
      width: '200px',
    },
  },
  link: {
    color: 'white',
    display: 'block',
    width: '100%',
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    paddingTop: '1rem',
    paddingBottom: '1rem',

    '&:hover': {
      background: theme.palette.yellow.light,
      color: 'black',
    },
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Grid container>
        <Grid xs={12} sm={6} item>
          <img
            className={classes.img}
            src={betterLifeStyleImg}
            alt="a man in a jacket and a woman in a dress"
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <h2 className={classes.header}>UN MEJOR ESTILO DE VIDA</h2>
          <Typography className={classes.p}>
            Busca tu <b>Sugar</b> <del>Daddy</del> o <del>Sugar</del>{' '}
            <b>Baby</b>
          </Typography>
          <Typography className={classes.p}>
            Encuentra tu conexión y beneficio ideal.
          </Typography>
          <Box mt={3}>
            <Box
              display="flex"
              alignItems="center"
              className={classes.linkWrapper}
            >
              <Link underline="none" className={classes.link} href="#">
                Entrar
              </Link>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              className={classes.linkWrapper}
            >
              <Link underline="none" className={classes.link} href="#">
                Registro
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}

export default Hero

import { Grid, makeStyles } from '@material-ui/core'

// Icons
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'


const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: '3rem',
    padding: '0 1rem',
    textAlign: 'center',
  },
  h5: {
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(15),
    marginBottom: 0,
  },
  h2: {
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(26),
    marginTop: '.5rem',
    marginBottom: '2rem',
  },
  card: {
    padding: '2rem 2rem',
    borderRadius: '5px',
    background: 'white',
    height: '100%',
    marginBottom: '1rem',
    transition: theme.transitions.duration.complex + 'ms',

    '&:hover': {
      background: '#fef1ec',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  cardIcon: {
    fontSize: '3rem',
    color: '#48465b',
  },
  cardHeader: {
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(22),
    marginTop: 0,
    marginBottom: 0,
  },
  cardP: {
    marginTop: '.5rem',
    fontSize: theme.typography.pxToRem(16),
    fontFamily: 'Barlow',
    color: '#050404CF',
  },
}))

const HowDoesItWork = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <h5 className={classes.h5}>NUESTRO PORTAL</h5>
      <h2 className={classes.h2}>CÓMO FUNCIONA</h2>

      <Grid justify="center" spacing={4} container>
        <Grid xs={12} md={4} lg={3} item>
          <Grid alignContent="flex-start" container className={classes.card}>
            <Grid xs={12} item>
              <LaptopChromebookOutlinedIcon className={classes.cardIcon} />
            </Grid>
            <Grid xs={12} item>
              <p className={classes.cardHeader}>1. Crea tu cuenta</p>
              <p className={classes.cardP}>
                Regístrate, rellena la información básica y crea tu cuenta.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <Grid alignContent="flex-start" container className={classes.card}>
            <Grid xs={12} item>
              <CheckCircleOutlineIcon className={classes.cardIcon} />
            </Grid>
            <Grid xs={12} item>
              <p className={classes.cardHeader}>2. Confirma tu correo</p>
              <p className={classes.cardP}>
                Recibirás un correo para activar tu cuenta. Si no recibes tu
                correo, reportalo a soporte@sugarya.com
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <Grid alignContent="flex-start" container className={classes.card}>
            <Grid xs={12} item>
              <LockOpenIcon className={classes.cardIcon} />
            </Grid>
            <Grid xs={12} item>
              <p className={classes.cardHeader}>3. Accede</p>
              <p className={classes.cardP}>
                Sigue las instrucciones para completar tu perfil.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default HowDoesItWork

import { Grid, makeStyles } from '@material-ui/core'

// Icons
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone'
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone'

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    marginTop: '3rem',
    padding: '1rem',
  },
  h5: {
    marginTop: 0,
    fontSize: theme.typography.pxToRem(15),
    fontFamily: 'DidactGothic',
    letterSpacing: '2px',
  },
  h2: {
    fontSize: theme.typography.pxToRem(26),
    fontFamily: 'JosefinSans',
    marginBottom: '3rem',
  },
  card: {
    // marginTop: '3rem',
    // marginBottom: '1rem',
    transition: theme.transitions.duration.complex + 'ms',
    padding: '1rem',
    borderRadius: '5px',

    '&:hover': {
      background: '#fef1ec',
    },
    // [theme.breakpoints.up('md')]: {
    //   textAlign: 'left',
    // },
  },
  cardIcon: {
    fontSize: '5rem',
    fontSize: '3rem',
  },
  cardHeader: {
    fontSize: theme.typography.pxToRem(22),
    fontFamily: 'DidactGothic',
    color: '#515151',
    marginBottom: '.5rem',
  },
  cardP: {
    marginTop: 0,
    fontSize: theme.typography.pxToRem(16),
  },
}))

const PremiumAccount = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <h5 className={classes.h5}>CON TU CUENTA ACTIVADA Y YA</h5>
      <h2 className={classes.h2}>EN LA PLATAFORMA</h2>
      <Grid justify="center" spacing={4} container>
        <Grid item xs={12} sm={4} lg={3}>
          <Grid container className={classes.card}>
            <Grid item xs={12}>
              <EditOutlinedIcon className={classes.cardIcon} />
            </Grid>
            <Grid item xs={12}>
              <p className={classes.cardHeader}>Descripción</p>
              <p className={classes.cardP}>
                Completa tu información y sube fotos públicas o privadas.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Grid container className={classes.card}>
            <Grid item xs={12}>
              <SearchTwoToneIcon className={classes.cardIcon} />
            </Grid>
            <Grid item xs={12}>
              <p className={classes.cardHeader}>Búsqueda</p>
              <p className={classes.cardP}>
                Usa el buscador de miembros o filtra según tus intereses.
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4} lg={3}>
          <Grid container className={classes.card}>
            <Grid item xs={12}>
              <FavoriteBorderTwoToneIcon className={classes.cardIcon} />
            </Grid>
            <Grid item xs={12}>
              <p className={classes.cardHeader}>Conecta</p>
              <p className={classes.cardP}>
                Añade a favoritos, agrega conexiones o envía un mensaje privado.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default PremiumAccount

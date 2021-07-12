import { Divider, Grid, makeStyles } from '@material-ui/core'

// Images
import lockWithATie from '../../../assets/images/a-lock-with-a-tie.png'
import check from '../../../assets/images/a-check-inside-a-black-circle.png'
import personWithACross from '../../../assets/images/a-person-and-a-cross.png'
import hearts from '../../../assets/images/hearts.png'
import weightScales from '../../../assets/images/weight-scales.png'
import bigsity from '../../../assets/images/bigsity.png'

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    padding: '1rem',
  },
  h2: {
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(26),
    letterSpacing: '2px',
  },
  h5: {
    fontFamily: 'Karla',
    fontSize: theme.typography.pxToRem(15),
    color: '#959A9E',
  },
  divider1: {
    background: '#6c729368',
    height: '2px',
    margin: '0 auto',
    maxWidth: '50rem',
  },
  divider2: {
    background: '#6c729368',
    height: '2px',
    width: '95%',
    margin: '0 auto',
    maxWidth: '20rem',
  },
  card: { marginBottom: '2rem', background: 'white', padding: '1rem 0' },
  cardImg: {
    width: '30%',
  },
  cardHeader: {
    marginTop: '.5rem',
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(24),
    color: '#252930',
    marginBottom: '0',
  },
  cardP: {
    marginTop: '.3rem',
    fontFamily: 'Karla',
    fontSize: theme.typography.pxToRem(13),
    color: '#727982',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
}))

const RelationshipsThatWork = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Divider className={classes.divider1} />
      <h2 className={classes.h2}>RELACIONES QUE FUNCIONAN</h2>
      <Divider className={classes.divider2} />
      <h5 className={classes.h5}>SUGARYA ES EL ESPACIO QUE NECESITAS</h5>

      <Grid spacing={4} justify="center" container>
        <Grid item xs={12} sm={4}>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <img src={lockWithATie} className={classes.cardImg} />
            </Grid>
            <Grid item xs={12}>
              <h5 className={classes.cardHeader}>Directo y discreto</h5>
              <h6 className={classes.cardP}>COMPARTE CON QUIEN DESEAS</h6>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <img src={check} className={classes.cardImg} />
            </Grid>
            <Grid item xs={12}>
              <h5 className={classes.cardHeader}>Miembros reales</h5>
              <h6 className={classes.cardP}>SISTEMA DE VERIFICACIÓN</h6>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <img src={personWithACross} className={classes.cardImg} />
            </Grid>
            <Grid item xs={12}>
              <h5 className={classes.cardHeader}>Reporte y bloqueo</h5>
              <h6 className={classes.cardP}>ELIMINA CON UN CLICK</h6>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <img src={hearts} className={classes.cardImg} />
            </Grid>
            <Grid item xs={12}>
              <h5 className={classes.cardHeader}>Conecta y acuerda</h5>
              <h6 className={classes.cardP}>SEXPECTATIVAS CLARAS</h6>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <img src={weightScales} className={classes.cardImg} />
            </Grid>
            <Grid item xs={12}>
              <h5 className={classes.cardHeader}>Beneficio mutuo</h5>
              <h6 className={classes.cardP}>DONDE TODOS GANAN</h6>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <img src={bigsity} className={classes.cardImg} />
            </Grid>
            <Grid item xs={12}>
              <h5 className={classes.cardHeader}>La vida soñada</h5>
              <h6 className={classes.cardP}>LO MEJOR ESTA POR LLEGAR</h6>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default RelationshipsThatWork

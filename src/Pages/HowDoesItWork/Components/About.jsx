import { Divider, Grid, makeStyles, Link } from '@material-ui/core'

import { Link as RouterLink } from 'react-router-dom'

// Images
import personClimbingStairs from '../../../assets/images/businessman-claimbing-a-staircase.png'
import walkingWoman from '../../../assets/images/a-woman-in-a-park.png'
import womanInPurpleDress from '../../../assets/images/a-woman-in-a-purple-dress.jpg'

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
  },
  firstGridItem: {
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },
  secondGridItem: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  cardsWrapper: {
    background: 'black',
    color: 'white',
    padding: '2rem 1rem',
    marginTop: 0,
    marginBottom: 0,
    // margin: '0 auto',
    // maxWidth: '40rem',
  },
  card: {},
  h2: {
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(22),
    marginTop: '.5rem',
  },
  h5: {
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(18),
    margin: '.5rem 1rem',
  },
  h6: {
    margin: '1rem 0',
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  p: {
    fontFamily: 'Barlow',
    fontSize: theme.typography.pxToRem(16),
  },
  img: {
    width: '100%',
  },
  sectionDivider: {
    margin: '0 1rem',
    backgroundColor: '#6c729396',
    height: '2px',
  },
  cardDivider: {
    backgroundColor: theme.palette.yellow.dark,
    height: '2px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.yellow.dark,
    },
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Divider className={classes.sectionDivider} />
      <h5 className={classes.h5}>UNA NUEVA DINÁMICA</h5>

      <Grid
        className={classes.cardsWrapper}
        justify="center"
        alignItems="center"
        container
        spacing={4}
      >
        <Grid xs={12} sm={6} lg={4} item>
          <img src={personClimbingStairs} className={classes.img} />
          <Link
            underline="none"
            to="/register"
            className={classes.link}
            component={RouterLink}
          >
            <h6 className={classes.h6}>
              COMO BABY SOLO NECESITAS UNA CUENTA GRATUITA
            </h6>
          </Link>
          <Divider className={classes.cardDivider} />
        </Grid>
        <Grid xs={12} sm={6} lg={4} item>
          <h2 className={classes.h2}>
            ¿QUE ES UN <b>SUGAR</b> <del>DADDY</del>?
          </h2>
          <p className={classes.p}>
            Un <b>Sugar</b> es una persona solvente y generosa, que aprecia el
            buen vivir y disfruta de un alto estándar de vida. Es alguien que
            valora los acuerdos y llegó en busca de la mejor compañía.
          </p>
          <p className={classes.p}>
            Un verdadero <b>Sugar</b> utiliza su encanto, experiencia y recursos
            para apoyar y consentir los deseos de su <b>Baby</b>.
          </p>
        </Grid>
      </Grid>

      <Grid
        className={classes.cardsWrapper}
        justify="center"
        alignItems="center"
        container
        spacing={4}
      >
        <Grid className={classes.firstGridItem} xs={12} sm={6} lg={4} item>
          <h2 className={classes.h2}>
            ¿QUE SIGNIFICA SER UNA <del>SUGAR</del> <b>BABY</b>?
          </h2>
          <p className={classes.p}>
            Una <b>Baby</b> es atractiva, interesante y de mente abierta. Tiene
            el poder para establecer limites y esta aquí para mejorar su estilo
            de vida.
          </p>
          <p className={classes.p}>
            Una verdadera <b>Baby</b> busca algo más allá de lo tradicional y
            llega a acuerdos con un <del>Sugar</del> que realmente pueda
            enriquecer su vida a través de beneficios mutuos.
          </p>
        </Grid>
        <Grid className={classes.secondGridItem} xs={12} sm={6} lg={4} item>
          <img src={walkingWoman} className={classes.img} />
          <Link
            underline="none"
            to="/register"
            className={classes.link}
            component={RouterLink}
          >
            <h6 className={classes.h6}>
              COMO BABY SOLO NECESITAS UNA CUENTA GRATUITA
            </h6>
          </Link>
          <Divider className={classes.cardDivider} />
        </Grid>
      </Grid>
    </section>
  )
}

export default About

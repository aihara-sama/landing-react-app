import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core'

// Images

import champagneImg from '../../../assets/images/champagne.jpg'
import peopleCarryingHeartsImg from '../../../assets/images/people-carrying-hearts.jpg'
import twoPeopleOnWeightScalesImg from '../../../assets/images/a-man-and-a-woman-on-weight-scales.jpg'

const useStyles = makeStyles((theme) => ({
  section: {
    margin: `3rem ${theme.spacing(1)}px`,
  },
  h5: {
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    // 15
    fontFamily: 'DidactGothic',
    fontSize: theme.typography.pxToRem(15),
    letterSpacing: '2px',
  },
  h2: {
    marginBottom: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    // 26
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(26),
  },
  card: {
    // padding: '0 2rem',
    paddingBottom: '1rem',
    marginBottom: '2rem',
    transition: `${theme.transitions.duration.shorter}ms box-shadow`,
    boxShadow: '0 0 10px 0 rgb(0 0 0 / 15%)',

    '&:hover': {
      boxShadow: '0 0 30px 0 rgb(0 0 0 / 23%)',
    },
  },
  middleCard: {
    [theme.breakpoints.up('sm')]: {
      margin: '0 1rem',
    },
  },
  cardImg: {
    width: '100%',
    paddingTop: '60%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: `${theme.transitions.duration.shorter}ms opacity`,

    '&:hover': {
      opacity: '.85',
    },
  },
  cardWrapper: {
    // gap: '5',
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    },
  },
  cardImg1: {
    backgroundImage: `url(${champagneImg})`,
  },
  cardImg2: {
    backgroundImage: `url(${peopleCarryingHeartsImg})`,
  },
  cardImg3: {
    backgroundImage: `url(${twoPeopleOnWeightScalesImg})`,
  },
  cardHeader: {
    marginTop: '2rem',
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(21),
    color: '#54595F',
    fontWeight: 'bold',

    transition: `${theme.transitions.duration.shorter}ms color`,
    '&:hover': {
      color: theme.palette.yellow.light,
    },
  },
  cardParagraph: {
    margin: '1rem 0',
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(14),
    color: '#777',
  },
  cardLink: {
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(12),
    color: '#878A87',
  },
  cardChip: {
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(12),
  },
}))

const Blog = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Typography variant="h5" className={classes.h5}>
        BLOG
      </Typography>
      <Typography variant="h2" className={classes.h2}>
        VIDA SUGAR
      </Typography>

      <Grid container spacing={2} className={classes.cardWrapper}>
        <Grid md={4} xs={12} sm={6} item>
          <Grid container className={classes.card}>
            <Grid xs={12} item>
              <Link href="#">
                <Box className={`${classes.cardImg} ${classes.cardImg1}`}></Box>
              </Link>
            </Grid>
            <Grid xs={12} item>
              <Box mx={3}>
                <Link href="#" underline="none">
                  <Typography variant="h2" className={classes.cardHeader}>
                    Participa y gana una SugarBox
                  </Typography>
                </Link>
                <Typography className={classes.cardParagraph}>
                  ¡Hey Baby! Todos los días deberían ser tuyos
                </Typography>
                <Box>
                  <Link underline="none" href="#" className={classes.cardLink}>
                    SEGUIR LEYENDO »
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid md={4} xs={12} sm={6} item>
          <Grid container className={`${classes.card}`}>
            <Grid xs={12} item>
              <Link href="#">
                <Box className={`${classes.cardImg} ${classes.cardImg2}`}></Box>
              </Link>
            </Grid>
            <Grid xs={12} item>
              <Box mx={3}>
                <Link href="#" underline="none">
                  <Typography variant="h2" className={classes.cardHeader}>
                    Participa y gana una SugarBox
                  </Typography>
                </Link>
                <Typography className={classes.cardParagraph}>
                  ¡Hey Baby! Todos los días deberían ser tuyos
                </Typography>
                <Box>
                  <Link underline="none" href="#" className={classes.cardLink}>
                    SEGUIR LEYENDO »
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid md={4} xs={12} sm={6} item>
          <Grid container className={classes.card}>
            <Grid xs={12} item>
              <Link href="#">
                <Box className={`${classes.cardImg} ${classes.cardImg3}`}></Box>
              </Link>
            </Grid>
            <Grid xs={12} item>
              <Box mx={3}>
                <Link href="#" underline="none">
                  <Typography variant="h2" className={classes.cardHeader}>
                    Participa y gana una SugarBox
                  </Typography>
                </Link>
                <Typography className={classes.cardParagraph}>
                  ¡Hey Baby! Todos los días deberían ser tuyos
                </Typography>
                <Box>
                  <Link underline="none" href="#" className={classes.cardLink}>
                    SEGUIR LEYENDO »
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Blog

import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core'

// Images
import shoesAndBankCardsImg from '../../../assets/images/shoes-and-bank-cards.jpg'
import twoMenImg from '../../../assets/images/two-men.jpg'

const useStyles = makeStyles((theme) => ({
  section: {
    textAlign: 'center',
    background: 'black',
    padding: '5rem 0',
  },
  innerCard: {
    [theme.breakpoints.up('sm')]: {
      marginBottom: 0,
    },
  },
  img: {
    borderRadius: '3px',
    width: '60%',
    transition: `${theme.transitions.duration.standard}ms opacity`,
    '&:hover': {
      opacity: '.75',
    },
  },
  header: {
    // 21
    marginTop: '1rem',
    display: 'inline-block',
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(21),
    letterSpacing: '2px',
    color: 'white',
    textAlign: 'center',
  },
}))

const LearnMore = ({ mqMd }) => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Grid container>
        <Grid xs={12} sm={6} item className={classes.card}>
          <Box mb={4} className={classes.innerCard}>
            <Box>
              <Link href="#">
                <img src={shoesAndBankCardsImg} className={classes.img} />
              </Link>
            </Box>
            <Box>
              <Link underline="none" href="#">
                <Typography variant="h2" className={classes.header}>
                  CÓMO FUNCIONA
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} sm={6} item className={classes.card}>
          <Box>
            <Link href="#">
              <img src={twoMenImg} className={classes.img} />
            </Link>
          </Box>
          <Box>
            <Link underline="none" href="#">
              <Typography variant="h2" className={classes.header}>
                ACERCA DE
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}
export default LearnMore

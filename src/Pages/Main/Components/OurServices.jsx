import { Grid, Link, makeStyles, Typography } from '@material-ui/core'

// Images
import privacyImg from '../../../assets/images/lock-and-face.png'
import jacketImg from '../../../assets/images/jacket.png'
import watchImg from '../../../assets/images/watch.png'
import giftImg from '../../../assets/images/gift-box-and-currency.png'
import necklaceImg from '../../../assets/images/necklace.png'
import crownImg from '../../../assets/images/crown.png'

const sectionContent = [
  {
    sectionHeader: 'LA EXPERIENCIA SUGAR',
    cards: [
      {
        cardImg: privacyImg,
        cardHeader: 'Privacidad a tu medida',
        cardParagraph: 'Define el marco de discreción',
        isMiddleCard: false,
      },
      {
        cardImg: jacketImg,
        cardHeader: 'Citas ideales',
        cardParagraph: 'Acuerda directamente y encuentra lo que buscas.',
        cardLink: 'CUENTA PREMIUM',
        isMiddleCard: true,
      },
      {
        cardImg: watchImg,
        cardHeader: 'Momentos preciados',
        cardParagraph: 'Concreta ocasiones inolvidables',
        isMiddleCard: false,
      },
    ],
  },
  {
    sectionHeader: 'LA VIDA COMO BABY',
    cards: [
      {
        cardImg: giftImg,
        cardHeader: 'Tus deseos al alcance',
        cardParagraph: 'Citas, viajes, regalos y/o mensualidades',
        isMiddleCard: false,
      },
      {
        cardImg: necklaceImg,
        cardHeader: 'Iniciativa y poder',
        cardParagraph: 'Define reglas y beneficios',
        cardLink: 'REGISTRO GRATIS',
        isMiddleCard: true,
      },
      {
        cardImg: crownImg,
        cardHeader: 'Acuerdos claros',
        cardParagraph: 'Experiencias valiosas fuera de lo tradicional',
        isMiddleCard: false,
      },
    ],
  },
]

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0 2rem',
    paddingTop: '2rem',
    textAlign: 'center',
    paddingBottom: '2rem',
  },
  sectionHeader: {
    // 26,
    fontWeight: 'normal',
    letterSpacing: '2px',
    marginBottom: '2rem',
    fontFamily: 'JosefinSans',
    fontSize: theme.typography.pxToRem(26),
  },

  card: {
    color: 'black',
    padding: '0 1rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    background: 'white',
  },
  shadow: {
    boxShadow: '20px 20px 34px 0px rgb(0 0 0 / 21%)',
  },
  whiteBorder: {
    border: '1px solid white',
  },
  yellowBorder: {
    border: '1px solid #E3BC69',
  },
  middleCard: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '2rem',
      marginRight: '2rem',
    },
  },
  cardHeader: {
    // 22,
    fontFamily: 'DiadactGothic',
    fontSize: theme.typography.pxToRem(22),
  },
  p: {
    // 16,
    fontSize: theme.typography.pxToRem(16),
    fontFamily: 'Barlow',
    marginTop: '.3rem',
  },
  img: {
    width: '70%',
  },
  link: {
    textUnderlineOffset: '7px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'black',
    marginTop: '1rem',
    display: 'block',

    '&:hover': {
      color: theme.palette.yellow.light,
    },
  },
  animatedBackground: {
    transition: theme.transitions.duration.standard + 'ms background',
    background: 'black',

    '&:hover': {
      background: 'white',
    },
  },
  ourServicesWrapper: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  },
  darkTheme: {
    background: 'black',
    color: 'white',
  },
  lightTheme: {
    background: 'white',
    color: 'black',
  },
}))

const OurServices = () => {
  const classes = useStyles()

  return sectionContent.map((content, idx) => (
    <section
      className={`${classes.section} ${
        idx === 0 ? classes.darkTheme : classes.lightTheme
      }`}
    >
      <h2 className={classes.sectionHeader}>{content.sectionHeader}</h2>
      <Grid container className={classes.ourServicesWrapper}>
        <Grid sizing={3} container className={classes.ourServicesWrapper}>
          {content.cards.map((card) => (
            <Grid
              alignContent="flex-start"
              container
              className={`${classes.card} ${
                !card.isMiddleCard
                  ? classes.animatedBackground
                  : classes.middleCard
              } ${
                idx === 0
                  ? classes.whiteBorder
                  : `${classes.yellowBorder} ${classes.shadow}`
              }`}
            >
              <Grid xs={12} item>
                <img src={card.cardImg} className={classes.img} />
              </Grid>
              <Grid xs={12} item>
                <Typography variant="h2" className={classes.cardHeader}>
                  {card.cardHeader}
                </Typography>
                <Typography className={classes.p}>
                  {card.cardParagraph}
                </Typography>
                {card.isMiddleCard && (
                  <Link href="#" underline={'always'} className={classes.link}>
                    {card.cardLink}
                  </Link>
                )}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  ))
}
export default OurServices

import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core'

// Images
import logoImg from '../../assets/images/logo.png'

// Icons
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const useStyles = makeStyles((theme) => ({
  footer: {
    marginLeft: ({ isDrawerFolded, mqMd }) => {
      if (mqMd) {
        return 0
      } else if (isDrawerFolded) {
        return theme.typography.pxToRem(
          theme.mixins.drawer.unfoldedMdWidth + theme.spacing(1),
        )
      } else {
        return theme.typography.pxToRem(
          theme.mixins.drawer.foldedMdWidth + theme.spacing(1),
        )
      }
    },
  },
  contacts: {
    background: 'black',
    color: 'white',
    padding: theme.spacing(4),
  },

  h2: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '1rem',
    fontSize: theme.typography.pxToRem(12),
  },

  icon: {
    color: theme.palette.yellow.light,
    marginRight: '1rem',
  },

  span: {
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(14),
  },
  link: {
    // color: 'white',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.yellow.light,
    },
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  listItem: {
    fontSize: theme.typography.pxToRem(14),
    fontFamily: 'Roboto',
    paddingTop: theme.spacing(1),
  },
  firstListItem: {
    fontSize: theme.typography.pxToRem(12),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    letterSpacing: '1px',
  },
  p: {
    fontSize: theme.typography.pxToRem(13),
    fontFamily: 'Roboto',
    lineHeight: '1.5',
  },
  platform: {
    padding: theme.spacing(4),
  },
  addon: {
    padding: theme.spacing(4),
    background: '#000',
  },
  addonParagraph: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(13),
    marginBottom: '4rem',
  },
  img: {
    width: '100%',
  },
}))

const Footer = ({ mqMd, isDrawerFolded }) => {
  const classes = useStyles({ mqMd, isDrawerFolded })

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid xs={12} sm={6} lg={4} item>
          <Box className={classes.contacts}>
            <Typography variant="h2" className={classes.h2}>
              SIGUENOS
            </Typography>
            <Box mb={4}>
              <Link
                color="inherit"
                underline="none"
                className={classes.link}
                href="#"
              >
                <InstagramIcon className={classes.icon} />
                <Typography variant="caption" className={classes.span}>
                  sugarya_cl
                </Typography>
              </Link>
            </Box>
            <Typography variant="h2" className={classes.h2}>
              CONTACTO
            </Typography>
            <Box>
              <Link
                color="inherit"
                underline="none"
                className={classes.link}
                href="#"
              >
                <MailOutlineIcon className={classes.icon} />
                <Typography variant="caption" className={classes.span}>
                  contacto@sugarya.com
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} lg={4} item>
          <Box className={classes.platform}>
            <Grid container spacing={4}>
              <Grid xs={6} item>
                <Typography className={classes.p}>
                  SugarYA no tiene relación comercial ni laboral entre la marca
                  y los anunciantes.
                </Typography>
              </Grid>
              <Grid xs={6} item>
                <ul className={classes.list}>
                  <li className={classes.firstListItem}>PLATAFORMA</li>
                  <li className={classes.listItem}>
                    <Link
                      color="textPrimary"
                      className={classes.link}
                      underline="none"
                      href="#"
                    >
                      Acerca de
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link
                      color="textPrimary"
                      className={classes.link}
                      underline="none"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link
                      color="textPrimary"
                      className={classes.link}
                      underline="none"
                      href="#"
                    >
                      Términos de uso
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} lg={4} item>
          <Box className={classes.addon}>
            <Typography className={classes.addonParagraph}>
              Acceso exclusivo a mayores de 18 años. SugarYA se reserva el
              derecho de acceso y uso.
            </Typography>
            <img src={logoImg} className={classes.img} />
          </Box>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

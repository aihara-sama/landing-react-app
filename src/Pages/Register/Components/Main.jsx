import {
  Box,
  FormControlLabel,
  Link,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@material-ui/core'
import { useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'

// Images
import darkStripeWallpaper from '../../../assets/images/dark-stripe-wallpaper.jpg'

const useStyles = makeStyles((theme) => ({
  main: {
    // display: 'flex',
    // justifyContent: 'center',
    // maxWidth: '600px',
    // margin: '0 auto',
    marginBottom: '4rem',
    paddingTop: '5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    background: '#f0f3f4',
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
  section: {
    // height: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  },
  img: {
    background: `url(${darkStripeWallpaper})`,
    position: 'relative',
    backgroundSize: 'contain',
    backgroundRepeat: 'norepeat',
    height: '200px',
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
  },
  h5: {
    fontSize: theme.typography.pxToRem(16),
    fontFamily: 'Poppins',
    color: 'white',
    background: '#00000070',
    padding: '.5rem 1rem',
    position: 'absolute',
    letterSpacing: '2px',
    bottom: '1.5rem',
    left: '3rem',
    marginBottom: 0,
  },
  inp_group_header: {
    textAlign: 'center',
    margin: '2rem 0',
    fontSize: theme.typography.pxToRem(11),
    fontFamily: 'Poppins',
    color: '#B0B0B0',
  },
  inp: {
    width: '100%',
    padding: '.5rem 1rem',
    color: '#959697',
    outline: 'none',
    borderColor: '#00000028',
  },
  inp_label: {
    fontSize: theme.typography.pxToRem(13),
    fontFamily: 'Poppins',
    color: '#0A0A0A',
    display: 'inline-block',
    marginRight: '.8rem',
    fontWeight: 'bold',
  },
  req_flag: {
    fontSize: theme.typography.pxToRem(10),
    fontFamily: 'Poppins',
    padding: '0.1rem ???0.3rem',
    background: '#bdbbbb54',
    cursor: 'default',
  },
  p: {
    fontSize: theme.typography.pxToRem(13),
    fontFamily: 'Poppins',
    color: '#535353c3',
    marginTop: '.3rem',
  },
  selectWrapper: {
    width: '100%',
    // padding: '2rem 0',
    height: '50px',
    marginBottom: '0',

    '&::before': {
      display: 'none',
    },
    '&::after': {
      display: 'none',
    },
  },
  select: {
    marginBottom: 0,
    fontSize: theme.typography.pxToRem(13),
    fontFamily: 'Poppins',
    height: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // selectMenu: {
  //   top: '2rem',
  // },
  selectList: {
    background: 'black',
    color: 'white',
    padding: '0',

    '& li': {
      fontSize: theme.typography.pxToRem(13),
      fontFamily: 'Poppins',
      paddingTop: '.2rem !important',
      paddingBottom: '.2rem !important',
      minHeight: '35px',
    },

    '& li:hover': {
      backgroundColor: theme.palette.yellow.light + ' !important',
      color: 'black',
    },
  },
  selectedItem: {
    backgroundColor: theme.palette.yellow.light + ' !important',
    color: 'black',
  },
  link: {
    fontSize: theme.typography.pxToRem(13),
    fontFamily: 'Poppins',
    width: '100%',
    display: 'block',
    textAlign: 'center',
    padding: '1rem 0',
    textTransform: 'uppercase',
  },

  signInLink: {
    background: theme.palette.yellow.dark,
    color: 'black',
    transition: theme.transitions.duration.standard + 'ms',

    '&:hover': {
      background: '#aaaaaa',
    },
  },
  logInLink: {
    color: 'white',
    background: 'black',

    transition: theme.transitions.duration.standard + 'ms',

    '&:hover': {
      opacity: '.8',
    },
  },
}))

const Main = ({ isDrawerFolded, mqMd }) => {
  const classes = useStyles({ isDrawerFolded, mqMd })
  const [rangeInputValue, setRangeInputValue] = useState('')

  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <div className={classes.img}>
          <p className={classes.h5}>CREAR CUENTA</p>
        </div>
        <p className={classes.inp_group_header}>DETALLES DE LA CUENTA</p>

        <Box mb={3}>
          <Box mb={1}>
            <span className={classes.inp_label}>Nombre de usuario</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <input className={classes.inp} />
        </Box>

        <Box mb={3}>
          <Box mb={1}>
            <span className={classes.inp_label}>
              Direcci??n de correo electr??nico
            </span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <input className={classes.inp} />
        </Box>

        <Box mb={3}>
          <Box mb={1}>
            <span className={classes.inp_label}>Escribe una contrase??a</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <input className={classes.inp} />
        </Box>

        <Box mb={3}>
          <Box mb={1}>
            <span className={classes.inp_label}>Confirma la contrase??a</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <input className={classes.inp} />
        </Box>
        <p className={classes.inp_group_header}>DETALLES DEL PERFIL</p>
        <Box mb={1}>
          <Box mb={1}>
            <span className={classes.inp_label}>Nombre de Perfil</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <input className={classes.inp} />
        </Box>
        <p className={classes.p}>
          El nombre que usar??s en tu perfil y buscador. Otros usuarios podr??n
          identificarte con este nombre. Recomendamos usar un nick y nunca tu
          nombre real.
        </p>
        <Box mb={1}>
          <Box mb={0}>
            <span className={classes.inp_label}>Genero</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <Select
            defaultValue="- - -"
            classes={{ select: classes.select, selectMenu: classes.selectMenu }}
            autoWidth
            className={classes.selectWrapper}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
              classes: {
                list: classes.selectList,
              },
            }}
          >
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value="- - -"
            >
              <em>- - -</em>
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Masculino'}
            >
              Masculino
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Femenino'}
            >
              Femenino
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Otro'}
            >
              Otro
            </MenuItem>
          </Select>

          <p className={classes.p}>Confirma tu g??nero</p>
        </Box>
        <Box mb={1}>
          <Box mb={0}>
            <span className={classes.inp_label}>Residencia</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <Select
            defaultValue="- - -"
            classes={{ select: classes.select, selectMenu: classes.selectMenu }}
            // autoWidth
            className={classes.selectWrapper}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
              classes: {
                list: classes.selectList,
              },
            }}
          >
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value="- - -"
            >
              <em>- - -</em>
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Regi??n Metropolitana'}
            >
              Regi??n Metropolitana
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Regi??n de Arica y Parinacota'}
            >
              Regi??n de Arica y Parinacota
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Regi??n de Tarapac??'}
            >
              Regi??n de Tarapac??
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Regi??n de Antofagasta'}
            >
              Regi??n de Antofagasta
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Regi??n de Atacama'}
            >
              Regi??n de Atacama
            </MenuItem>
            <MenuItem
              ListItemClasses={{
                selected: classes.selectedItem,
              }}
              clsasName={classes.option}
              value={'Regi??n de Coquimbo'}
            >
              Regi??n de Coquimbo
            </MenuItem>
          </Select>

          <p className={classes.p}>
            Selecciona tu regi??n de residencia actual.
          </p>
        </Box>

        <Box mb={3}>
          <Box mb={1}>
            <span className={classes.inp_label}>Edad</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <Box display="flex">
            <input
              max="60"
              min="18"
              value={rangeInputValue}
              onChange={(e) => {
                setRangeInputValue(e.target.value)
              }}
              type="range"
              // className={classes.inp}
            />
            <Box ml={1}>
              <span>{rangeInputValue}</span>
            </Box>
          </Box>
          <p className={classes.p}>
            Confirma tu edad. Acceso exclusivo a mayores de 18 a??os.
          </p>
        </Box>
        <Box mb={3}>
          <Box mb={1}>
            <span className={classes.inp_label}>Quiero vivir como:</span>
            <span className={classes.req_flag}>OBLIGATORIO</span>
          </Box>
          <RadioGroup aria-label="gender" name="person type">
            <Box>
              <FormControlLabel value="baby" control={<Radio />} label="baby" />
            </Box>
            <Box>
              <FormControlLabel
                value="sugar"
                control={<Radio />}
                label="sugar"
              />
            </Box>
          </RadioGroup>
        </Box>

        <Box mb={2}>
          <Link
            underline="none"
            to="/register"
            component={RouterLink}
            className={`${classes.link} ${classes.signInLink}`}
          >
            Crear cuenta
          </Link>
        </Box>
        <Box>
          <Link
            underline="none"
            to="/login"
            component={RouterLink}
            className={`${classes.link} ${classes.logInLink}`}
          >
            Iniciar sesi??n
          </Link>
        </Box>
      </section>
    </main>
  )
}

export default Main

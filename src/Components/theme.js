// Mui
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// Fonts
import BarlowFont from '../assets/fonts/Barlow/Barlow-Regular.ttf'
import DidactGothicFont from '../assets/fonts/DidactGothic/DidactGothic-Regular.ttf'
import JosefinSansFont from '../assets/fonts/JosefinSans/static/JosefinSans-Regular.ttf'
import OpenSansFont from '../assets/fonts/OpenSans/OpenSans-Regular.ttf'
import PoppinsFont from '../assets/fonts/Poppins/Poppins-Regular.ttf'
import RobotoFont from '../assets/fonts/Roboto/Roboto-Regular.ttf'
import RubikFont from '../assets/fonts/Rubik/static/Rubik-Regular.ttf'
import KarlaFont from '../assets/fonts/Karla/static/Karla-Regular.ttf'

const barlow = {
  fontFamily: 'Barlow',
  src: `url(${BarlowFont})`,
}
const didactGothic = {
  fontFamily: 'DidactGothic',
  src: `url(${DidactGothicFont})`,
}
const josefinSans = {
  fontFamily: 'JosefinSans',
  src: `url(${JosefinSansFont})`,
}
const openSans = {
  fontFamily: 'OpenSans',
  src: `url(${OpenSansFont})`,
}
const poppins = {
  fontFamily: 'Poppins',
  src: `url(${PoppinsFont})`,
}
const roboto = {
  fontFamily: 'Roboto',
  src: `url(${RobotoFont})`,
}
const rubik = {
  fontFamily: 'Rubik',
  src: `url(${RubikFont})`,
}
const karla = {
  fontFamily: 'Karla',
  src: `url(${KarlaFont})`,
}

const theme = createMuiTheme({
  breakpoints: {
    values: { xs: 0, sm: 765, md: 960, lg: 1280, xl: 1920 },
  },
  mixins: {
    drawer: {
      unfoldedMdWidth: 300,
      foldedMdWidth: 71,
    },
  },
  palette: {
    paper: {
      main: '#EFF2F3',
    },
    divider: 'rgb(82 82 82 / 68%)',
    paper: {
      main: '#FFF',
    },
    yellow: {
      light: '#FFC801',
      dark: '#E3BC69',
    },
    gray: {
      main: '#54595f',
      light: '#777',
      dark: '#878A87',
      darker: '#959A9E',
      darkest: '#55555530',
      lightTransparent: '#050404CF',
    },
    black: {
      main: '#252537',
      dark: '#000',
      light: '#0e0e0e',
    },
    white: {
      main: '#fff',
      dark: '#edf0f1',
      light: '#f1f1f1',
    },
    brown: {
      light: '#fef1ec',
    },
  },
  typography: {
    fontFamily: [
      'Barlow',
      'DidactGothic',
      'JosefinSans',
      'OpenSans',
      'Poppins',
      'Roboto',
      'Rubik',
      'Karla',
    ].join(', '),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          barlow,
          didactGothic,
          josefinSans,
          openSans,
          poppins,
          roboto,
        ],
      },
    },
  },
})

theme.shadows.appBarShadow = '0 10px 30px 0 rgb(82 63 105 / 8%)'

export default theme

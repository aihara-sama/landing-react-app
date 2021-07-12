import { Box, Button, makeStyles, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  btn: {
    height: ({ large }) => (large ? '2.7rem' : '2.3rem'),
    width: '100%',
    fontSize: ({ large }) =>
      large ? theme.typography.pxToRem(15) : theme.typography.pxToRem(14.4),
    fontFamily: 'Poppins',
    textTransform: 'none',
    borderColor: ({ large }) =>
      large ? theme.palette.white.main : theme.palette.yellow.light,
  },
  logInBtn: {
    color: ({ large }) =>
      large ? theme.palette.white.main : theme.palette.yellow.light,
    borderColor: theme.palette.white.main,
    borderWidth: '2px',
    '&:hover': {
      background: theme.palette.yellow.light,
      color: ({ large }) => (large ? 'white' : theme.palette.black.main),
    },
  },
  signUpBtn: {
    color: theme.palette.black.dark,
    background: theme.palette.yellow.light,
  },
}))

const RegisterButtons = ({ large }) => {
  const classes = useStyles({ large })
  console.log('expected')
  return (
    <Box
      m={large ? 3 : 0}
      display="flex"
      flexDirection="row"
      color="paper.main"
      justifyContent={!large ? 'flex-end' : 'flex-start'}
      marginLeft={!large ? 'auto' : 3}
    >
      <Box mr={3} width={large ? '100%' : '135px'}>
        <Button
          variant="outlined"
          className={`${classes.btn} ${classes.logInBtn}`}
        >
          Iniciar sesión
        </Button>
      </Box>
      <Box width={large ? '100%' : '90px'}>
        <Button
          disableElevation
          variant="contained"
          className={`${classes.btn} ${classes.signUpBtn}`}
        >
          Registro
        </Button>
      </Box>
    </Box>
  )
}

export default RegisterButtons

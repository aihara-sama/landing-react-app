// Mui Components
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core'

import { Link as RouterLink } from 'react-router-dom'

// import { Link as RouterLink } from 'react-router-dom'

// Icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined'
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'

// React
import { useEffect, useState } from 'react'

// My Components
import TopBar from './TopBar'
import RegisterButtons from './RegisterButtons'

const useAppBarStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows.appBarShadow,
    background: theme.palette.black.light,

    // Media
    [`@media (min-width: ${theme.typography.pxToRem(
      theme.breakpoints.values.md,
    )})`]: {
      background: theme.palette.white.main,
    },
  },
}))

const useDrawerStyles = makeStyles((theme) => ({
  paper: {
    overflow: 'hidden',
    transition: `${theme.transitions.duration.shorter}ms width`,
    whiteSpace: 'nowrap',
    background: theme.palette.black.light,
    width: '100%',

    // Media
    [`@media (min-width: ${theme.typography.pxToRem(
      theme.breakpoints.values.md,
    )})`]: {
      width: ({ isDrawerFolded }) =>
        isDrawerFolded
          ? theme.typography.pxToRem(theme.mixins.drawer.unfoldedMdWidth)
          : theme.typography.pxToRem(theme.mixins.drawer.foldedMdWidth),
    },
  },
}))

const useCommonStyles = makeStyles((theme) => ({
  dot: {
    width: '5px',
    height: '5px',
    background: theme.palette.gray.main,
    borderRadius: '50%',
  },
  divider: {
    backgroundColor: theme.palette.divider,
  },
  whiteClr: {
    color: theme.palette.white.main,
  },
  link: {
    transition: '.3s',
    fontSize: theme.typography.pxToRem(14.4),
    fontFamily: 'Poppins',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    color: theme.palette.white.light,
    '&:hover': {
      background: theme.palette.gray.darkest,
      color: theme.palette.yellow.light,
    },
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  account: {
    transition: '.3s opacity',
    letterSpacing: '2px',
    color: theme.palette.white.main,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontFamily: 'Poppins',
    fontSize: '.7rem',
    cursor: 'default',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    position: 'relative',

    '&::before': {
      transition: theme.transitions.duration.standard + 'ms',
      position: 'absolute',
      content: '""',
      width: '3px',
      height: '0',
      background: 'yellow',
      bottom: '0px',
      opacity: '0',
    },

    '&:hover::before': {
      opacity: 1,
      height: '44px',
    },
  },
  listItemText: {
    transition: '.3s opacity',
  },
  'opacity-0': {
    opacity: 0,
  },
}))

export default ({ isDrawerFolded, setIsDrawerFolded, mqMd }) => {
  // App State
  const [drawerOpen, setDrawerOpen] = useState(false)
  // DOM Classes
  const appBarClasses = useAppBarStyles()
  const drawerClasses = useDrawerStyles({ isDrawerFolded })
  const commonClasses = useCommonStyles()

  const theme = useTheme()

  useEffect(() => {
    if (mqMd) {
      setIsDrawerFolded(true)
    }
  }, [mqMd])

  return (
    <>
      <AppBar className={appBarClasses.root}>
        {mqMd ? (
          <TopBar
            mqMd={mqMd}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        ) : (
          <Toolbar>
            <RegisterButtons />
          </Toolbar>
        )}
        <Drawer
          variant={!mqMd ? 'permanent' : 'temporary'}
          classes={{ paper: drawerClasses.paper }}
          open={drawerOpen}
          anchor="left"
        >
          <TopBar
            mqMd={mqMd}
            isDrawerFolded={isDrawerFolded}
            setIsDrawerFolded={setIsDrawerFolded}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />

          {mqMd && (
            <>
              <Divider className={commonClasses.divider} />
              <RegisterButtons large />
            </>
          )}

          <Divider className={commonClasses.divider} />
          <List dense>
            <ListItem className={commonClasses.listItem} disableGutters>
              <Link
                to="/"
                component={RouterLink}
                className={`${commonClasses.link} `}
                underline="none"
              >
                <HomeOutlinedIcon />
                <ListItemText
                  disableTypography
                  className={`${commonClasses.listItemText} ${
                    !isDrawerFolded ? commonClasses['opacity-0'] : ''
                  }`}
                >
                  Inicio
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem className={commonClasses.listItem} disableGutters>
              <Link
                to="/como-funciona-sugar-baby"
                className={`${commonClasses.link}`}
                underline="none"
                component={RouterLink}
              >
                <LayersOutlinedIcon />
                <ListItemText
                  disableTypography
                  className={`${commonClasses.listItemText} ${
                    !isDrawerFolded ? commonClasses['opacity-0'] : ''
                  }`}
                >
                  Como funciona
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem className={commonClasses.listItem} disableGutters>
              <Link
                to="/acerca-de-sugar-daddies"
                className={`${commonClasses.link}`}
                component={RouterLink}
                underline="none"
              >
                <DnsOutlinedIcon />
                <ListItemText
                  disableTypography
                  className={`${commonClasses.listItemText} ${
                    !isDrawerFolded ? commonClasses['opacity-0'] : ''
                  }`}
                >
                  Acerca de
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem className={commonClasses.listItem} disableGutters>
              <Link
                component={RouterLink}
                to="/blog"
                className={`${commonClasses.link}`}
                underline="none"
              >
                <DashboardOutlinedIcon />
                <ListItemText
                  disableTypography
                  className={`${commonClasses.listItemText} ${
                    !isDrawerFolded ? commonClasses['opacity-0'] : ''
                  }`}
                >
                  Blog
                </ListItemText>
              </Link>
            </ListItem>
          </List>

          {isDrawerFolded ? (
            <Typography
              className={`${commonClasses.account}  ${
                !isDrawerFolded ? commonClasses['opacity-0'] : ''
              }`}
            >
              CUENTA
            </Typography>
          ) : (
            <Box my={2} display="flex" justifyContent="center">
              <span className={commonClasses.dot}></span>
            </Box>
          )}

          <List>
            <ListItem className={commonClasses.listItem} disableGutters>
              <Link
                component={RouterLink}
                to="/register"
                className={`${commonClasses.link}`}
                underline="none"
              >
                <CreateOutlinedIcon />
                <ListItemText
                  disableTypography
                  className={`${commonClasses.listItemText} ${
                    !isDrawerFolded ? commonClasses['opacity-0'] : ''
                  }`}
                >
                  Registro
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem className={commonClasses.listItem} disableGutters>
              <Link
                component={RouterLink}
                href="/my-account"
                className={`${commonClasses.link}`}
                underline="none"
              >
                <PersonOutlineOutlinedIcon />
                <ListItemText
                  disableTypography
                  className={`${commonClasses.listItemText} ${
                    !isDrawerFolded ? commonClasses['opacity-0'] : ''
                  }`}
                >
                  Iniciar sesión
                </ListItemText>
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
      <Toolbar />
    </>
  )
}

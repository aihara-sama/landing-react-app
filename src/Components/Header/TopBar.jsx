import { makeStyles, Toolbar, useMediaQuery, useTheme } from '@material-ui/core'
import { useState } from 'react'

import ReactHamburgerMenu from 'react-hamburger-menu'

import logo from '../../assets/images/logo.png'

import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined'

const useStyle = makeStyles((theme) => ({
  logo: {
    marginRight: 'auto',
    cursor: 'pointer',
    transition: '.3s opacity',
    '&:hover': {
      opacity: '.75',
    },
  },
  menuIcon: {
    cursor: 'pointer',
    opacity: '.75',
  },
  foldMenuIcon: {
    fontSize: '2rem',
    opacity: '.75',
    cursor: 'pointer',
    color: theme.palette.white.main,
    transition: theme.transitions.duration.standard + 'ms',
    '&:hover': {
      opacity: 1,
    },
  },
  'opacity-0': {
    opacity: '0',
  },
  'd-none': {
    display: 'none',
  },
}))

const TopBar = ({
  mqMd,
  drawerOpen,
  setDrawerOpen,
  isDrawerFolded,
  setIsDrawerFolded,
}) => {
  const classes = useStyle()

  return (
    <Toolbar>
      <img
        className={`${classes.logo} ${
          !isDrawerFolded && !mqMd
            ? `${classes['d-none']} ${classes['opacity-0']}`
            : ''
        }`}
        width="110"
        src={logo}
      />

      {mqMd ? (
        <ReactHamburgerMenu
          className={classes.menuIcon}
          color={'white'}
          rotate={180}
          isOpen={drawerOpen}
          animationDuration={0.2}
          width={25}
          height={13}
          menuClicked={() => {
            setDrawerOpen((prevOpen) => !prevOpen)
          }}
        />
      ) : (
        <MenuOpenOutlinedIcon
          onClick={() => {
            setIsDrawerFolded((prevVisible) => !prevVisible)
          }}
          className={classes.foldMenuIcon}
        />
      )}
    </Toolbar>
  )
}

export default TopBar

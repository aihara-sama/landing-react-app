import { makeStyles } from '@material-ui/core'

// Components
import Hero from './Hero'
import OurServices from './OurServices'
import LearnMore from './LearnMore'
import Blog from './Blog'

const useCommonStyles = makeStyles((theme) => ({
  main: {
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

    // Media
    [theme.breakpoints.up('sm')]: {
      paddingTop: '8rem',
    },
  },
}))

const Main = ({ isDrawerFolded, mqMd }) => {
  const commonClasses = useCommonStyles({ isDrawerFolded, mqMd })

  return (
    <main className={commonClasses.main}>
      <Hero />
      <OurServices />
      <LearnMore mqMd={mqMd} />
      <Blog />
    </main>
  )
}

export default Main

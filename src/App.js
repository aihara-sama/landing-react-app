import { useMediaQuery, useTheme } from '@material-ui/core'
import { useState } from 'react'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

// Pages
import HowDoesItWork from './Pages/HowDoesItWork/index'
import Main from './Pages/Main/index'
import About from './Pages/About/index'
import Register from './Pages/Register/index'

import {
  Switch,
  Route,
  // Link
} from 'react-router-dom'

const App = () => {
  const theme = useTheme()
  console.log({ theme })

  const [isDrawerFolded, setIsDrawerFolded] = useState(true)
  const mqMd = useMediaQuery(
    `(max-width: ${theme.typography.pxToRem(theme.breakpoints.values.md)})`,
  )

  return (
    <>
      <Header
        mqMd={mqMd}
        isDrawerFolded={isDrawerFolded}
        setIsDrawerFolded={setIsDrawerFolded}
      />
      <Switch>
        <Route exact path="/">
          <Main mqMd={mqMd} isDrawerFolded={isDrawerFolded} />
        </Route>
        <Route path="/como-funciona-sugar-baby">
          <HowDoesItWork mqMd={mqMd} isDrawerFolded={isDrawerFolded} />
        </Route>
        <Route path="/acerca-de-sugar-daddies">
          <About mqMd={mqMd} isDrawerFolded={isDrawerFolded} />
        </Route>
        <Route path="/register">
          <Register mqMd={mqMd} isDrawerFolded={isDrawerFolded} />
        </Route>
      </Switch>
      <Footer mqMd={mqMd} isDrawerFolded={isDrawerFolded} />
    </>
  )
}

export default App

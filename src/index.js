// React
import React from 'react'
import ReactDOM from 'react-dom'

// Mui
import { ThemeProvider } from '@material-ui/styles'

// Components
import App from './App'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

// Theme
import theme from './Components/theme'
import { CssBaseline } from '@material-ui/core'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
)

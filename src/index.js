import 'react-toastify/dist/ReactToastify.css'
import * as theme from './styles/theme'
import * as pages from './pages'
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './styles/global'
import Toastr from '/ui/Toaster'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Toastr />
    <Router>
      <Switch>
        <Route exact path='/' component={pages.Home} />
        <Route path={pages.Home.route} component={pages.Home} />
      </Switch>
    </Router>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))

import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './layouts'
import About from './layouts/about'
import Menu from './layouts/menu'
import Opening from './layouts/opening'
import Works from './layouts/works'
import { Global, LogoWrap, MenuWrap } from './styles/app'

const App: React.SFC = () => {
  return (
    <Router>
      <LogoWrap>
        <Opening />
      </LogoWrap>
      <Global />
      <MenuWrap>
        <Menu />
      </MenuWrap>
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/works/:name" component={Works} exact={true} />
      </Switch>
    </Router>
  )
}

export default App

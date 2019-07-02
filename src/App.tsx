import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './layouts'
import About from './layouts/about'
import WorksDetails from './layouts/worksDetails'

const App: React.SFC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/worksDetails" component={WorksDetails} exact={true} />
      </Switch>
    </Router>
  )
}

export default App

import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './layouts'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Index} exact={true} /> 
        </Switch>
      </Router>
    )
  }
}

export default App

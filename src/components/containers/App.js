import React from 'react';
import SamPlayer from './SamPlayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"  component={SamPlayer} />
      <Route exact path="/:activeVideo" component={SamPlayer} />
    </Switch>
  </Router>
)

export default App;
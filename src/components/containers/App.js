import React from 'react';
import SamPlayer from './SamPlayer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
 
const App = () => (
  <>
  <Router>
    <Switch>
      <Route exact path="/"  component={SamPlayer} />
      <Route exact path="/:activeVideo" component={SamPlayer} />
    </Switch>
  </Router>
  <GlobalStyle/>
  </>
)

export default App;
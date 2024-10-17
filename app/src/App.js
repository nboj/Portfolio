import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { PooperPunk, BlockBreaker, Platformer, NumberWizard } from './pages/UnityLinks';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/numberwizard'>
            <NumberWizard />
          </Route>
          <Route path='/storyteller'>
            <PooperPunk />
          </Route>
          <Route path='/blockbreaker'>
            <BlockBreaker />
          </Route>
          <Route path='/platformer'>
            <Platformer />
          </Route>
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

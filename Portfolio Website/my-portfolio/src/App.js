import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';  
import Home from './pages/Home'; 
import UnityLinks, { NumberWizard, PooperPunk, BlockBreaker, Platformer } from './pages/UnityLinks';
import $ from 'jquery'; 

const App = () => { 
  return (  
    <Router>
      <div>
        <Switch>
          <Route path='/' exact> 
            <Home />
          </Route>
          <Route path='/NumberWizard' exact>
            <NumberWizard />
          </Route>
          <Route path='/PooperPunk' exact>
            <PooperPunk />
          </Route>
          <Route path='/BlockBreaker' exact>
            <BlockBreaker />
          </Route>
          <Route path='/Platformer' exact>
            <Platformer />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

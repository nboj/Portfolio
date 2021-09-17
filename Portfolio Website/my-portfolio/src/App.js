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
          <Route path='/NumberWizard'>
            <NumberWizard />
          </Route>
          <Route path='/PooperPunk'>
            <PooperPunk />
          </Route>
          <Route path='/BlockBreaker'>
            <BlockBreaker />
          </Route>
          <Route path='/Platformer'>
            <Platformer />
          </Route>
          <Route component={Home}/>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

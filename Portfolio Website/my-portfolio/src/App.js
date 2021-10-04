import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';  
import Home from './pages/Home'; 
import UnityLinks, { PooperPunk, BlockBreaker, Platformer, NumberWizard } from './pages/UnityLinks'; 
import ParallaxCache from './modules/ParallaxCache';

const App = () => {  
  return (   
    <Router>
      <ParallaxCache />
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

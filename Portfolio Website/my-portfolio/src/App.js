import React from 'react';
import { Route, Switch} from 'react-router-dom';  
import Home from './pages/Home'; 
import UnityLinks, { NumberWizard, PooperPunk, BlockBreaker, Platformer } from './pages/UnityLinks';
import $ from 'jquery'; 

const App = () => { 
  return (  
    <Switch>
      <Route exact path='/'> 
        <Home />
      </Route>
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
    </Switch> 
  );
}

export default App;

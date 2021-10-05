import React from 'react';  
import Header from '../Modules/Header';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Home() {
  return ( 
    <Parallax 
      pages={2}
    > 
      <ParallaxLayer
        speed={2}
        offset={0}
      >
        <Header /> 
      </ParallaxLayer>
      </Parallax>
  );
};

export default Home;

import React, { useRef } from 'react';  
import Header from '../Modules/Header';
import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import '../UniversalStyles.css';

function Home() {    
  return (  
    <Parallax id='parallax' 
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

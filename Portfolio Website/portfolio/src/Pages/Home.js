import React from 'react';  
import Header from '../Modules/Header';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import { config } from '@react-spring/web'; 
import '../UniversalStyles.css';
import NavBar from '../Modules/NavBar';
import Unity from '../Modules/Unity';
import {ParallaxProvider} from "react-scroll-parallax";

function Home() {    
  return (  
    <ParallaxProvider>
      <NavBar 
        options={{
          items: ['C#', 'Java', 'Web', 'Unity'],
          links: ['#csharp', '#java', '#web', '#unity']
        }}
      />
      <Parallax id='parallax' pages={9} config={config.stiff}>
        <Header />  
        <Unity />
      </Parallax>
    </ParallaxProvider>
  );
};

export default Home;

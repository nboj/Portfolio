import '../App.css';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';  
import { animateScroll as scroll} from 'react-scroll';
import Unity from '../modules/unity';
import Web from '../modules/web';
import Java from '../modules/Java';
import Typewriter from "../modules/Typewriter";

let date = new Date();
let birthday = false;
function Home() {   
  useEffect(() => { 
    $('html').css({background: 'white'});
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const [navOn, setNavOn] = useState(true);
  const getAge = () => {
      const month = date.getMonth();
      let age = date.getFullYear() - 2003;
      if (month < 8) {
          if (month === 7 && date.getDate() < 14) {
              age--;
          } else if (month < 7) {
              age--;
          } else if (month === 7 && date.getDate() === 14) {
              birthday = true;
          }
      }
      return age;
  }
  return ( 
    <div id='html' className='app'>  
      <nav style={{display: navOn ? 'block' : 'none'}}>
        <ul className='navOptions'>
          <svg id='logo1' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.93 279.33"  onClick={scrollToTop}> 
              <line className='letters' id='c1' x1="20.02" y1="16.31" x2="20.02" y2="242.54"/>
              <line className='letters' id='c2' x1="0.28" y1="36.2" x2="141.66" y2="36.2"/>
              <line className='letters' id='c3' y1="252.62" x2="141.37" y2="252.62"/>
              <line className='letters' id='a1' x1="273.94" y1="19.44" x2="194.49" y2="273.36"/>
              <line className='letters' id='a2' x1="332.16" y1="170.31" x2="226.81" y2="170.04"/>
              <line className='letters' id='a3' x1="273.66" y1="6.73" x2="368.09" y2="270.8"/>
          </svg>
          <li onClick={() => {scroll.scrollTo($('#cSharp').position().top)}}>C#</li>
          <li onClick={() => {scroll.scrollTo($('#java').position().top)}}>Java</li>
          <li onClick={() => {scroll.scrollTo($('#web').position().top)}}>Web</li>
          <li onClick={() => {scroll.scrollTo($('#unity').position().top)}}>Unity</li>
        </ul>
      </nav> 
      <button className='scrollToTop' onClick={scrollToTop} style={{display: navOn ? 'block' : 'none'}}>△</button>
      <header className='App-header'>
        <div>
          <h1>I'm Christian Auman!</h1>
          <Typewriter
              options={{
                preText: `${getAge()} years old${birthday?' (Happy birthday me!!)':''}, computer scientist, `,
                words: [
                    "pet lover...",
                    "game developer...",
                    "gamer...", "varsity soccer player...",
                    "coffee addict...",
                    "pizza lover...",
                    "motivated, determined...",
                    "hard worker...",
                    "creative...",
                    "photographer...",
                    "videographer...",
                    "adventurous..."
                ],
                deleteRate: 60,
                printRate: 40,
                delay: (Math.random() * 1000 + 2000)
              }}
          />
        </div>
      </header>  
      <Unity/>
      <Web />
      <Java setNav={setNavOn}/>
      <div id='cSharp'>
        <h1 id='title'>C#</h1>
        <section>
          <p>Im struggling to figure out what to put here...</p>
          <p>Im struggling to figure out what to put here...</p>
          <p>Im struggling to figure out what to put here...</p>
          <p>Im struggling to figure out what to put here...</p>
          <p>Im struggling to figure out what to put here...</p>
          <p>Im struggling to figure out what to put here...</p>
          <p>Im struggling to figure out what to put here...</p>
        </section>
      </div>
    </div> 
  );
}

export default Home;

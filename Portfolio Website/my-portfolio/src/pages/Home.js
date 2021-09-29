import '../App.css';
import React, { Fragment, useEffect, useState } from 'react';  
import $ from 'jquery';  
import { animateScroll as scroll} from 'react-scroll';
import Unity from '../modules/unity';
import Web from '../modules/web';
import Java from '../modules/Java';

const date = new Date();
let i = 0;  
let a = 1100;   
const offset = 450;
let on = true;
function ForwardsLoop(word, text, setText) { 
  setTimeout(() => {  
    setText(word.substring(0, i));
    i++;
    if (i <= word.length)
    ForwardsLoop(word, text, setText); 
    else {
      BackwardsLoop(word, text, setText);
    }
  }, 100);
} 
function BackwardsLoop(word, text, setText) { 
  setTimeout(() => {  
    setText(word.substring(0, i));
    i--;
    if (i >= 0)
    BackwardsLoop(word, text, setText); 
  }, 50); 
} 
let index = 0;    
function Home() {   
  useEffect(() => { 
    $('html').css({background: 'white'});
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  }  
  const [text, setText] = useState(""); 
  const texts = [", pet lover...", ", game developer...", ", gamer...", ", varcity soccer player..."]
  useEffect(() => { 
    window.onblur = () => {
      on = false;
    }

    window.onfocus = () => {
      on = true;
    }
    let word = "";
    const interval = setInterval(() => {
      if (window.scrollY < offset && on) {  
        word = texts[index]; 
        ForwardsLoop(word, text, setText);  
        index = index >= texts.length - 1 ? index = 0 : index + 1;  
        a = word.length * 125; 
        i = 0;
      }
    }, a);    
    return () => clearInterval(interval);
  });   

  const [navOn, setNavOn] = useState(true);
 
  return ( 
    <div id='html' className='app'>  
      <nav style={{display: navOn ? 'block' : 'none'}}>
        <ul className='navOptions'>
          <svg id='logo1' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.93 279.33"  onClick={scrollToTop}> 
              <line class='letters' id='c1' x1="20.02" y1="16.31" x2="20.02" y2="242.54"/>
              <line class='letters' id='c2' x1="0.28" y1="36.2" x2="141.66" y2="36.2"/>
              <line class='letters' id='c3' y1="252.62" x2="141.37" y2="252.62"/>
              <line class='letters' id='a1' x1="273.94" y1="19.44" x2="194.49" y2="273.36"/>
              <line class='letters' id='a2' x1="332.16" y1="170.31" x2="226.81" y2="170.04"/> 
              <line class='letters' id='a3' x1="273.66" y1="6.73" x2="368.09" y2="270.8"/>
          </svg>
          <li><a onClick={() => {scroll.scrollTo($('#cSharp').position().top)}}>C#</a></li>
          <li><a onClick={() => {scroll.scrollTo($('#java').position().top)}}>Java</a></li>
          <li><a onClick={() => {scroll.scrollTo($('#web').position().top)}}>Web</a></li>
          <li><a onClick={() => {scroll.scrollTo($('#unity').position().top)}}>Unity</a></li>
        </ul>
      </nav> 
      <button className='scrollToTop' onClick={scrollToTop} style={{display: navOn ? 'block' : 'none'}}>△</button>
      <header className='App-header'>
        <div>
          <h1>I'm Christian Auman!</h1>  
          <p>{date.getFullYear() - 2003 - (date.getMonth() < 8 ? 1 : 0)} years old, computer scientist{text}</p>
        </div>
      </header>  
      <Unity/>
      <Web />
      <Java setNavOn={setNavOn}/>
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

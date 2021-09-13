import '../App.css';
import React, { Fragment, useEffect, useState } from 'react';  
import $ from 'jquery';  
import { animateScroll as scroll} from 'react-scroll';
import Unity from '../modules/unity';
import Web from '../modules/web';

const date = new Date();
let i = 0;  
let a = 1100;   
function ForwardsLoop(word, text, setText) {
  if (!$('header.App-header div').is(':visible')) { 
    return;
  }
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
  if (!$('header.App-header div').is(':visible')) { 
    return;
  }
  setTimeout(() => {  
    setText(word.substring(0, i));
    i--;
    if (i >= 0)
    BackwardsLoop(word, text, setText); 
  }, 50); 
} 
let index = 0;    
function Home() {   
  const scrollToTop = () => {
    scroll.scrollToTop();
  }  
  const [text, setText] = useState(""); 
  const texts = [", pet lover...", ", game developer, varcity soccer player...", ", gamer..."]
  useEffect(() => { 
    let word = "";
    const interval = setInterval(() => {
      word = texts[index]; 
      ForwardsLoop(word, text, setText);  
      index = index >= texts.length - 1 ? index = 0 : index + 1;  
      a = word.length * 125; 
      i = 0;
    }, a);    
    return () => clearInterval(interval);
  });  
  return ( 
    <div id='html' className='app'>  
      <nav>
        <ul className='navOptions'>
          <li><a onClick={() => {scroll.scrollTo($('#cSharp').position().top)}} href='#cSharp'>C#</a></li>
          <li><a onClick={() => {scroll.scrollTo($('#java').position().top)}} href='#java'>Java</a></li>
          <li><a onClick={() => {scroll.scrollTo($('#web').position().top)}} href='#web'>Web</a></li>
          <li><a onClick={() => {scroll.scrollTo($('#unity').position().top)}} href='#unity'>Unity</a></li>
        </ul>
      </nav> 
      <button className='scrollToTop' onClick={scrollToTop}>△</button>
      <header className='App-header'>
        <div>
          <h1>I'm Christian Auman!</h1>  
          <p>{date.getFullYear() - 2003 - (date.getMonth() < 8 ? 1 : 0)} years old, computer scientist{text}</p>
        </div>
      </header>  
      <Unity />
      <Web />
      <div id='java'>
        <h1 id='title'>Java</h1>
        <section>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
        </section>
      </div>
      <div id='cSharp'>
        <h1 id='title'>C#</h1>
        <section>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
        </section>
      </div>
    </div> 
  );
}

export default Home;

import './App.css';
import React, { Fragment, useEffect, useState } from 'react';  
import $ from 'jquery'; 
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Carousel from './modules/carousel';
import Card from './modules/card'; 
const date = new Date();
let i = 0;  
let a = 1100;  
const UnityPooperPunk = () => {
  return(
    <Fragment>hello there!</Fragment>
  );
}
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
function App() {  
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
      <div id='unity'>
        <h1 id='title'>Unity</h1>
        <p id='unity-description'>Take a look at some of my creations and learn about my journey to become a game developer.</p>
        <div className='carousel'>
          <Carousel 
          cards = {[
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg' 
              title='PooperPunk'
              description="This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline."
            />,
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg' 
              title='Number Wizard'
              description='Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.'
            />,
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg' 
              title='Block Breaker'
              description="This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine."
            />,
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg'
              title='2D Platformer'
              description="This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn."
            />,
          ]}/>
        </div>
      </div>
      <div id='web'>
        <h1 id='title'>Web</h1>
        <section>  
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
          <p>SAMPLE TEXT</p>
        </section>
      </div>
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

export default App;

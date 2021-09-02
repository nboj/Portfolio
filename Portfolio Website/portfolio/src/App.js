import './App.css';
import React, { useEffect, useState } from 'react';  
 
const date = new Date();
let i = 0;  
let a = 1100;  
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
  const [text, setText] = useState(""); 
  const texts = [", pet lover", ", game developer, varcity soccer player", ", gamer"]
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
    <div id='html'>
      <nav>
        <ul className='navOptions'>
          <li><a>C#</a></li>
          <li><a>Web</a></li>
          <li><a href='#unity'>Unity</a></li>
          <li><a>Java</a></li>
        </ul>
      </nav>
      <header className='App-header'>
        <div>
          <h1>I'm Christian Auman!</h1>  
          <p>{date.getFullYear() - 2003 - (date.getMonth() < 8 ? 1 : 0)} years old, computer scientist{text}</p>
        </div>
      </header>  
      <div id='unity'>
        <h1 id='title'>Unity</h1>
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

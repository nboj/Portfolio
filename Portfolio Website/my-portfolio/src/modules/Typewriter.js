import React, { useState } from 'react';

const Typewriter = (props) => {
    const words = props.options.words;
    const [text, setText] = useState('');
    let letterIndex = 1;
    let wordIndex = 0;
    const iterateForwards = () => { 
        setTimeout(() => {
            if (letterIndex <= words[wordIndex].length) {    
                setText(words[wordIndex].substr(0, letterIndex++)); 
                iterateForwards(); 
            } else {  
                letterIndex-=2;
                setTimeout(() => { 
                    iterateBackwards();
                }, props.options.delay);
            }
        }, props.options.printRate)
    } 

    const iterateBackwards = () => {
        setTimeout(() => {
            if (letterIndex >= 0) { 
                setText(words[wordIndex].substr(0, letterIndex--));
                iterateBackwards();
            } else {
                letterIndex+=2;
                wordIndex = words.length-1 > wordIndex ? wordIndex+1 : 0;
                iterateForwards();
            }
        }, props.options.deleteRate);
    }


    window.onload = () => {
        iterateForwards();
    }
    return (
        <p style={props.options.style}>{ props.options.preText + text}</p>
    );
}

export default Typewriter;
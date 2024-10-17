import React, {useEffect, useState, useRef} from 'react';

const Typewriter = (props) => {
    const [text, setText] = useState('');
    let words = Array.from(props.options.words);
    let letterIndex = 1;
    let previousWord;
    const getRandomWord = () => {
        return Math.abs(Math.round(Math.random() * (words.length - 1)));
    }
    let wordIndex = getRandomWord();
    const iterateForwards = useRef(() => {
        setTimeout(() => {
            if (letterIndex <= words[wordIndex].length) {
                setText(words[wordIndex].substr(0, letterIndex++));
                iterateForwards.current();
            } else {
                letterIndex-=2;
                setTimeout(() => {
                    iterateBackwards.current();
                }, props.options.delay);
            }
        }, props.options.printRate);
    });

    const iterateBackwards = useRef(() => {
        setTimeout(() => {
            if (letterIndex >= 0) {
                setText(words[wordIndex].substr(0, letterIndex--));
                iterateBackwards.current();
            } else {
                letterIndex+=2;
                previousWord = words[wordIndex];
                words.splice(wordIndex, 1);
                if (words.length <= 0) {
                    resetWords.current();
                } else {
                    wordIndex = getRandomWord();
                }
                iterateForwards.current();
            }
        }, props.options.deleteRate);
    })

    const resetWords = useRef(() => {
        words = Array.from(props.options.words);
        wordIndex = getRandomWord();
        if (previousWord === words[wordIndex]) {
            words.splice(wordIndex, 1);
            wordIndex = getRandomWord();
        }
    });

    useEffect(() => {
        resetWords.current();
        iterateForwards.current();
    }, []);

    return (
        <p style={props.options.style}>{ props.options.preText + text}</p>
    );
}

export default Typewriter;
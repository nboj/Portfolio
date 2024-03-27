import React from 'react';
import UnityPage from "../modules/UnityPage";
import platformer from '../images/platformer.png';
import pooperpunk from '../images/pooperpunk.png';
import numberwizard from '../images/numberwizard.png';
import blockbreaker from '../images/blockbreaker.png';

const NumberWizard = () => {
    return(
        <UnityPage
            className='unity-page'
            title='Number Wizard'
            src={numberwizard}
            description='Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.'
        />
    );
}

const PooperPunk = () => {
    return(
        <UnityPage
        className='unity-page'
            title='Pooper Punk'
            src={pooperpunk}
            description="This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline."
        />
    );
}

const BlockBreaker = () => {
    return(
        <UnityPage
        className='unity-page'
            title='Block Breaker'
            src={blockbreaker}
            description="This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine."
        />
    );
}

const Platformer = () => {
    return(
        <UnityPage
        className='unity-page'
            title='2D Platformer'
            src={platformer}
            description="This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn."
        />
    );
}

export {
    NumberWizard,
    PooperPunk,
    BlockBreaker,
    Platformer
};
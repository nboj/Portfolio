import React from 'react';
import Carousel from './carousel';
import Card from './card';
import platformer from '../images/platformer.png';
import pooperpunk from '../images/pooperpunk.png';
import numberwizard from '../images/numberwizard.png';
import blockbreaker from '../images/blockbreaker.png';

const Unity = () => {
    return (
        <div id='unity'>
            <h1 id='title'>Unity</h1>
            <p id='unity-description'>Take a look at some of my creations and learn about my short journey of game development.</p>
            <div className='carousel'>
                <Carousel
                    cards={[
                        <Card src={platformer}
                            title='2D Platformer'
                            description="This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn."
                            href='/platformer'
                        />,
                        <Card src={numberwizard}
                            title='Number Wizard'
                            description='Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.'
                            href='/numberwizard'
                        />,
                        <Card src={pooperpunk}
                            title='Storyteller'
                            description="This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline."
                            href='/storyteller'
                        />,
                        <Card src={blockbreaker}
                            title='Block Breaker'
                            description="This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine."
                            href='/blockbreaker'
                        />,
                    ]} />
            </div>
        </div>
    );
}

export default Unity;

import React from 'react';
import Carousel from './carousel';
import Card from './card'; 

const Unity = () => {
    return(
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
    );
}

export default Unity;
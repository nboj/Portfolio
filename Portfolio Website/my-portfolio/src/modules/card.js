import React from 'react';
import './card.css';

const Card = (props) => {
    return(
        <div className='card'>
            <img src='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg'/> 
            <div id='game-title'>
                <h1>Game Title Here</h1>
            </div>
            <footer>
                <p>This game yadadad aydajfoisajfo sijdf posa jfsdaoijo</p>
            </footer>
        </div>
    );
}

export default Card;
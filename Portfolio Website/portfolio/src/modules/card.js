import React from 'react';
import './card.css';

const Card = (props) => {
    return(
        <div className='card'> 
            <img src={props.src}/> 
            <div id='game-title'>
                <h1>{props.title}</h1>
            </div>
            <footer>
                <p>{props.description}</p>
            </footer> 
        </div>
    );
}

export default Card;
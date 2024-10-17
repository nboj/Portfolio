import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
    return (
        <Link to={props.href} className='card'>
            <img src={props.src} alt=''/>
            <div id='game-title'>
                <h1>{props.title}</h1>
            </div>
            <footer>
                <p>{props.description}</p>
            </footer>
        </Link>
    );
}

export default Card;
import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
    return(
        <div className='card' >
            <Link to={props.href} className='link'>
                <img src={props.src} alt=''/>
                <div id='game-title'>
                    <h1>{props.title}</h1>
                </div>
                <footer>
                    <p>{props.description}</p>
                </footer> 
            </Link>
        </div>
    );
}

export default Card;
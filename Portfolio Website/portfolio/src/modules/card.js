import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';


const Card = (props) => {
    let history = useHistory();
    return(
        <div className='card' >
            <Link to={props.href} className='link'>
                <img src={props.src}/> 
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
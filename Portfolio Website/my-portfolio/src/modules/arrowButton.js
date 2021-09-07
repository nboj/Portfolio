import React from 'react';
import './arrowButton.css';

const ArrowButton = (props) => {
    return(
        <div id='arrowButton'>
            <p>{props.symbol}</p>
        </div>
    );
}

export default ArrowButton;
import React from 'react';
import './arrowButton.css';

const ArrowButton = (props) => {
    return(
        <div className='arrowButton'>
            <p>{props.symbol}</p>
        </div>
    );
}

export default ArrowButton;
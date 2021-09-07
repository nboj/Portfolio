import React from 'react';
import Card from './card';
import './carousel.css';

const Carousel = () => {
    return(
        <div id='carousel'>
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg' />
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg' />
            <Card rf='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg' />
        </div>
    );
}

export default Carousel;
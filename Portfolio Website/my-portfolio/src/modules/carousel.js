import React, {useState} from 'react';
import Card from './card';
import ArrowButton from './arrowButton';
import './carousel.css';


const Carousel = (props) => {
    const [cardList, setCardList] = useState(props.cards);
    const shiftListRight = () => {
        const tempList = [];
        for (var i = 0; i < cardList.length - 1; i++) {
            tempList.push(cardList[i]); 
        }
        tempList.unshift(cardList[cardList.length - 1]);  
        setCardList(tempList);
    }

    const shiftListLeft = () => {
        const tempList = [];
        for (var i = 1; i < cardList.length; i++) {
            tempList.push(cardList[i]); 
        }
        tempList.push(cardList[0]);  
        setCardList(tempList);
    }
    return(
        <div id='carousel'> 
            <span onClick={shiftListLeft}><ArrowButton symbol='◀' /></span>
            {cardList.map((card, index) => ( 
                index>2 ? <span></span> : card
            ))}
            <span onClick={shiftListRight}><ArrowButton symbol='▶' /></span>
        </div>
    );
}

export default Carousel;
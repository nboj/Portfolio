import React, {useState} from 'react';
import Card from './card';
import ArrowButton from './arrowButton';
import './carousel.css';
import $ from 'jquery';


const Carousel = (props) => {
    const [cardList, setCardList] = useState(props.cards);
    const shiftListLeft = () => {
        const tempList = [];
        for (var i = 0; i < cardList.length - 1; i++) {
            tempList.push(cardList[i]); 
        }
        tempList.unshift(cardList[cardList.length - 1]);   
        setCardList(tempList);   
        setCardList(tempList);
        $('#card-1').css({transform: 'translateY(0px)'});
        $('#card-3').css({transform: 'translateY(0px)'}); 
        $('#card-1').css({filter: 'blur(0)'});
        $('#card-3').css({filter: 'blur(0)'});
        setTimeout(() => { 
            $('#card-3').css({transform: 'translateY(10px)'});
            $('#card-1').css({transform: 'translateY(10px)'});
            $('#card-1').css({filter: 'blur(1px)'});
            $('#card-3').css({filter: 'blur(1px)'});
        }, 250);
    }

    const shiftListRight = () => {
        const tempList = [];
        for (var i = 1; i < cardList.length; i++) {
            tempList.push(cardList[i]); 
        }
        tempList.push(cardList[0]);  
        setCardList(tempList);
        $('#card-1').css({transform: 'translateY(0px)'});
        $('#card-3').css({transform: 'translateY(0px)'});
        $('#card-1').css({filter: 'blur(0)'});
        $('#card-3').css({filter: 'blur(0)'});
        setTimeout(() => { 
            $('#card-3').css({transform: 'translateY(10px)'});
            $('#card-1').css({transform: 'translateY(10px)'});
            $('#card-1').css({filter: 'blur(1px)'});
            $('#card-3').css({filter: 'blur(1px)'});
        }, 250);
    }
    return(
        <div id='carousel'> 
            <span onClick={shiftListLeft}><ArrowButton symbol='◀' /></span>
            {cardList.map((card, index) => { 
                if (index > (window.outerWidth > 1127 ? 2 : 0)) {
                    return(<span></span>);
                } else if (window.outerWidth <= 1127) { 
                    return(<div id={'card-2'}>{card}</div>);
                }else if (index == 1) {
                    return(<div id={'card-' + (index + 1)}>{card}</div>);
                } else {
                    return(<div id={'card-' + (index + 1)}>{card}</div>);
                } 
            })}
            <span onClick={shiftListRight}><ArrowButton symbol='▶' /></span>
        </div>
    );
}

export default Carousel;
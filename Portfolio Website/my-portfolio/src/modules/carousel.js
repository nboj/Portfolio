import React, {useEffect, useRef, useState} from 'react';
import ArrowButton from './arrowButton';
import './carousel.css';
import $ from 'jquery';


let symbolIndex = 0; 
let widthChangeNum = 1090;
let cardIndex = 0;
const Carousel = (props) => {
    const getList = () => {
        const tempList=[];
        if (window.outerWidth > widthChangeNum)
            tempList.push(props.cards[(cardIndex - 1) < 0 ? props.cards.length - 1 : cardIndex - 1], props.cards[cardIndex], props.cards[(cardIndex + 1) > props.cards.length - 1 ? 0 : cardIndex + 1]);
        else
            tempList.push(props.cards[cardIndex]);
        return tempList;
    };
    const [cardList, setCardList] = useState(getList());  
    const [symbolList, setSymbolList] = useState([]);
    const changeSymbolList = useRef((index) => {
        var tempSymbolList = [];
        for (var i = 0; i < props.cards.length; i++) {
            tempSymbolList.push(i===index?'⬤':'〇');
        } 
        setSymbolList(tempSymbolList);
    });
    const shiftListLeft = () => { 
        symbolIndex--;
        cardIndex--;
        symbolIndex = symbolIndex < 0 ? props.cards.length - 1 : symbolIndex; 
        cardIndex = cardIndex < 0 ? props.cards.length - 1 : cardIndex; 
        setCardList(getList()); 
        changeSymbolList.current(symbolIndex);
        $('#card-1').css({transform: 'translateY(0px)', filter: 'blur(0)'});
        $('#card-3').css({transform: 'translateY(0px)', filter: 'blur(0)'});   
        setTimeout(() => { 
            $('#card-3').css({transform: 'translateY(10px)'});
            $('#card-1').css({transform: 'translateY(10px)'});
            $('#card-1').css({filter: 'blur(1.5px)'});
            $('#card-3').css({filter: 'blur(1.5px)'});
        }, 250);
    };

    const shiftListRight = () => {  
        symbolIndex++; 
        cardIndex++; 
        cardIndex = cardIndex > props.cards.length - 1 ? 0 : cardIndex;
        symbolIndex = symbolIndex >= props.cards.length ? 0: symbolIndex; 
        setCardList(getList());
        changeSymbolList.current(symbolIndex);
        $('#card-1').css({transform: 'translateY(0px)'});
        $('#card-3').css({transform: 'translateY(0px)'});
        $('#card-1').css({filter: 'blur(0)'});
        $('#card-3').css({filter: 'blur(0)'});
        setTimeout(() => { 
            $('#card-3').css({transform: 'translateY(10px)'});
            $('#card-1').css({transform: 'translateY(10px)'});
            $('#card-1').css({filter: 'blur(1.5px)'});
            $('#card-3').css({filter: 'blur(1.5px)'});
        }, 250);
    };
    useEffect(() => {
        changeSymbolList.current(symbolIndex);
    }, []);
    window.onresize = () => {
        setCardList(getList());
        $('#card-1').css({filter: 'blur(1.5px)'});
        $('#card-2').css({filter: 'blur(0)'});
        $('#card-3').css({filter: 'blur(1.5px)'});
    };
    return(
        <div>
            <div id='carousel'> 
                <span id='left-arrow' onClick={shiftListLeft}><ArrowButton symbol='◀' /></span> 
                {
                    cardList.map((card, index) => {
                        if(cardList.length === 1)
                            return <div id='card-2' key={index}>{card}</div>
                        else
                            return <div id={'card-' + (index + 1)} key={index}>{card}</div>
                    })
                }  
                <span id='right-arrow' onClick={shiftListRight}><ArrowButton symbol='▶' /></span>
            </div>
            <div id='symbol-list'>  
                {symbolList}
            </div>
        </div>
    );
};

export default Carousel;
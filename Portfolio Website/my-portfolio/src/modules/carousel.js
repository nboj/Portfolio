import React, {useEffect, useState} from 'react';
import Card from './card';
import ArrowButton from './arrowButton';
import './carousel.css';
import $ from 'jquery';


let symbolIndex = 0; 
let widthChangeNum = 1090;
const Carousel = (props) => {
    const [cardList, setCardList] = useState(props.cards);  
    const [symbolList, setSymbolList] = useState([]);
    const changeSymbolList = (index) => { 
        var tempSymbolList = [];
        for (var i = 0; i < cardList.length; i++) {
            tempSymbolList.push(i==index?'⬤':'〇');
        } 
        setSymbolList(tempSymbolList);
    }  
    const shiftListLeft = () => { 
        symbolIndex--;
        const tempList = [];
        symbolIndex = symbolIndex < 0 ? cardList.length - 1 : symbolIndex; 
        changeSymbolList(symbolIndex);
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
            $('#card-1').css({filter: 'blur(1.5px)'});
            $('#card-3').css({filter: 'blur(1.5px)'});
        }, 250);
    }

    const shiftListRight = () => {  
        symbolIndex++; 
        symbolIndex = symbolIndex >= cardList.length ? 0: symbolIndex; 
        changeSymbolList(symbolIndex);
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
            $('#card-1').css({filter: 'blur(1.5px)'});
            $('#card-3').css({filter: 'blur(1.5px)'});
        }, 250);
    }
    useEffect(() => {
        changeSymbolList(symbolIndex);
    }, []);
    window.onresize = () => {
        setCardList(cardList);
    }
    return(
        <div>
            <div id='carousel'> 
                <span id='left-arrow' onClick={shiftListLeft}><ArrowButton symbol='◀' /></span> 
                {cardList.map((card, index) => {   
                    if (index > (window.outerWidth > widthChangeNum ? 2 : 0)) {
                        return(<span></span>);
                    } else if (window.outerWidth <= widthChangeNum) { 
                        return(<div id={'card-2'}>{card}</div>);
                    }else if (index == 1) {
                        return(<div id={'card-' + (index + 1)}>{card}</div>);
                    } else {
                        return(<div id={'card-' + (index + 1)}>{card}</div>);
                    } 
                })}
                <span id='right-arrow' onClick={shiftListRight}><ArrowButton symbol='▶' /></span>
            </div>
            <div id='symbol-list'>  
                {symbolList}
            </div>
        </div>
    );
}

export default Carousel;
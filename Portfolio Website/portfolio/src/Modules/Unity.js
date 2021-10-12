import { ParallaxLayer } from '@react-spring/parallax';
import React, { useState, useEffect } from 'react';
import unityStyles from './unity.module.css';
import styles from 'styled-components';
import $ from 'jquery';
import { useSpring, animated, config } from '@react-spring/web';

const CardStyles = styles.div`
    width: 300px; 
    height: 500px;
    border-radius: 10px;
    background-color: #212529; 
    color: white; 
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    & h1:after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 70%;
        border-bottom: 5px solid rgb(117, 117, 117);
        border-radius: 6px;
    }

    & img { 
        width: 100%;
        height: 200px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    & p {
        text-align: left;
        margin: 10px 20px;
    }
`; 



const Card = (props) => {
    return (
        <CardStyles>
            <img src={props.options.src} alt = ''/>
            <h1>{props.options.title}</h1>
            <p>{props.options.description}</p>
        </CardStyles>
    );
};

const Unity = () => {
    return (
        <div id={unityStyles.unity}>
            <div id={unityStyles.header}>
                <ParallaxLayer offset={1} speed={0.1}>
                    <h1 id={unityStyles.title}>Unity</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.2}>
                    <p id={unityStyles.description}>Take a look at some of my creations and learn about my journey to become a game developer.</p>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.2}>
                    <Carousel 
                        cards = {[
                            <Card options={{src:'https://bl6pap003files.storage.live.com/y4mbG7AE4JqapG8OgvXNChAMXy_NOv6esQjJSsPXRi-rEpevw4IWdbS6nz1Pi6NexouLOdjy0xzDmI2ZONB3loo9J9oxB9n5BUfGSUkSjlX27Zn59aXHSZ5Dukd46KA0I-k_bcLF6y0hwOOEVQaXLJyTaU7sFm_J-quawnnT7Z1OtQjy25vzIliN4C-zq7F6wWK?width=1334&height=750&cropmode=none'
                            ,title:'2D Platformer',
                            description:"This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn.",
                            href:'/Platformer'}}
                            />,
                            <Card options={{src:'https://dsm01pap001files.storage.live.com/y4mf2eZ7zHDygDIBJPBcfonOoIXxG5XA3RlAwPAAD9YaVBi2hfqPQcDK4XCqz4XmbyzlEzj_VlQag-K-vctqtkflQyVu3T1W56VwpIN_WDvY_2LMenjH-i_Kpu71ZlRyhqlmI-tAJyJ9c-0IuMx4YsgCkO7pXxLI3cLTE82FWgtWcMrc8uIIv6HCJCDZ7yT4DUk?width=1334&height=750&cropmode=none' 
                            ,title:'PooperPunk',
                            description:"This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline.",
                            href:'/PooperPunk'}}
                            />,
                            <Card options={{src:'https://bl6pap003files.storage.live.com/y4mDXHWEzzap4XZHLIKvVPJGJ_vPGwlMuwqGtzi7uKIKO5tTljIe19lOyLuz7pPlDTRlp3gEcN8PYV3LoPOgb9VE3UZleiBBJl1TMMOHYQsPTtZYVvLvS3vz1WKCYFYMEJRX2uJlHh2Bx4y1f79kRtKhSJVqvcKM-y5UA3op1zRrr153i1DJ2i9H2Rd1zZPWeW3?width=1334&height=750&cropmode=none' 
                            ,title:'Number Wizard',
                            description:'Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.',
                            href:'/NumberWizard'}}
                            />,
                            <Card options={{src:'https://bl6pap003files.storage.live.com/y4mQ6g73PxrW1G6wSCLNE6xu1WNzMpKS4C9pbbVzr2vfuZDheJErFZ9Of9WsATMuCiairzEqjJeCB3HA55_4YidP0F2-V-Cjm2VkZyOvllSYbvIRUpf7wiMKG1NsxLKc5yb_kxeYdWiwpUgY2x1ctJYOpL81XtGQ7O3X3lrAoBC5sVoDxIfFbhSbv5wo3NXgfvQ?width=1334&height=750&cropmode=none' 
                            ,title:'Block Breaker',
                            description:"This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine.",
                            href:'/BlockBreaker'}}
                            />,
                        ]}
                    />
                </ParallaxLayer>
            </div>
        </div>
    );
};

let symbolIndex = 0; 
let widthChangeNum = 1090;
let cardIndex = 0;
const Carousel = (props) => { 
    const [blur, setBlur] = useState(1.5);
    const [translateY, setTranslateY] = useState(10);

    const CarouselStyles = styles.div` 
        background-color: linear-gradient( rgba(255,153,153,0) 0%,rgba(255, 255, 255, 0) 75%, white 100%);
        display: flex; 
        flex-direction: row;
        justify-content: center; 
        padding: 30px 0 30px 0; 
        margin-top: 350px;

        & >* {
            margin: 10px; 
        }  

        & span {
            margin: auto 0;
        }

        & #card-1, & #card-3 {
            filter: blur(0px); 
            transform: translate3d(0, 10px, 0); 
        }

        & #card-1, & #card-2, & #card-3 {
            transition: .2s;
        } 

        & #symbol-list {
            text-align: center;
            margin-bottom: 200px;
            user-select: none;
        }

        & #card-2:hover {
            transform: translate3d(0, 10px, 0); 
        }  

        & button {  
            padding: 20px 25px; 
        }

        @media only screen and (max-width: 450px) {
            & div {
                width: 100%;
                padding: 0;
                margin: 0;
                border-radius: 0;
            }

            & button {
                padding: 20px 3px;
            }

            & span#left-arrow, span#right-arrow {
                position: absolute; 
                bottom: 0;
                top: 50%; 
                margin: auto;
                height: 20px;
                z-index: 100; 
            }

            & #left-arrow {  
                left: 0;
            }

            & #right-arrow {
                right: 0;
            }

            & #card-2:hover {
                transform: translateY(0px); 
            }  
        }
    `
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
    const changeSymbolList = (index) => { 
        var tempSymbolList = [];
        for (var i = 0; i < props.cards.length; i++) {
            tempSymbolList.push(i===index?'⬤':'〇');
        } 
        setSymbolList(tempSymbolList);
    };
    const delay = 500;
    const shiftListLeft = () => { 
        symbolIndex--;
        cardIndex--;
        symbolIndex = symbolIndex < 0 ? props.cards.length - 1 : symbolIndex; 
        cardIndex = cardIndex < 0 ? props.cards.length - 1 : cardIndex; 
        setCardList(getList()); 
        changeSymbolList(symbolIndex); 
        setTranslateY(0); 
        setTimeout(() => {   
            setBlur(1.5);
        }, delay);
    };

    const shiftListRight = () => {  
        symbolIndex++; 
        cardIndex++; 
        cardIndex = cardIndex > props.cards.length - 1 ? 0 : cardIndex;
        symbolIndex = symbolIndex >= props.cards.length ? 0: symbolIndex; 
        setCardList(getList());
        changeSymbolList(symbolIndex); 
        setTranslateY(0); 
        setTimeout(() => {   
            setBlur(1.5);
        }, delay);
    };
    useEffect(() => {
        changeSymbolList(symbolIndex);
    }, []);
    window.onresize = () => {
        setCardList(getList());
        $('#card-1').css({filter: 'blur(1.5px)'});
        $('#card-2').css({filter: 'blur(0)'});
        $('#card-3').css({filter: 'blur(1.5px)'});
    };
    return(
        <div>
            <CarouselStyles> 
                <span id='left-arrow' onClick={shiftListLeft}><button>&lt;</button></span> 
                {
                    cardList.map((card, index) => {
                        if(cardList.length === 1)
                            return <animated.div id='card-2'>{card}</animated.div>
                        else
                            return <animated.div id={'card-' + (index + 1)}>{card}</animated.div>
                    })
                }  
                <span id='right-arrow' onClick={shiftListRight}><button>&gt;</button></span>
            </CarouselStyles>
            <div id='symbol-list'>  
                {symbolList}
            </div>
        </div>
    );
};

export default Unity;
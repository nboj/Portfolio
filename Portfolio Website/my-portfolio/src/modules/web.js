import React from 'react';
import { useState } from 'react';
import './web.scss';
import { useEffect } from 'react';
import { Parallax } from "react-scroll-parallax";
import wavesImg from '../images/BlueSplash2.png'

const Web = () => {
    
    const [offsetY, setOffsetY] = useState(window.pageYOffset);
    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 

    return(
        <div>
            <div id='web'> 
                <div id='outer-flex'>
                    <h1 id='title'>Web Development</h1> 
                    <div id='flex'>
                        <div style={{transform: `translateX(${(offsetY * 0.09 - 170) >= 0 || (offsetY - 1504) < 0 ? 0 : (offsetY * 0.09 - 170)}px)`, opacity: `${offsetY * 0.0048 - 8}`}}>
                            <h1 className='title'>Html</h1>
                            <span className='underline' /> 
                            <p>I have taken several online courses for html, css, and javascript and have spent this year learning more about html in my Programming and Software Development class.</p>
                        </div>
                        <div style={{transform: `translateY(${(offsetY * 0.09 - 170) >= 0 || (offsetY - 1504) < 0 ? 0 : (offsetY * 0.09 - 170)}px)`, opacity: `${offsetY * 0.0048 - 8}`}}>
                            <h1 className='title'>Css</h1>
                            <span className='underline' />
                            <p>I have taken several online courses for html, css and javascript. For CSS I have taken some extra steps by learning SVG animations as well as some advanced css techniques for animations. I also spent this year learning CSS in my Programming and Software Development class.</p>
                        </div>
                        <div style={{transform: `translateX(${-(offsetY * 0.09 - 170) <= 0 || (offsetY - 1504) < 0 ? 0 : -(offsetY * 0.09 - 170)}px)`, opacity: `${offsetY * 0.0048 - 8}`}}>
                            <h1 className='title'>Javascript</h1>
                            <span className='underline' />
                            <p>I have taken several online courses for html, css and javascript. For Javascript, I took a Udemy course for react and I also spent time to learn the new Javascript syntax and features inside JS6.</p>
                        </div>  
                    </div>
                </div> 
                <img src={wavesImg} id='transitionImg' style={{backgroundPositionX: `${offsetY * 0.2}px`}} />
                <div id='iconContainer'>
                    <Parallax
                        tagOuter='div'
                        x={[30, -30]}
                    >
                        <img alt='' src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png' className='reactLogo' style={{transform: `rotate(${-offsetY * 0.2}deg)`}}/>
                    </Parallax>
                </div>
            </div> 
            <div id='react'>
                <Parallax
                    tagOuter='div'
                    styleInner={{position: 'absolute', width: '100%'}}
                    y={[-40, 20]}
                >
                    <h1 id='title'>React</h1>
                </Parallax>
                <div id='flex2-top-container'>
                    <div id='flex2-container'>
                        <div className='flex2'>
                            <h1 className='title'>About</h1>
                            <p>Over the past two years, my interest has started to grow more and more with React.js the more I learn about it. Right now I have completed a full React.js course on Udemy which has 48 hours of content and I know most of the <i>'ins'</i> and <i>'outs'</i> of React.js. I also learned JS6 syntax so I could better use React.js. Now I am able to make any website I could using regular Html, css, and javascript, but with even more functionality and features with the power of React.js</p>
                        </div>
                        <div className='flex2'>
                            <h1 className='title'>About</h1>
                            <p>Over the past two years, my interest has started to grow more and more with React.js the more I learn about it. Right now I have completed a full React.js course on Udemy which has 48 hours of content and I know most of the <i>'ins'</i> and <i>'outs'</i> of React.js. I also learned JS6 syntax so I could better use React.js. Now I am able to make any website I could using regular Html, css, and javascript, but with even more functionality and features with the power of React.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Web;
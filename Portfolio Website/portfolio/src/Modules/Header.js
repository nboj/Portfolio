import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './header.module.css';
import { ParallaxLayer } from '@react-spring/parallax';

const Header = () => {
    return (
        <div id={styles.header}>
            <ParallaxLayer
                offset={0}
                speed={1}
            >
                <div id={styles.typeHeaderBackground}>
                    <h1>I'm Christian Auman!</h1>
                    <div id={styles.typeHeader}> 
                        <div>18 years old, computer scientist,&nbsp;</div>
                        <Typewriter
                            options={{ 
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                deleteSpeed: 'natural',
                                strings: ["pet lover...", "game developer...", "gamer...", "varcity soccer player..."],
                                cursor: '',
                                wrapperClassName: styles.typewriter 
                            }} 
                        />  
                    </div>
                </div>
            </ParallaxLayer>
        </div>
    );
}

export default Header;
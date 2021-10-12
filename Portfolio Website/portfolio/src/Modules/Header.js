import React from 'react'; 
import styles from './header.module.css';
import { ParallaxLayer } from '@react-spring/parallax';
import Typewriter from './Typewriter';

const Header = () => {
    
    return (
        <div id={styles.header}>
            <ParallaxLayer
                offset={0}
                speed={0.3}
            >
                <div id={styles.typeHeaderBackground}>
                    <h1>I'm Christian Auman!</h1>
                    <Typewriter 
                        options={{
                            preText: '18 years old, computer scientist, ',
                            words: ["pet lover...", "game developer...", "gamer...", "varcity soccer player..."],
                            deleteRate: 60,
                            printRate: 40,
                            delay: (Math.random() * 1000 + 2000)
                        }}
                    /> 
                </div>
            </ParallaxLayer>
        </div>
    );
}

export default Header;
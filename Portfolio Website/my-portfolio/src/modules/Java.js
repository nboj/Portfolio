import React, { useEffect, useState } from 'react';
import styles from './Java.module.css'; 
import Popup from './Popup';
import $ from 'jquery';
import popupStyles from './Popup.module.css'; 

const Java = () => {
    const offset = 4400;

    const offset3 = 3600;
    const offset4 = 300; 
    const offset5 = 4000;
    const bodyOffset = 4200;
    const offset7 = 16000; 
    const [mult, setMult] = useState(0.3);
    const [offsetY, setOffsetY] = useState(window.scrollY);
    const scrollHandler = () => {
        setOffsetY(window.scrollY); 
    } 
    useEffect(() => {
        window.onscroll = () => { 
            if (window.innerWidth < 1000) { 
                setMult(0.1); 
            } else {
                setMult(0.3);
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    const [on, setOn] = useState(false);
    const handleClose = () => {
        $('#' + popupStyles.box).animate({height: '0', opacity: 0}, 200, 'swing'); 
        setTimeout(() => {
            setOn(false);
        }, 200);
    }
    return(
        <div id='java'> 
            <img id={styles.clouds} style={{transform: `translateY(${((offsetY) * -0.09) * 100 / window.innerWidth}vw)`}}/> 
            <div id={styles.javaTitleContainer}>
                <div id={styles.titleContainer} style={{transform: `translateY(${((offsetY - offset5) * 0.1) * 100 / window.innerWidth}vw)`}}>
                    <h1 className={styles.javaTitle} style={{
                        transform: `translateX(${(offsetY - offset) * 0.1 > 0 || (offsetY - offset3) < 0 ? 0 : (offsetY - offset) * 0.1}px)`, 
                        filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(1, 1, 1, 0.548))`}}>J</h1>
                    <h1 className={styles.javaTitle} style={{
                        transform: `translateY(${(offsetY - offset) * 0.1 > 0 || (offsetY - offset3) < 0  ? 0 : (offsetY - offset) * 0.1}px)`, 
                        filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(1, 1, 1, 0.548))`}}>a</h1>
                    <h1 className={styles.javaTitle} style={{
                        transform: `translateY(${(offsetY - offset) * -0.1 < 0 || (offsetY - offset3) < 0  ? 0 : (offsetY - offset) * -0.1}px)`, 
                        filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(1, 1, 1, 0.548))`}}>v</h1>
                    <h1 className={styles.javaTitle} style={{
                        transform: `translateX(${(offsetY - offset) * -0.1 < 0 || (offsetY - offset3) < 0  ? 0 : (offsetY - offset) * -0.1}px)`, 
                        filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(1, 1, 1, 0.548))`}}>a</h1>
                </div>   
            </div>
            <img src='src\images\MinecraftBackground.jpg' width='100%' height='auto' id={styles.backgroundImg}/>
            <img src='https://www.spacemacs.org/layers/+lang/java/img/java.png' className={styles.javaImg + " " + styles.one} style={{transform: `translateY(${((offsetY - offset7) * 0.1) * 100 / window.innerWidth}vw)`}} />
            <img src='https://theme.zdassets.com/theme_assets/2155033/bc270c23058d513de5124ffea6bf9199af7a2370.png' className={styles.javaImg + " " + styles.two} style={{transform: `translateY(${(-(offsetY - offset4) * 0.18) * 100 / window.innerWidth}vw)`}}/>
            <div id={styles.steveBody} style={{transform: `translateX(${(100 * (offsetY < bodyOffset ? 300 : (offsetY - bodyOffset)) / window.innerWidth) * mult + 15.625}vw) translateY(-24vw)`}}>
                <span id={styles.steveHead} style={{transform: `rotate(${Math.sin(offsetY * 0.01) * 5}deg)`}}/>
                <div id={styles.armContainer}>
                    <div id={styles.steveArm1} style={{transform: `rotate(${Math.sin(offsetY * 0.01) * 30}deg) translateX(${(-Math.sin(offsetY * 0.01) * 30) * 100 / window.innerWidth}vw)`}} >
                        <span id={styles.stevePickaxe} />
                    </div>
                </div>
                <span id={styles.steveTorso}/>
                <div id={styles.armContainer}> 
                    <span id={styles.steveArm2} style={{transform: `rotate(${-Math.sin(offsetY * 0.01) * 30}deg) translateX(${(Math.sin(offsetY * 0.01) * 30) * 100 / window.innerWidth}vw)`}}/>
                </div>
                <div id={styles.armContainer}>
                    <span id={styles.steveLeg1} style={{transform: `rotate(${Math.sin(offsetY * 0.01) * 30}deg) translateX(${(-Math.sin(offsetY * 0.01) * 30) * 100 / window.innerWidth}vw)`}}/>
                </div>
                <div id={styles.armContainer}> 
                    <span id={styles.steveLeg2} style={{transform: `rotate(${-Math.sin(offsetY * 0.01) * 30}deg) translateX(${(Math.sin(offsetY * 0.01) * 30) * 100 / window.innerWidth}vw)`}} />
                </div>
            </div> 
            <span id={styles.grass}></span>
            <div id={styles.dirt}>  
                <div id={styles.caveImg1}>  
                    <img id={styles.trophyImg} onClick={() => {
                        $('#' + popupStyles.box).animate({height: '50%', opacity: '1'}, 200, 'swing');  
                        setOn(true);
                    }}/> 
                    <Popup content={ 
                        <div> 
                            {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 614.72 206.35"> 
                                <path id={popupStyles.Layer1} d="M438.65,341.57C440,329,441,314.91,433.19,304.9c-8.59-11-25.47-12.71-38.26-7.08s-22.14,16.94-29.78,28.64c-10.85,16.63-19.42,35.61-19.28,55.47s10.63,40.56,29,48.22c3.41,1.43,7.32,2.39,10.79,1.07,2.79-1.06,4.86-3.42,6.78-5.71q15.51-18.52,29.26-38.43c9.17-13.27,18-27.89,18.29-44,0-2-.12-4.13-1.35-5.71-2.52-3.23-7.68-2.12-11.24-.09-19.28,11-24.05,36.81-22.25,58.93s8.05,44.6,2.69,66.14q8.06-32.77,18.68-64.83c1.88-5.66,5.68-12.52,11.57-11.58,2.83.45,5,2.7,6.74,5,16.61,21.89,10.61,53.26,19.74,79.18a148.06,148.06,0,0,0,67.91-73c1.23-2.89,2.44-5.92,4.78-8,2.66-2.37,6.33-3.15,9.82-3.84l96.37-19a536.79,536.79,0,0,0,3.22,85.59c1.51,12.72,3.92,26.33,13,35.38,9.29,9.26,23.36,11.51,36.46,12.31,95.17,5.76,186-40.13,263.7-95.42" transform="translate(-345.36 -294.18)"/>
                            </svg> */}

                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.93 279.33"> 
                                <line class={popupStyles.letters} id={popupStyles.c1} x1="20.02" y1="16.31" x2="20.02" y2="242.54"/>
                                <line class={popupStyles.letters} id={popupStyles.c2} x1="0.28" y1="36.2" x2="141.66" y2="36.2"/>
                                <line class={popupStyles.letters} id={popupStyles.c3} y1="252.62" x2="141.37" y2="252.62"/>
                                <line class={popupStyles.letters} id={popupStyles.a1} x1="273.94" y1="19.44" x2="194.49" y2="273.36"/>
                                <line class={popupStyles.letters} id={popupStyles.a3} x1="332.16" y1="170.31" x2="226.81" y2="170.04"/> 
                                <line class={popupStyles.letters} id={popupStyles.a2} x1="273.66" y1="6.73" x2="368.09" y2="270.8"/>
                            </svg>
                        </div>
                    } display={on ? 'block' : 'none'} handleClose={handleClose}/>
                </div> 
            </div>
        </div>
    );
}

export default Java;
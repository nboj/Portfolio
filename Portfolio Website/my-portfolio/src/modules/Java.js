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
                            Hello there!
                        </div>
                    } display={on ? 'block' : 'none'} handleClose={handleClose}/>
                </div> 
            </div>
        </div>
    );
}

export default Java;
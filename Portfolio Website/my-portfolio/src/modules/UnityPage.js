import React, { useEffect, useState } from 'react';
import styles from './UnityPage.module.css';  
import $ from 'jquery';
import ArrowButton from './arrowButton'; 
import { Link } from 'react-router-dom';

const UnityPage = (props) => { 
    const [offsetY, setOffsetY] = useState(window.pageYOffset);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset); 
    } 
    useEffect(() => {
        $(window).scrollTop(0); 
        $('html').css({background: '#212529'});
        window.addEventListener('scroll', handleScroll); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 
    return(
        <div id={styles.page}> 
            <Link to='' id={styles.back}><ArrowButton symbol='◀ Home'/></Link> 
             <div id={styles.leftSide}>  
                <div className={styles.titleBackground} >  
                    <h1 className={styles.title} style={{
                        transform: `skewY(${Math.pow(Math.pow(offsetY, 4), .1) / 4}deg) translateY(${-offsetY * 0.6}px)`,
                        opacity: `${-Math.pow(Math.pow(offsetY, 4), .2) / 4 * 0.05 + 1 <= 0 ? 0 : -Math.pow(Math.pow(offsetY, 4), .2) / 4 * 0.05 + 1}`,
                    }}>{props.title}</h1>  
                </div>
                <img src={props.src} style={{transform: `translateY(${offsetY * 0.6}px)`}}/>
            </div> 
            <div id={styles.descriptionBackground}>  
                <h1 id={styles.descriptionTitle}>About</h1> 
                <p className={styles.description}>{props.description}</p>
            </div> 
        </div>
    );
}

export default UnityPage;
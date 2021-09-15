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
                    <h1 className={styles.title} style={{transform: `skewY(${offsetY * 0.01}deg)`, opacity: `${Math.cos(offsetY * 0.005)}`}}>{props.title}</h1>  
                </div>
                <img src={props.src} style={{transform: `translateY(${offsetY * 0.6}px)`}}></img>
            </div> 
            <div id={styles.descriptionBackground}> 
                <h1 id={styles.descriptionTitle}>About</h1>
                <p className={styles.description}>{props.description}</p>
            </div> 
        </div>
    );
}

export default UnityPage;
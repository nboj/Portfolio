import React, { useEffect } from 'react';
import styles from './UnityPage.module.css';  
import $ from 'jquery';
 
const UnityPage = (props) => {
    useEffect(() => {
        $(window).scrollTop(0);
        $('html').css({background: '#212529'});
    }, []);
    return(
        <div id={styles.page}>
            <div id={styles.leftSide}>  
                <div className={styles.titleBackground}> 
                    <h1 className={styles.title}>{props.title}</h1>  
                </div>
                <img src={props.src}></img>
            </div>
            <div>
                <p className={styles.description}>{props.description}</p>
            </div> 
        </div>
    );
}

export default UnityPage;
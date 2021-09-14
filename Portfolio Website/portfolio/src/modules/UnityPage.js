import React, { useEffect } from 'react';
import styles from './UnityPage.module.css';  
import $ from 'jquery';
import ArrowButton from './arrowButton'; 
import { useHistory, Link } from 'react-router-dom';

const UnityPage = (props) => {
    const history = useHistory();
    useEffect(() => {
        $(window).scrollTop(0);
        $('html').css({background: '#212529'});
    }, []);
    return(
        <div id={styles.page}> 
            <Link to='' id={styles.back}><ArrowButton symbol='◀ Home'/></Link> 
             <div id={styles.leftSide}>  
                <div className={styles.titleBackground}> 
                    <h1 className={styles.title}>{props.title}</h1>  
                </div>
                <img src={props.src}></img>
            </div>
            <div id={styles.descriptionBackground}>
                <h2 id={styles.descriptionTitle}>Description:</h2>
                <p className={styles.description}>{props.description}</p>
            </div> 
        </div>
    );
}

export default UnityPage;
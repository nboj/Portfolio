import React from 'react';
import styles from './UnityPage.module.css'; 

const UnityPage = (props) => {
    return(
        <div id={styles.page}>
            <div id={styles.leftSide}>  
                <div className={styles.titleBackground}> 
                    <h1 className={styles.title}>{props.title}</h1> 
                </div>
                <img src={props.src}></img>
            </div>
            <div>
                <p className={styles.description}>Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.</p>
            </div> 
        </div>
    );
}

export default UnityPage;
import React from 'react';
import styles from './UnityPage.module.css';
<link rel="stylesheet" href="https://use.typekit.net/jvp8uqu.css"></link>

const UnityPage = (props) => {
    return(
        <div id={styles.page}>
            <div className={styles.head}>
                <div className={styles.titleBackground}>
                    <h1 className={styles.title}>{props.title}</h1>
                </div>
            </div>
            <div>
                <p className={styles.description}>Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.</p>
            </div> 
        </div>
    );
}

export default UnityPage;
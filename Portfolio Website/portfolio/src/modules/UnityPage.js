import React from 'react';
import styles from './UnityPage.module.css';

const UnityPage = (props) => {
    return(
        <div>
            <h1 className={styles.title}>{props.title}</h1>
        </div>
    );
}

export default UnityPage;
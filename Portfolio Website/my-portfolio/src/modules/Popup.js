import React, { useEffect } from 'react';
import styles from './Popup.module.css'; 

const Popup = (props) => { 
    return(
        <div style={{display: props.display}} className={styles.popupBox}>
            <div className={styles.box + ' ' + props.className}> 
                <div className={styles.close} onClick={props.handleClose}>
                    <span className={styles.line1}>|</span>
                    <span className={styles.line2}>|</span>
                </div>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;
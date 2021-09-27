import React from 'react';
import styles from './Popup.module.css';

const Popup = (props) => {
    return(
        <div style={{display: props.display}} id={styles.popupBox}>
            <div id={styles.box}> 
                <span id={styles.close} onClick={props.handleClose}>X</span>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;
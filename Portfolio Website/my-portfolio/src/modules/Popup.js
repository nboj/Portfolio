import React, { useEffect } from 'react';
import styles from './Popup.module.css';
import $ from 'jquery';

const Popup = (props) => {
    useEffect(() => {
        $('#body').click(()=> {console.log('clicked')});
    }, [])
    return(
        <div style={{display: props.display}} id={styles.popupBox}>
            <div id={styles.box}> 
                <div id={styles.close} onClick={props.handleClose}>
                    <span id={styles.line1}>|</span>
                    <span id={styles.line2}>|</span>
                </div>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;
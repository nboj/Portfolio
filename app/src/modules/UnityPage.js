import React, { useEffect } from 'react';
import styles from './UnityPage.module.css';
import $ from 'jquery';
import ArrowButton from './arrowButton';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const UnityPage = (props) => {
    useEffect(() => {
        $('html').css({ background: '#212529' });
    }, []);
    return (
        <div id={styles.page}>
            <Link to='' id={styles.back}><ArrowButton symbol='◀ Home' /></Link>
            <div id={styles.leftSide}>
                <div className={styles.titleBackground} >
                    <h1 className={styles.title}>{props.title}</h1>
                    <div style={{ backgroundImage: `url(${props.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
            </div>
        </div>
    )
}

export default UnityPage;

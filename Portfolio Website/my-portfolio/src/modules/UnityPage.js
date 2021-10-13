import React, { useEffect } from 'react';
import styles from './UnityPage.module.css';
import $ from 'jquery';
import ArrowButton from './arrowButton'; 
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { config } from '@react-spring/web';

const UnityPage = (props) => {
    useEffect(() => {
        $('html').css({background: '#212529'});
    }, []);
    return(
        <div id={styles.page}>
                    <Link to='' id={styles.back}><ArrowButton symbol='◀ Home'/></Link>
        <Parallax
            pages={2}
        >
                 <div id={styles.leftSide}>
                    <div className={styles.titleBackground} >
                    <ParallaxLayer offset={0} speed={0.4} style={{zIndex: 10}}>
                        <h1 className={styles.title}>{props.title}</h1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-0.1} config={config.molasses}>
                        <div style={{ backgroundImage: `url(${props.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
                    </ParallaxLayer>
                    </div>
                </div>
                <ParallaxLayer offset={1}>
                    <div id={styles.descriptionBackground}>
                        <h1 id={styles.descriptionTitle}>About</h1>
                        <p className={styles.description}>{props.description}</p>
                    </div>
                </ParallaxLayer>
        </Parallax>
        </div>
    );
}

export default UnityPage;
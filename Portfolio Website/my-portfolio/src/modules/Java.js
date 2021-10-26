import React, {useEffect, useState} from 'react';
import styles from './Java.module.css';
import Popup from './Popup';
import $ from 'jquery';
import popupStyles from './Popup.module.css';
import {Parallax, useController} from 'react-scroll-parallax';

let height = 50;
let hidden = true;

window.addEventListener('resize', () => {
    const windowWidth = window.outerWidth;
    if (windowWidth <= 652) {
        height = 50;
    } else if (windowWidth <= 780 && windowWidth >= 653) {
        height = 30;
    } else if (windowWidth <= 920 && windowWidth >= 781) {
        height = 40;
    } else {
        height = 50;
    }
    if (!hidden) {
        $('.' + popupStyles.box).css({height: height + '%'});
    }
});

const Java = (props) => {
    const {parallaxController} = useController();
    parallaxController.update();
    const [mult, setMult] = useState(30);
    const [offsetY, setOffsetY] = useState(window.scrollY);
    const scrollHandler = () => {
        setOffsetY(window.scrollY);
        if (window.innerWidth < 400) {
            setMult(10);
        } else if (window.innerWidth < 840) {
            setMult(20);
        } else {
            setMult(30);
        }
    }
    useEffect(() => {
        const windowWidth = window.outerWidth;
        if (windowWidth <= 652) {
            height = 50;
        } else if (windowWidth <= 780 && windowWidth >= 653) {
            height = 30;
        } else if (windowWidth <= 920 && windowWidth >= 781) {
            height = 40;
        } else {
            height = 50;
        }
        if (!hidden) {
            $('.' + popupStyles.box).css({height: height + '%'});
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    const [trophyOn, setTrophyOn] = useState(false);
    const [plaque1On, setPlaque1On] = useState(false);

    const handleClose = () => {
        $('.' + popupStyles.box).animate({height: '0', opacity: 0, overflow: 'hidden'}, 200, 'swing');
        $('.' + styles.popupDescriptionContainer).css('overflow', 'hidden');
        $('body').css('overflow', 'overlay');
        hidden = true;
    };

    const handleTrophyClose = () => {
        handleClose();
        setTimeout(() => {
            setTrophyOn(false);
            props.setNav(true);
        }, 200);
    };

    const handlePlaque1Close = () => {
        handleClose();
        setTimeout(() => {
            setPlaque1On(false);
            props.setNav(true);
        }, 200);
    };

    const handleClick = () => {
        $('.' + popupStyles.box).animate({height: height + '%', opacity: '1'}, 200, 'swing', () => {
            $('.' + styles.popupDescriptionContainer).css('overflow', 'auto')
        });
        $('body').css('overflow', 'hidden');
        props.setNav(false);
        hidden = false;
    };
    return (
        <div id='java'>
            <Parallax
                tagOuter='div'
                y={[-350, -300]}
                styleInner={{position: 'absolute', zIndex: '2', width: '100px', height: '100px'}}
            >
                <img alt='' id={styles.clouds} style={{position: 'absolute'}}/>
                {/*style={{transform: `translateY(${((offsetY) * -0.09) * 100 / window.innerWidth}vw)`}}*/}
            </Parallax>
            {/* <div id={styles.javaTitleContainer}> */}
            <Parallax
                tagOuter='div'
                y={['0', '50']}
                styleInner={{zIndex: '1', position: 'absolute'}}
            >
                <div id={styles.titleContainer}>
                    {/* transform: `translateX(${(offsetY - offset) * 0.1 > 0 || (offsetY - offset3) < 0 ? 0 : (offsetY - offset) * 0.1}px)`, 
                                filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(1, 1, 1, 0.548))`}}>J</h1> */}
                    <h1 className={styles.javaTitle}>J</h1>
                    <h1 className={styles.javaTitle}>a</h1>
                    <h1 className={styles.javaTitle}>v</h1>
                    <h1 className={styles.javaTitle}>a</h1>
                </div>
                {/* </div> */}
            </Parallax>
            <img alt='' src='src\images\MinecraftBackground.jpg' width='100%' height='auto' id={styles.backgroundImg}/>
            {/* <img alt''> src='https://www.spacemacs.org/layers/+lang/java/img/java.png' className={styles.javaImg + " " + styles.one} style={{transform: `translateY(${((offsetY - offset7) * 0.1) * 100 / window.innerWidth}vw)`}} /> */}
            <Parallax
                tagOuter='div'
                y={[-50, -10]}
                styleInner={{position: 'absolute'}}
                styleOuter={{transform: 'translateY(-46.875vw)'}}>
                <img alt=''
                     src='https://theme.zdassets.com/theme_assets/2155033/bc270c23058d513de5124ffea6bf9199af7a2370.png'
                     className={styles.javaImg + " " + styles.two}/>
            </Parallax>
            <Parallax
                tagOuter='div'
                y={[0, -70]}
                styleInner={{position: 'absolute', right: '2.6041vw'}}
                styleOuter={{transform: 'translateY(-39.0625vw)'}}>
                <img alt='' src='https://www.spacemacs.org/layers/+lang/java/img/java.png'
                     className={styles.javaImg + " " + styles.one}/>
            </Parallax>
            <Parallax
                className={styles.steve}
                x={[200, 500]}
            >
                {/* style={{transform: `translateX(${(100 * (offsetY < bodyOffset ? 300 : (offsetY - bodyOffset)) / window.innerWidth) * mult + 15.625}vw) translateY(-24vw)`}} */}
                <div id={styles.steveBody}>
                    <span id={styles.steveHead} style={{transform: `rotate(${Math.sin(offsetY * 0.01) * 5}deg)`}}/>
                    <div id={styles.armContainer}>
                        <div id={styles.steveArm1}
                             style={{transform: `rotate(${Math.sin(offsetY * 0.01) * mult}deg) translateX(${(-Math.sin(offsetY * 0.01) * mult) * 100 / window.innerWidth}vw)`}}>
                            <span id={styles.stevePickaxe}/>
                        </div>
                    </div>
                    <span id={styles.steveTorso}/>
                    <div id={styles.armContainer}>
                        <span id={styles.steveArm2}
                              style={{transform: `rotate(${-Math.sin(offsetY * 0.01) * mult}deg) translateX(${(Math.sin(offsetY * 0.01) * mult) * 100 / window.innerWidth}vw)`}}/>
                    </div>
                    <div id={styles.armContainer}>
                        <span id={styles.steveLeg1}
                              style={{transform: `rotate(${Math.sin(offsetY * 0.01) * mult}deg) translateX(${(-Math.sin(offsetY * 0.01) * mult) * 100 / window.innerWidth}vw)`}}/>
                    </div>
                    <div id={styles.armContainer}>
                        <span id={styles.steveLeg2}
                              style={{transform: `rotate(${-Math.sin(offsetY * 0.01) * mult}deg) translateX(${(Math.sin(offsetY * 0.01) * mult) * 100 / window.innerWidth}vw)`}}/>
                    </div>
                </div>
            </Parallax>
            <span id={styles.grass}></span>
            <div id={styles.dirt}>
                <div id={styles.caveImg1}>
                    <img alt='' id={styles.plaque1} onClick={() => {
                        handleClick();
                        setPlaque1On(true);
                    }}/>
                    <img alt='' id={styles.trophyImg} onClick={() => {
                        handleClick();
                        setTrophyOn(true);
                    }}/>
                    <Popup className={styles.popup} content={
                        <div className={styles.popupContainer}>
                            <div className={styles.popupDescriptionContainer}>
                                <h1>Winning Regionals</h1>
                                <p className={styles.popupDescription}>
                                    This is the plaque that I won from competing in a competition for java.
                                    This award is from regionals where everyone in the class took part in.
                                    I ended up winning first place and moving on to states which I talk about with the
                                    trophy.
                                </p>
                            </div>
                            <div className={styles.popupImg + ' popupImg'} id={styles.plaque1PopupImg}/>
                        </div>
                    } display={plaque1On ? 'block' : 'none'} handleClose={handlePlaque1Close}/>
                    <Popup className={styles.popup} content={
                        <div className={styles.popupContainer}>
                            <div className={styles.popupDescriptionContainer}>
                                <h1>Winning States</h1>
                                <p className={styles.popupDescription}>
                                    About one year ago, I became a junior at the Nordonia high school.
                                    This means that I was able to join CVCC (Cuyahoga Valley Career Center).
                                    I signed up for the PSD (Programming and Software Development) class which
                                    was the best choice that I could have made. During the year, I took part in
                                    a competition for Java. I won regionals which is shown with the plaque.
                                    After, I then moved on to the next level which was states.
                                    After a lot of preparation, I competed, won first place, and was in the qualifying
                                    round for nationals! I didn't place in nationals but overall, it was an
                                    experience to remember and I learned a lot from doing it.
                                </p>
                            </div>
                            <div className={styles.popupImg} id={styles.trophyPopupImg}/>
                        </div>
                    } display={trophyOn ? 'block' : 'none'} handleClose={handleTrophyClose}/>
                </div>
            </div>
        </div>
    );
}

export default Java;
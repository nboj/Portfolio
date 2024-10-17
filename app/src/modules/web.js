import React from 'react';
import { useState } from 'react';
import './web.scss';
import { useEffect } from 'react';
import { Parallax } from "react-scroll-parallax";
import wavesImg from '../images/BlueSplash2.png'
import styles from './Java.module.css';

const Web = () => {

    const [offsetY, setOffsetY] = useState(window.pageYOffset);
    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div id='web'>
                <div id='outer-flex'>
                    <h1 id='title'>Web Development</h1>
                    <div id='flex'>
                        <div style={{
                            transform: `translateX(${(offsetY * 0.09 - 170) >= 0 || (offsetY - 1504) < 0 ? 0 : (offsetY * 0.09 - 170)}px)`,
                            opacity: `${offsetY * 0.0048 - 8}`
                        }}>
                            <h1 className='title'>Html</h1>
                            <span className='underline' />
                            <p>Since 2019, I have been developing websites and improving my web development skills. 2020-2022 I took a web-development course at a career center, and now I am studying to complete my Bachelor's degree in Computer Science.</p>
                        </div>
                        <div style={{
                            transform: `translateY(${(offsetY * 0.09 - 170) >= 0 || (offsetY - 1504) < 0 ? 0 : (offsetY * 0.09 - 170)}px)`,
                            opacity: `${offsetY * 0.0048 - 8}`
                        }}>
                            <h1 className='title'>Css</h1>
                            <span className='underline' />
                            <p>Along with the in-person classes, I have taken several online courses for html, css and javascript. For CSS I have taken
                                some extra steps by learning SVG animations as well as some advanced css techniques for
                                animations.</p>
                        </div>
                        <div style={{
                            transform: `translateX(${-(offsetY * 0.09 - 170) <= 0 || (offsetY - 1504) < 0 ? 0 : -(offsetY * 0.09 - 170)}px)`,
                            opacity: `${offsetY * 0.0048 - 8}`
                        }}>
                            <h1 className='title'>Javascript</h1>
                            <span className='underline' />
                            <p>Overall, I have spent way more time in Javascript. After learning the fundamentals, I started learning React. I fell in love and eventually found Nextjs. I have been improving my fullstack skills with Nextjs and AWS ever since.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='transitionImg-container'>
                <img src={wavesImg} id='transitionImg' style={{ backgroundPositionX: `${offsetY * 0.2}px` }} alt='' />
            </div>
            <div id='iconContainer'>
                <Parallax
                    tagOuter='div'
                    x={[100, -100]}
                >
                    <img alt=''
                        src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png'
                        className='reactLogo' style={{ transform: `rotate(${-offsetY * 0.2}deg)` }} />
                </Parallax>
            </div>
            <div id='react'>
                <Parallax
                    tagOuter='div'
                    styleInner={{ position: 'absolute', width: '100%' }}
                    y={[-60, 0]}
                >
                    <h1 id='title'>React</h1>
                </Parallax>
                <div id='flex2-top-container'>
                    <div id='flex2-container'>
                        <div className='flex2'>
                            <h1 className='title'>Early Years</h1>
                            <p>Since 2020, I've not only been a web developer but also an ardent creator, pouring my heart into every line of code and design. Each website I've built is a testament to my love for the craft. From wireframing to color theory, every element serves a purpose and tells a part of the tale.</p>
                            <p> My journey into back-end development isn't just about understanding server functions or databases; it's about discovering how the magic happens behind the curtain. As I ventured deeper, I stumbled upon the titans of front-end: React, Angular, and Vue. React, in particular, resonated deeply with me, sparking an insatiable curiosity and desire to create.</p>
                        </div>
                        <div className='flex2'>
                            <h1 className='title'>React</h1>
                            <p>In 2021, during a class project, I saw an opportunity to not just complete an assignment but to create something mesmerizing. With my newfound knowledge of React, I built a portfolio that left everyone in awe. The dynamism, the captivating effects - they weren't just to impress; they were expressions of my passion. Using "useEffect" to create typewriter animations or scroll-based movements was a thrilling exploration of what was possible with React, and I was just scratching the surface.</p>
                        </div>
                        <div className='flex2'>
                            <h1 className='title'>NextJS</h1>
                            <p>Then came Next.js, a revelation in my web development journey. My initial fascination quickly evolved into a profound passion. This wasn't just another tool—it was a game-changer. Every feature, from its integrated approach to back and front end development to the innovative server-side components in NextJS 13, became a new playground for me to explore. The boundless creative and technical possibilities it presented fueled my passion even more, compelling me to craft richer, more seamless user experiences.</p>
                        </div>
                        <div className='flex2'>
                            <h1 className='title'>AWS</h1>
                            <p>Finally comes Amazon Web Services. From relational databases to S3 buckets, I have learned a lot about AWS. While I have only scratched the surface of what they have to offer, I am happy to have a solid foundation to build upon.</p>
                        </div>
                    </div>
                </div>
                <img alt='' id={styles.clouds} style={{ position: 'absolute' }} />
            </div>
        </div>
    );
};

export default Web;

import React, { useEffect, useState } from 'react';
import styles from './Java.module.css'

const Java = () => {
    const [offsetY, setOffsetY] = useState(window.scrollY);
    const scrollHandler = () => {
        setOffsetY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    return(
        <div id='java' className={styles.java}>
            <div id={styles.titleContainer}>
                <h1 className={styles.javaTitle} style={{
                    transform: `translateX(${(offsetY - 4400) * 0.1 > 0 ? 0 : (offsetY - 4400) * 0.1}px)`, 
                    filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(180, 129, 20, 0.8))`}}>J</h1>
                <h1 className={styles.javaTitle} style={{
                    transform: `translateY(${(offsetY - 4400) * 0.1 > 0 ? 0 : (offsetY - 4400) * 0.1}px)`, 
                    filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(180, 129, 20, 0.8))`}}>a</h1>
                <h1 className={styles.javaTitle} style={{
                    transform: `translateY(${(offsetY - 4400) * -0.1 < 0 ? 0 : (offsetY - 4400) * -0.1}px)`, 
                    filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(180, 129, 20, 0.8))`}}>v</h1>
                <h1 className={styles.javaTitle} style={{
                    transform: `translateX(${(offsetY - 4400) * -0.1 < 0 ? 0 : (offsetY - 4400) * -0.1}px)`, 
                    filter: `drop-shadow(${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px ${(offsetY - 4100) * 0.02 < 0 ? 0 : (offsetY - 4100) * 0.02 > 10 ? 10 : (offsetY - 4100) * 0.02}px 5px rgba(180, 129, 20, 0.8))`}}>a</h1>
            </div>
            <section>
                <p>Im struggling to figure out what to put here...</p>
                <p>Im struggling to figure out what to put here...</p>
                <p>Im struggling to figure out what to put here...</p>
                <p>Im struggling to figure out what to put here...</p>
                <p>Im struggling to figure out what to put here...</p>
                <p>Im struggling to figure out what to put here...</p>
                <p>Im struggling to figure out what to put here...</p>
            </section>
        </div>
    );
}

export default Java;
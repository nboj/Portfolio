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
        <div id='java'>
            <h1 id={styles.javaTitle}>Java</h1>
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
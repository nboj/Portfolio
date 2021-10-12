import React from 'react';
import styles from './navbar.module.css';

const NavBar = (props) => {
    return (
        <nav> 
            <ul id={styles.navbar}>
                { props.options.items.map((item, index) => {
                    return (<li key={item + index}>{item}</li>)
                }) }
            </ul>
        </nav>
    );
}

export default NavBar;
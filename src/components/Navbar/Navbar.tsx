import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={styles.navbar__wrapper}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <a href="src/components/Navbar/Navbar#3">News</a>
            </div>
            <div className={styles.item}>
                <a href="src/components/Navbar/Navbar#4">Music</a>
            </div>
            <div className={styles.item}>
                <a href="src/components/Navbar/Navbar#5">Settings</a>
            </div>
        </nav>
    );
};


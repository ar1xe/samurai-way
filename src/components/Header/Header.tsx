import React from 'react';
import styles from './Header.module.css'


export const Header = () => {
    return (
        <header className={styles.header__wrapper}>
            <img className={styles.header__wrapper_logo}
                src="https://svn.apache.org/repos/asf/openoffice/ooo-site/trunk/content/images/aoo-logo-100x100.png"
                alt="logo"/>
        </header>
    );
};


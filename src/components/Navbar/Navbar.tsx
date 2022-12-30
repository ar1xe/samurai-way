import React, {FC} from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SideBarContentPropsType} from "../../App";

type NavbarPropsType = {
    stateNavbar: SideBarContentPropsType
}

export const Navbar: FC<NavbarPropsType> = ({stateNavbar}) => {

    const navBarMapped = stateNavbar.navigate.map((nav) => {
        return (
            <div key={nav.id} className={styles.item}>
                <NavLink to={nav.path} activeClassName={styles.active}>{nav.title}</NavLink>
            </div>
        )
    })

    const friendsListMapped = stateNavbar.friendsList.map((friend) => {
        return (
            <div key={friend.id} className={styles.friends}>
                <span className={styles.name}>{friend.name}</span>
                <img className={styles.img} src={friend.img} alt={"asd"}/>
            </div>
        )
    })


    return (
        <nav className={styles.navbar__wrapper}>
            {navBarMapped}
            <div className={styles.friends_container}>
                {friendsListMapped}
            </div>
        </nav>
    );
};


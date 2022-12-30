import React from 'react';
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id?: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

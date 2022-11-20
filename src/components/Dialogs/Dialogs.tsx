import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem name="Sasha" id="1"/>
                <DialogItem name="Dima" id="2"/>
                <DialogItem name="Ira" id="3"/>
                <DialogItem name="Roma" id="4"/>
                <DialogItem name="Kristina" id="5"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="What are you doing?" />
                <Message message="What time is it?" />
                <Message message="Where are you from?" />
            </div>
        </div>
    );
};


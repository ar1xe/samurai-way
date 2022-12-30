import React, { FC, MutableRefObject, useRef } from "react";
import styles from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { MessagesAndDialogsContentPropsType } from "../../App";

type DialogsComponentPropsType = {
  stateDialogs: MessagesAndDialogsContentPropsType;
};

export const Dialogs: FC<DialogsComponentPropsType> = ({ stateDialogs }) => {
  const dialogsMapped = stateDialogs.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesMapped = stateDialogs.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const newMessageRef = useRef<HTMLTextAreaElement>(
    null
  ) as MutableRefObject<HTMLTextAreaElement>;

  const addMessage = () => {
    const newMessage = newMessageRef.current.value;
    alert(newMessage);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsMapped}</div>
      <div className={styles.messages}>{messagesMapped}</div>
      <textarea ref={newMessageRef}>...</textarea>
      <button onClick={addMessage}>+</button>
    </div>
  );
};

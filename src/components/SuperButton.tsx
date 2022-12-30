import React, {FC} from 'react';
import s from "./SuperButton.module.css"

type PropsType = {
    callback: () => void
    color?: string
    children?: React.ReactNode
    sizeButton?: string
    disabled?: boolean
}

export const SuperButton: FC<PropsType> = ({
                                               callback,
                                               color,
                                               children,
                                               disabled,
                                               ...props
                                           }) => {

    // const finalClassName = `${s.button} ${s.default}`
    // const finalClassName = `${s.button} ${color === "red" ? s.red : s.default} ${s.default}`
    // const finalClassName = `${s.button} ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default} ${s.default}`
    const finalClassName = `${s.button} ${disabled ? s.disabled : ""} ${s.default}`



        // + (disabled
        //     ? ' ' + s.disabled
        //     : color === 'red'
        //         ? ' ' + s.red
        //         : color === 'secondary'
        //             ? ' ' + s.secondary
        //             : ' ' + s.default)
        // + (className ? ' ' + className : '')


    const callbackHandler = () => {
        callback()
    }

    return (
        <button className={finalClassName} onClick={callbackHandler}>{children}</button>
    );
};


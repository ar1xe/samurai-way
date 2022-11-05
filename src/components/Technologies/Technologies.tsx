import React, {FC, useState} from 'react';
import PictureTech from "../../assets/images/PictureTech";


const Technologies: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const changeVisible = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <span>Hello, samurai! Let's go!</span>
            <button type="button" onClick={changeVisible}>Click me)</button>
            {visible && <PictureTech/>}
            <h4>privet!</h4>
        </div>
    );
};

export default Technologies;
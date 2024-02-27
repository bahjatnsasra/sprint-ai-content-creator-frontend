import { useState } from 'react';
import styels from './extendedData.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ExtendedData = (props) => {

    const [open, setOpen] = useState(false)

    return <div className={styels.container} onClick={() => setOpen(!open)}>
            <div className={styels.title_day}>
                {open ? <IoIosArrowUp className={styels.arrow_icon}/> : <IoIosArrowDown className={styels.arrow_icon}/>}
                <label>{props.day}</label>
            </div>

            {open ? 
                <div className={styels.data_container}>
                    {props.title && <h2>{props.title}</h2>}
                    {props.text}
                </div>
            : null}
        </div>
}

export default ExtendedData
import React, { useEffect } from 'react';
import styels from './underButtons.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UnderButtons = (props) => {

    const navigate = useNavigate();

    return <div className={styels.container}>

            <button onClick={() => navigate(props.forward)} className={styels.move_btn}>
                <IoIosArrowBack></IoIosArrowBack>
                <label>הבא</label>
            </button>

            <button onClick={() => navigate(props.back)} className={styels.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
            
        </div>
}

export default UnderButtons
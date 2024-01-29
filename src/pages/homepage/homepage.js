import styels from './homepage.module.css'
import Navbar from '../../components/navbar/navbar'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate();
    
    return <React.Fragment>
        <Navbar></Navbar>
        <div className={styels.container}>
                <img src="/homepage_text.svg" alt="image" />
                <button onClick={() => navigate("/chooseSubject")} className={styels.btn}>התחילו</button>

                <img  className={styels.img} src="/image.svg" alt="image" />
        </div>
    </React.Fragment>
}

export default Homepage
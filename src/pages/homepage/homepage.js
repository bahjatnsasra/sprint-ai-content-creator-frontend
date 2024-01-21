import styels from './homepage.module.css'
import Navbar from '../../components/navbar/navbar'
import React from 'react'

const homepage = () => {
    return <React.Fragment>
        <Navbar></Navbar>
        <div className={styels.container}>
                <img src="/homepage_text.svg" alt="image" />
                <button className={styels.btn}>התחילו</button>

                <img  className={styels.img} src="/image.svg" alt="image" />
        </div>
    </React.Fragment>
}

export default homepage
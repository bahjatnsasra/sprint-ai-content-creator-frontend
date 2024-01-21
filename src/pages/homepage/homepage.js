import React, { useEffect, useRef, useState } from 'react';
import styels from './homepage.module.css'

const homepage = () => {
    return <div className={styels.container}>
        <button className={styels.btn}>התחלה</button>
    </div>
}

export default homepage
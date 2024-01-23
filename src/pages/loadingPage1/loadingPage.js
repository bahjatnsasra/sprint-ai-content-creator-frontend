import React, { useEffect, useState } from 'react';
import styles from './loadingPage.module.css';
import Navbar from '../../components/navbar/navbar';

const LoadingPage = () => {

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/process2.svg" alt="image" />
            
                <div className={styles.box_container}>
                    <img className={styles.loading_gif} src="//2279b9660181ae6c1d8dcced2d7bfdc6.cdn.bubble.io/f1703410484586x240606988286996770/output-onlinegiftools.gif" alt="loading gif" />
                    <label>אנחנו מכינים לכם מתווה למסלול</label>
                    <img className={styles.tiny_img} src="/tiny_image.svg" alt="image" />
                </div>
            
            </div>
        </React.Fragment>
    );
};

export default LoadingPage;

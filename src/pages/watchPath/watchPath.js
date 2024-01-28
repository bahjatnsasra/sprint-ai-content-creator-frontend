import React, { useState } from 'react';
import styles from './watchPath.module.css';
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const WatchPath = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const openGoogleDoc = () => {
        setLoading(true);
    };

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/proccesEnd.svg" alt="image" />

        <div className={styles.container}>
            <h2>צפו במסלול המפורט</h2>

            <div className={styles.days_container}>

            </div>
        </div>

        <div className={styles.underBtn_container}>
            <button className={styles.move_btn} onClick={openGoogleDoc}>
                {!loading ? 
                    <label> יצוא ל - Google Doc</label>
                    :
                    <>
                         יצוא ל - Google Doc <AiOutlineLoading3Quarters className={styles.loading}/>
                    </>
                }
            </button>

            <button onClick={() => navigate('./')} className={styles.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
        </div>

        </div>
};

export default WatchPath;

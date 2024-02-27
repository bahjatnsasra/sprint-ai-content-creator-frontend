import React, { useState } from 'react';
import styles from './watchPath.module.css';
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ExtendedData from '../../components/extendedData/extendedData';

const WatchPath = (props) => {

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
                <ExtendedData
                    title={props.daysList[1].title}
                    text={props.daysList[1].data}
                    day='יום ראשון'
                ></ExtendedData>
                <ExtendedData
                    title={props.daysList[2].title}
                    text={props.daysList[2].data}
                    day='יום שני'
                ></ExtendedData>
                <ExtendedData
                    title={props.daysList[3].title}
                    text={props.daysList[3].data}
                    day='יום שלישי'
                ></ExtendedData>
                <ExtendedData
                    title={props.daysList[4].title}
                    text={props.daysList[4].data}
                    day='יום רביעי'
                ></ExtendedData>
                <ExtendedData
                    title={props.daysList[5].title}
                    text={props.daysList[5].data}
                    day='יום חמישי'
                ></ExtendedData>
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

            <button onClick={() => navigate('/')} className={styles.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
        </div>

    </div>
};

export default WatchPath;

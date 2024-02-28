import React, { useEffect, useState } from 'react';
import styles from './watchPath.module.css';
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ExtendedData from '../../components/extendedData/extendedData';

const WatchPath = (props) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dayList, setDayList] = useState(null)

    const openGoogleDoc = () => {
        setLoading(true);
    };

    useEffect(() => {
        setDayList(props.daysList)
        console.log(props.daysList)
    }, [])

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/proccesEnd.svg" alt="image" />

        <div className={styles.container}>
            <h2>צפו במסלול המפורט</h2>

            {dayList &&
            <div className={styles.days_container}>
                <ExtendedData
                    title={dayList[0].title}
                    text={dayList[0].tasks}
                    day='יום ראשון'
                ></ExtendedData>
                <ExtendedData
                    title={dayList[1].title}
                    text={dayList[1].tasks}
                    day='יום שני'
                ></ExtendedData>
                <ExtendedData
                    title={dayList[2].title}
                    text={dayList[2].tasks}
                    day='יום שלישי'
                ></ExtendedData>
                <ExtendedData
                    title={dayList[3].title}
                    text={dayList[3].tasks}
                    day='יום רביעי'
                ></ExtendedData>
                <ExtendedData
                    title={dayList[4].title}
                    text={dayList[4].tasks}
                    day='יום חמישי'
                ></ExtendedData>
            </div>}
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

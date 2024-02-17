import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { useEffect, useState } from 'react';
import { generateDay4 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const Day4 = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const day4Data = await generateDay4(props.programPlan.structure)
            setData(day4Data)
        }
        getData()
    },[])

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day4.svg" alt="image" />
        
        {data ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום הרביעי</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום הרביעי</label>
                </div>

                <PathData data = {data}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום הרביעי ...'></LoadingPopUp>}

        {data &&
            <div className={styles.underBtn}>
                    <UnderButtons text='ליצירת היום החמישי' back='/day3' forward='/day5'/>
            </div>}

    </div>
};

export default Day4;

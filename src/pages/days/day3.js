import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { useEffect, useState } from 'react';
import { generateDay3 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const Day3 = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const day3Data = await generateDay3(props.programPlan.structure)
            setData(day3Data)
        }
        getData()
    },[])

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day3.svg" alt="image" />
        
        {data ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום השלישי</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום השלישי</label>
                </div>

                <PathData data = {data}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום השלישי ...'></LoadingPopUp>}

        {data &&
            <div className={styles.underBtn}>
                    <UnderButtons text='ליצירת היום הרביעי' back='/day2' forward='/day4'/>
            </div>}

    </div>
};

export default Day3;

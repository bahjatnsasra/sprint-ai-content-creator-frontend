import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { useEffect, useState } from 'react';
import { generateDay2 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const Day2= (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const day2Data = await generateDay2(props.programPlan.structure)
            setData(day2Data)
        }
        getData()
    },[])

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day2.svg" alt="image" />
        
        {data ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום השני</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום השני</label>
                </div>

                <PathData data = {data}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום השני ...'></LoadingPopUp>}

        {data &&
            <div className={styles.underBtn}>
                    <UnderButtons text='ליצירת היום השלישי' back='/day1' forward='/day3'/>
            </div>}

    </div>
};

export default Day2;

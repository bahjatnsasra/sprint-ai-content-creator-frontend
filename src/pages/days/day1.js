import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { useEffect, useState } from 'react';
import { generateDay1 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const Day1 = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const day1Data = await generateDay1(props.programPlan.structure)
            setData(day1Data)
        }
        getData()
    },[])

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day1.svg" alt="image" />
        
        {data ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום הראשון</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום הראשון</label>
                </div>

                <PathData data = {data}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום הראשון ...'></LoadingPopUp>}

        {data &&
            <div className={styles.underBtn}>
                    <UnderButtons text='ליצירת היום השני' back='/structurePage' forward='/day2'/>
            </div>}

    </div>
};

export default Day1;

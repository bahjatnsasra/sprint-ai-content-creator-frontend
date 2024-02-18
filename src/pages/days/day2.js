import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import {  generateDay3 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';
import { createDay } from '../../service/daysService'


const Day2= (props) => {

    
    const createDay3 = async () => {
        const day3Data = await generateDay3(props.programPlan.structure)
        props.updateDaysList(3, day3Data)
        await createDay(props.weekPlanId,day3Data)
    }


    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day2.svg" alt="image" />
        
        {props.daysList[2] ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום השני</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום השני</label>
                </div>

                <PathData data = {props.daysList[2].tasks}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום השני ...'></LoadingPopUp>}

        {props.daysList[2] &&
            <div className={styles.underBtn}>
                    <UnderButtons buttonFunc = {createDay3} text='ליצירת היום השלישי' back='/day1' forward='/day3'/>
            </div>}

    </div>
};

export default Day2;

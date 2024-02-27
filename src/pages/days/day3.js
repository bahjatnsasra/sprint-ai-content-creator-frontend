import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { generateDay4 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';
import { createDay } from '../../service/daysService'

const Day3 = (props) => {
    const createDay4 = async () => {
        const day4Data = await generateDay4(props.programPlan.structure)
        props.updateDaysList(3, day4Data)
        await createDay(props.weekPlanId,day4Data)
    }

    

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day3.svg" alt="image" />
        
        {props.daysList[3] ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום השלישי</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום השלישי</label>
                </div>

                <PathData data = {props.daysList[3].tasks}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום השלישי ...'></LoadingPopUp>}

        {props.daysList[3] &&
            <div className={styles.underBtn}>
                    <UnderButtons buttonFunc = {createDay4} text='ליצירת היום הרביעי' back='/day2' forward='/day4'/>
            </div>}

    </div>
};

export default Day3;

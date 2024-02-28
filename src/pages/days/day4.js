import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { generateDay5 } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';
import { createDay } from '../../service/daysService'


const Day4 = (props) => {
    const createDay5 = async () => {
        const day5Data = await generateDay5(props.programPlan.structure)
        props.updateDaysList(4, day5Data)
        await createDay(props.weekPlanId,day5Data)
    }


    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day4.svg" alt="image" />
        
        {props.daysList[3] ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום הרביעי</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום הרביעי</label>
                </div>

                <PathData title = {props.daysList[3].title} data = {props.daysList[3].tasks}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום הרביעי ...'></LoadingPopUp>}

        {props.daysList[3] &&
            <div className={styles.underBtn}>
                    <UnderButtons buttonFunc = {createDay5} text='ליצירת היום החמישי' back='/day3' forward='/day5'/>
            </div>}

    </div>
};

export default Day4;

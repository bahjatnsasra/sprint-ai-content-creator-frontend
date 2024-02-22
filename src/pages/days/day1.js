import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';
import { generateDay2 } from '../../service/openAIService'
import { createDay } from '../../service/daysService'

const Day1 = (props) => {

    const createDay2 = async () => {
        const day2Data = await generateDay2(props.programPlan.structure)
        props.updateDaysList(1, day2Data)
        await createDay(props.weekPlanId,day2Data)
    }
    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day1.svg" alt="image" />
        
        {props.daysList[0] ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום הראשון</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום הראשון</label>
                </div>

                <PathData title = {props.daysList[0].title} data = {props.daysList[0].tasks}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום הראשון ...'></LoadingPopUp>}

        {props.daysList[0] &&
            <div className={styles.underBtn}>
                    <UnderButtons buttonFunc = {createDay2} text='ליצירת היום השני' back='/structurePage' forward='/day2'/>
            </div>}

    </div>
};

export default Day1;

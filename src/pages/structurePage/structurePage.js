import styles from './structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { useEffect, useState } from 'react';
import { getSturctureAnswer } from '../../service/geminiService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const StructurePage = (props) => {

    const [structure, setStructure] = useState(null);
    const subject = props.programPlan.subject;
    const contentType = props.programPlan.contentType;
    const goals = props.programPlan.goals;

    useEffect(() => {
        console.log(subject)
        console.log(contentType)
        console.log(goals)
        const fetchProgramPlanData = async (subject, contentType, goals) => {
            setStructure(await getSturctureAnswer(subject, contentType, goals))
        }
        fetchProgramPlanData(subject, contentType, goals)
    },[])
    
    return <div className={styles.all_page_container}>
            <Navbar className={styles.navbar}/>

            <img className={styles.img} src="/procces3.svg" alt="image" />

            {structure ? 
                <div className={styles.container}>
                    <h2>מתווה למסלול</h2>
                    <label>בנושא {props.programPlan.subject}</label>

                    <div className={styles.messege_div}>
                        <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                        <label>באפשרותכם לערוך את תוכן המתווה</label>
                    </div>
                    
                    <PathData data = {structure}/>

                    <img className={styles.path_img} src={props.programPlan.picture} alt='path image'></img>
                </div>
            :
                <LoadingPopUp text='אנחנו מכינים לכם מתווה למסלול...'></LoadingPopUp>}

                {structure && 
                    <div className={styles.underBtn}>
                        <UnderButtons text='ליצירת היום הראשון' back='/homePageCreatePath' forward='/day1'/>
                    </div>}
            </div>
    
};

export default StructurePage;

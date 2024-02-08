import styles from './structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import React, { useEffect } from 'react';
import { createProgramPlan } from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const StructurePage = (props) => {

    useEffect(() => {
        async function fetchProgramPlanData() {
            const programPlan = await createProgramPlan(props.programPlan)
            props.updateProgramPlanData('structure', programPlan.structure)
        }
        fetchProgramPlanData()
    },[])
    
    return <div className={styles.all_page_container}>
            <Navbar className={styles.navbar}/>

            <img className={styles.img} src="/procces3.svg" alt="image" />

            {props.programPlan.structure ? 
                <div className={styles.container}>
                    <h2>מתווה למסלול</h2>
                    <label>בנושא {props.programPlan.subject}</label>

                    <div className={styles.messege_div}>
                        <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                        <label>באפשרותכם לערוך את תוכן המתווה</label>
                    </div>

                    <PathData data = {props.programPlan.structure}/>
                    <img src={props.programPlan.picture} alt='path image'></img>
                </div>
            :
                <LoadingPopUp text='אנחנו מכינים לכם מתווה למסלול...'></LoadingPopUp>}

                <div className={styles.underBtn}>
                    <UnderButtons text='ליצירת היום הראשון' back='/homePageCreatePath' forward='/day1'/>
                </div>
            </div>
    
};

export default StructurePage;

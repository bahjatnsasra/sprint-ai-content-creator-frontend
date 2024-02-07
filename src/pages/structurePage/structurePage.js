import styles from './structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import { useEffect, useState } from 'react';
import { createProgramPlan } from '../../service/openAIService'

const   StructurePage = (props) => {

    useEffect(() => {
        async function fetchProgramPlanData() {
            const programPlan = await createProgramPlan(props.programPlan)
            props.updateProgramPlanData('structure', programPlan.structure)
        }
        fetchProgramPlanData()
    },[])
    
    return props.programPlan.structure && <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/procces3.svg" alt="image" />

        <div className={styles.container}>
            <h2>מתווה למסלול</h2>
            <label>בנושא {props.programPlan.subject}</label>

            <div className={styles.messege_div}>
                <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                <label>באפשרותכם לערוך את תוכן המתווה</label>
            </div>

            <PathData data = {props.programPlan.structure}/>
        </div>

        <div className={styles.underBtn}>
                <UnderButtons text='ליצירת היום הראשון' back='/homePageCreatePath' forward='/day1'/>
            </div>

        </div>
};

export default StructurePage;

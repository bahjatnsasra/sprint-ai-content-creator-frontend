import React, { useEffect, useState } from 'react';
import styles from './homePageCreatePath.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import { FaMagic } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import {getSubjectDescription, getImageUrl} from '../../service/openAIService';

async function generteImage(setIsMagicClicked,updateProgramPlanImage,subject) {
    setIsMagicClicked(true);
    const url = await getImageUrl(subject)
    updateProgramPlanImage('picture' ,url )
    setIsMagicClicked(false);
}


async function generateDescription(programPlan, setIsDescriptionClicked, updateProgramPlanDescription) {
    setIsDescriptionClicked(true);
    const data = await getSubjectDescription(programPlan.subject);
    updateProgramPlanDescription('goals',data)
    setIsDescriptionClicked(false);
}

function HomePageCreatePath(props) {

    const [isMagicClicked, setIsMagicClicked] = useState(false);
    const [isDescriptionClicked, setIsDescriptionClicked] = useState(false);


    const handleCheckboxChange = (event) => {
        props.updateProgramPlanData('contentType',event.target.checked);
    };


    useEffect(() => {
        async function fetchData() {
            const data = await getSubjectDescription(props.programPlan.subject);
            props.updateProgramPlanData('goals',data)
        }
        fetchData()
    }, [])


    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces2.svg" alt="image" />

                <div className={styles.container_data}>
                    <img className={styles.text_img} src="/text2.svg" alt="image" />

                    <div className={styles.input_container}>
                        <label>נושא</label>
                        <input placeholder='יצירת תמונות באמצעות בינה מלאכותית' type='text' value={props.programPlan.subject} onChange={(event) => {props.updateProgramPlanData('subject',event.target.value)}}></input>

                        <label>מטרות המסלול</label>
                        <div className={styles.textarea_container}>
                            <textarea value={props.programPlan.goals} onChange={ (event) => props.updateProgramPlanData('goals' ,event.target.value)} className={styles.description_textarea} placeholder='התלמידים יכירו את עולם יצירת התמונות בבינה מלאכותית, לימוד על סגנונות שונים באמנות וציור, פיתוח מיומנויות כתיבת פרומפטים לקבלת תוצאות רצויות' type='text'></textarea>
                            {isDescriptionClicked ? 
                                <VscDebugRestart className={styles.generate_icon_loading}></VscDebugRestart>
                            : 
                                <VscDebugRestart onClick={() => {generateDescription(props.programPlan,setIsDescriptionClicked,props.updateProgramPlanData)}} className={styles.generate_icon}></VscDebugRestart>}
                        </div>

                        <div className={styles.checkbox_div}>
                            <label>שימוש בבינה מלאכותית</label>

                            <label className={styles.cont}>
                                <input
                                    type="checkbox"
                                    checked={props.programPlan.contentType}
                                    onChange={handleCheckboxChange}
                                />
                                <span></span>
                            </label>
                        </div>

                        <div className={styles.create_img_container}>
                            {props.programPlan.picture === null ? 
                                <label>יצירת תמונה למסלול</label>
                            :
                                <label>יצירת תמונה נוספת למסלול</label>}
                            <button className={styles.createPaint_btn} onClick={() => generteImage(setIsMagicClicked,props.updateProgramPlanData,props.programPlan.subject)}>
                                <label>יצירה</label>
                                <FaMagic className={`${styles.magic_icon} ${isMagicClicked ? styles.magic_icon_animation : ''}`} />              
                            </button>
                        </div>
                        
                        {props.programPlan.picture && <img className={styles.path_img} src={props.programPlan.picture} alt="alt image" />}

                    </div>

                    <img  className={styles.paint_img} src="/image.svg" alt="image" />
                </div>
            </div>

            <div className={styles.underBtn}>
                <UnderButtons  text='יצירת מסלול' back='/chooseSubject' forward='/structurePage'/>
            </div>

        </React.Fragment>
    );
};

export default HomePageCreatePath;

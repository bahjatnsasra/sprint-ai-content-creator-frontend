import React, { useEffect, useState } from 'react';
import styles from './homePageCreatePath.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import { FaMagic } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import {getSubjectDescription, getImageUrl} from '../../service/openAIService';

const HomePageCreatePath = (props) => {

    const [isMagicClicked, setIsMagicClicked] = useState(false);
    const [isDescriptionClicked, setIsDescriptionClicked] = useState(false);

    const generateAgainDescription = async () => {
        await fetchData();
    }

    const handleCheckboxChange = (event) => {
        props.updateProgramPlanData('contentType',event.target.checked);
    };

    // create dall E image
    const createImg = async () => {
        setIsMagicClicked(true);
        const url = await getImageUrl(props.programPlan.subject)
        props.updateProgramPlanData('picture',url)
        setIsMagicClicked(false);
    };
    
    const fetchData = async () => {
        setIsDescriptionClicked(true);
        const data = await getSubjectDescription(props.programPlan.subject);
        props.updateProgramPlanData('goals',data)
        setIsDescriptionClicked(false);
    };
    
    useEffect(() => {
        fetchData();
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
                                <VscDebugRestart onClick={fetchData} className={styles.generate_icon_loading}></VscDebugRestart>
                            : 
                                <VscDebugRestart onClick={generateAgainDescription} className={styles.generate_icon}></VscDebugRestart>}
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
                            <button className={styles.createPaint_btn} onClick={createImg}>
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
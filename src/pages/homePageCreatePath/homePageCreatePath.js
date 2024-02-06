import React, { useEffect, useRef, useState } from 'react';
import styles from './homePageCreatePath.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import { FaMagic } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import {getSubjectDescription, getImageUrl, createProgramPlan} from '../../service/openAIService';

const HomePageCreatePath = (props) => {

    const [subject, setSubject] = useState(props.mainObj.sub2);
    const [isMagicClicked, setIsMagicClicked] = useState(false);
    const [imageUrl, setImageUrl] = useState(null)
    const [isDescriptionClicked, setIsDescriptionClicked] = useState(false);
    const [description, setDescription] = useState();
    const [useAi, setUseAi] = useState(false);

    const generateAgainDescription = async () => {
        await fetchData();
    }

    const handleCheckboxChange = (event) => {
        setUseAi(event.target.checked);
    };

    // create dall E image
    const createImg = async () => {
        setIsMagicClicked(true);
        const url = await getImageUrl(subject)
        setImageUrl(url)
        setIsMagicClicked(false);
    };
    
    const fetchData = async () => {
        setIsDescriptionClicked(true);
        const data = await getSubjectDescription(subject);
        setDescription(data)
        setIsDescriptionClicked(false);
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    const makeStracture = async() => {
        const programPlan = {
            picture: {imageUrl},
            goals: {description},
            subject: {subject},
            contentType: {useAi}
        };
        await createProgramPlan(programPlan)
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces2.svg" alt="image" />

                <div className={styles.container_data}>
                    <img className={styles.text_img} src="/text2.svg" alt="image" />

                    <div className={styles.input_container}>
                        <label>נושא</label>
                        <input placeholder='יצירת תמונות באמצעות בינה מלאכותית' type='text' value={subject} onChange={(event) => {setSubject(event.target.value)}}></input>

                        <label>מטרות המסלול</label>
                        <div className={styles.textarea_container}>
                            <textarea value={description} className={styles.description_textarea} placeholder='התלמידים יכירו את עולם יצירת התמונות בבינה מלאכותית, לימוד על סגנונות שונים באמנות וציור, פיתוח מיומנויות כתיבת פרומפטים לקבלת תוצאות רצויות' type='text'></textarea>
                            {isDescriptionClicked ? 
                                <VscDebugRestart className={styles.generate_icon_loading}></VscDebugRestart>
                            : 
                                <VscDebugRestart onClick={generateAgainDescription} className={styles.generate_icon}></VscDebugRestart>}
                        </div>

                        <div className={styles.checkbox_div}>
                            <label>שימוש בבינה מלאכותית</label>

                            <label className={styles.cont}>
                                <input
                                    type="checkbox"
                                    checked={useAi}
                                    onChange={handleCheckboxChange}
                                />
                                <span></span>
                            </label>
                        </div>

                        <div className={styles.create_img_container}>
                            {imageUrl === null ? 
                                <label>יצירת תמונה למסלול</label>
                            :
                                <label>יצירת תמונה נוספת למסלול</label>}
                            <button className={styles.createPaint_btn} onClick={createImg}>
                                <label>יצירה</label>
                                <FaMagic className={`${styles.magic_icon} ${isMagicClicked ? styles.magic_icon_animation : ''}`} />              
                            </button>
                        </div>
                        
                        {imageUrl && <img className={styles.path_img} src={imageUrl} alt="alt image" />}

                    </div>

                    <img  className={styles.paint_img} src="/image.svg" alt="image" />
                </div>
            </div>

            <div className={styles.underBtn}>
                <UnderButtons func = {makeStracture} text='יצירת מסלול' back='/chooseSubject' forward='/structurePage'/>
            </div>

        </React.Fragment>
    );
};

export default HomePageCreatePath;

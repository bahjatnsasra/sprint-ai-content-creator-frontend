import React, { useState } from 'react';
import styles from './homePageCreatePath.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import { FaMagic } from "react-icons/fa";

const HomePageCreatePath = (props) => {

    const [subject, setSubject] = useState(props.mainObj.sub2);
    const [isMagicClicked, setIsMagicClicked] = useState(false);

    // create dall E image
    const createImg = () => {
        setIsMagicClicked(true);
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces1.svg" alt="image" />

                <div className={styles.container_data}>
                    <img className={styles.text_img} src="/text2.svg" alt="image" />

                    <div className={styles.input_container}>
                        <label>נושא</label>
                        <input placeholder='יצירת תמונות באמצעות בינה מלאכותית' type='text' value={subject} onChange={(event) => {setSubject(event.target.value)}}></input>

                        <label>מטרות המסלול</label>
                        <textarea className={styles.description_textarea} placeholder='התלמידים יכירו את עולם יצירת התמונות בבינה מלאכותית, לימוד על סגנונות שונים באמנות וציור, פיתוח מיומנויות כתיבת פרומפטים לקבלת תוצאות רצויות' type='text'></textarea>

                        <div className={styles.create_img_container}>
                            <label>יצירת תמונה למסלול</label>
                            <button className={styles.createPaint_btn} onClick={createImg}>
                                <label>יצירה</label>
                                <FaMagic className={`${styles.magic_icon} ${isMagicClicked ? styles.magic_icon_animation : ''}`} />              
                            </button>
                        </div>
                    </div>

                    <img  className={styles.paint_img} src="/image.svg" alt="image" />
                </div>
            </div>

            <div className={styles.underBtn}>
                <UnderButtons back='/chooseSubject' forward='/structurePage'/>
            </div>
        </React.Fragment>
    );
};

export default HomePageCreatePath;

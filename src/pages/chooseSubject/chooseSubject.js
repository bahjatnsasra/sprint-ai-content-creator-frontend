import React, { useState } from 'react';
import styles from './chooseSubject.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'

const ChooseSubject = () => {
    const [selectedButton, setSelectedButton] = useState(2);
    const [subject, setSubject] = useState();

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces1.svg" alt="image" />
                <label className={styles.title}>נתחיל בבחירת נושא למסלול</label>

                <div className={styles.buttons_container}>
                    <button
                        className={`${styles.btn} ${selectedButton === 1 ? styles.selected : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        יש לי רעיון לנושא
                    </button>

                    <button
                        className={`${styles.btn} ${selectedButton === 2 ? styles.selected : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        אשמח להצעות
                    </button>
                </div>

                {
                    selectedButton !== 2 ?
                        <div className={styles.your_subject_container}>
                            <label>מה הנושא שלך ?</label>
                            <input onChange={(event) => setSubject(event.target.value)} placeholder='יצירת תמונות באמצעות בינה מלאכותית' />
                        </div>
                    : 
                    null
                }
            </div>

            <div className={styles.underBtn}>
                <UnderButtons subject={subject} back='/' forward='/genaratedSubjects'/>
            </div>
        </React.Fragment>
    );
};

export default ChooseSubject;

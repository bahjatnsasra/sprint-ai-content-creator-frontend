import React, { useEffect, useState } from 'react';
import styles from './chooseSubject.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';

const ChooseSubject = (props) => {
    const [selectedButton, setSelectedButton] = useState(2);
    const [subject, setSubject] = useState('');
    const [inputError, setInputError] = useState(true);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSubject(inputValue);
        console.log(inputValue)
        props.updateProgramPlanData('subject',inputValue)
        setInputError(inputValue === '');
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                
                <div className={styles.img_div}>
                    <img className={styles.img} src="/procces1.svg" alt="image" />
                </div>

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

                {selectedButton !== 2 && (
                    <div className={styles.your_subject_container}>
                        <label>מה הנושא שלך ?</label>
                        <input
                            onChange={(event) => handleInputChange(event)}
                            placeholder='יצירת תמונות באמצעות בינה מלאכותית'
                            className={`${styles.input} ${inputError ? styles.error : ''}`}
                        />
                    </div>
                )}
            </div>

            <div className={styles.underBtn}>
                {
                    selectedButton === 2 ? (
                    <UnderButtons text='הבא' subject={subject} back='/' forward='/genaratedSubjects' />
                    ) : (
                        !inputError ? (
                            <UnderButtons text='הבא' subject={subject} back='/' forward='/homePageCreatePath'/>
                        ) : (
                            <UnderButtons text='הבא' subject={subject} back='/' forward='/chooseSubject' />
                        )
                    )
                }
            </div>

        </React.Fragment>
    );
};

export default ChooseSubject;
import React, { useEffect, useState } from 'react';
import styles from './genaratedSubjects.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'

const GenaratedSubjects = () => {

    const [subject, setSubject] = useState();
    const [lastClickedButton, setLastClickedButton] = useState(null);

    useEffect(() => {
        console.log(subject)
    }, [subject])

    const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i < 7; i++) {
        buttons.push(
        <button
            key={i}
            value={i}
            onClick={(event) => {
            setSubject(event.target.value);
            if (lastClickedButton !== null) {
                lastClickedButton.style.border = "none";
            }
            event.target.style.border = "3px solid #946AB3";
            setLastClickedButton(event.target);
            }}
            className={styles.btn}
        >
            {i}
        </button>
        );
    }
    return buttons;
    };

    const renderButtons2 = () => {
    const buttons = [];
    for (let i = 7; i <= 12; i++) {
        buttons.push(
        <button
            key={i}
            value={i}
            onClick={(event) => {
            setSubject(event.target.value);
            if (lastClickedButton !== null) {
                lastClickedButton.style.border = "none";
            }
            event.target.style.border = "3px solid #946AB3";
            setLastClickedButton(event.target);
            }}
            className={styles.btn}
        >
            {i}
        </button>
        );
    }
    return buttons;
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>

                <img className={styles.img} src="/process2.svg" alt="image" />

                <label className={styles.title}>בחירת תחום כללי לנושא</label>

                <div className={styles.buttons_container}>
                    <label className={styles.options_label}>הנה כמה אפשרויות שהכנו לך</label>

                    <div className={styles.row1}>
                        {renderButtons()}
                    </div>

                    <div className={styles.row2}>
                        {renderButtons2()}
                    </div>
                </div>

            </div>

            <div className={styles.underBtn}>
                <UnderButtons subject={subject} back='/chooseSubject' forward='/loadingPage'/>
            </div>
        </React.Fragment>
    );
};

export default GenaratedSubjects;

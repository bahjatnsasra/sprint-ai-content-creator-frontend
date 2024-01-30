import React, { useEffect, useState } from 'react';
import styles from './genaratedSubjects.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'
import { GoSync } from "react-icons/go";
import {getSubjects} from '../../service/openAIService'

const GenaratedSubjects = (props) => {

    const [subject, setSubject] = useState();
    const [lastClickedButton, setLastClickedButton] = useState(null);
    const [subjects,setSubjects] = useState()
    
    useEffect(() => {
        props.updateMainObj(subject,'')
    }, [subject])


    useEffect(() => {
        const fetchData = async () => {
            const data = await getSubjects()
            setSubjects(data)
            console.log(data);
        }
        fetchData()
    },[])

    const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 7; i++) {
        buttons.push(
        <button
            key={i}
            value={subjects[i]}
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
            {subjects[i]}
        </button>
        );
    }
    return buttons;
    };

    const renderButtons2 = () => {
    const buttons = [];
    for (let i = 7; i < 12; i++) {
        buttons.push(
        <button
            key={i}
            value={subjects[i]}
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
            {subjects[i]}
        </button>
        );
    }
    return buttons;
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>

                <img className={styles.img} src="/procces2.svg" alt="image" />

                <label className={styles.title}>בחירת תחום כללי לנושא</label>

                {subjects && <div className={styles.buttons_container}>
                    <label className={styles.options_label}>הנה כמה אפשרויות שהכנו לך</label>

                    <div className={styles.row1}>
                        {renderButtons()}
                    </div>

                    <div className={styles.row2}>
                        {renderButtons2()}
                    </div>

                    <button className={styles.more_option_btn}>
                        <label>הצעות נוספות</label>
                        <GoSync></GoSync>
                    </button>
                </div>}

            </div>

            <div className={styles.underBtn}>
                <UnderButtons text='הבא' subject={subject} back='/chooseSubject' forward='/loadingPage'/>
            </div>
        </React.Fragment>
    );
};

export default GenaratedSubjects;

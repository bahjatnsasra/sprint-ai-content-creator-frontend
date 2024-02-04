import React, { useEffect, useState } from 'react';
import styles from './genaratedSubjects.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'
import { GoSync } from "react-icons/go";
import {getSubjects} from '../../service/openAIService'
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const GenaratedSubjects = (props) => {

    const [subject, setSubject] = useState();
    const [lastClickedButton, setLastClickedButton] = useState(null);
    const [subjects,setSubjects] = useState();
    const [generateAgainClicked, setGenerateAgainClicked] = useState(false)

    const fetchData = async () => {
        const data = await getSubjects()
        setSubjects(data)
    }
    
    useEffect(() => {
        fetchData()
        props.updateMainObj(subject,'')
    }, [subject])

    const generateAgain = async () => {
        setGenerateAgainClicked(true)
        await fetchData()
        setGenerateAgainClicked(false)
    }

    const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 12; i++) {
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

                {subjects ? <div className={styles.buttons_container}>
                    <label className={styles.title}>בחירת תחום כללי לנושא</label>
                    <label className={styles.options_label}>הנה כמה אפשרויות שהכנו לך</label>

                    <div className={styles.grid_buttons}>
                        {renderButtons()}
                    </div>

                    <button className={styles.more_option_btn} onClick={generateAgain}>

                        {!generateAgainClicked ? 
                        <div>
                            <label className={styles.more_option_btn_label}>הצעות נוספות</label>
                            <GoSync></GoSync>
                        </div>
                        :
                        <div>
                            <label className={styles.more_option_btn_label}>טוען נושאים</label>
                            <GoSync className={styles.generateAgain_icon_loading}></GoSync>
                        </div>}
                    </button>
                </div>
                    : 
                    <LoadingPopUp text='אנחנו מכינים לכם רעיונות לנושאים...'></LoadingPopUp>
                    }

            </div>
            
            {subjects &&
                <div className={styles.underBtn}>
                    <UnderButtons text='הבא' back='/chooseSubject' forward='/chooseSubjectEnd'/>
                </div>}
        </React.Fragment>
    );
};

export default GenaratedSubjects;

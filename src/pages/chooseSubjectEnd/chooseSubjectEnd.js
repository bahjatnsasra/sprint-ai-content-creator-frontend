import React, { useEffect, useState } from 'react';
import styles from './chooseSubjectEnd.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'
import { GoSync } from "react-icons/go";
import {getUnderSubjects} from '../../service/openAIService'

const ChooseSubjectEnd = (props) => {

    const [selectedButton, setSelectedButton] = useState(2);
    const [subject, setSubject] = useState();
    const [realSubject, setRealSubject] = useState();
    const [generateAgainClicked, setGenerateAgainClicked] = useState(false)
    const [subjects,setSubjects] = useState();

    const fetchData = async () => {
        const data = await getUnderSubjects(subject)
        setSubjects(data)
    }

    useEffect(() => {
        fetchData()
        props.updateMainObj(subject,'')
    }, [subject])

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    const generateAgain = async () => {
        setGenerateAgainClicked(true)
    }

    useEffect(() => {
        setSubject(props.mainObj.sub1)
        props.updateMainObj(subject,realSubject)
    }, [realSubject])

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces2.svg" alt="image" />
                <label className={styles.title}>נושאים בנושא {subject}</label>

                {subjects &&
                <div className={styles.top_container_buttons}>
                    <div className={styles.buttons_container}>
                        <button
                            className={`${styles.btn} ${selectedButton === 1 ? styles.selected : ''}`}
                            value={subjects[0]}
                            onClick={(event) => {
                                handleButtonClick(1);
                                setRealSubject(event.target.value);
                            }}
                        >
                            {subjects[0]}
                        </button>

                        <button
                            className={`${styles.btn} ${selectedButton === 2 ? styles.selected : ''}`}
                            value={subjects[1]}
                            onClick={(event) => {
                                handleButtonClick(2);
                                setRealSubject(event.target.value);
                            }}
                        >
                            {subjects[1]} 
                        </button>

                        <button
                            className={`${styles.btn} ${selectedButton === 3 ? styles.selected : ''}`}
                            value={subjects[2]}
                            onClick={(event) => {
                                handleButtonClick(3);
                                setRealSubject(event.target.value);
                            }}
                        >
                            {subjects[2]}
                        </button>
                    </div>

                    <button className={styles.more_option_btn} onClick={generateAgain}>
                        <label className={styles.more_option_btn_label}>הצעות נוספות</label>
                        {!generateAgainClicked ? 
                        <GoSync></GoSync>
                        :
                        <GoSync className={styles.generateAgain_icon_loading}></GoSync>}
                    </button>
                </div>}

            </div>

            <div className={styles.underBtn}>
                <UnderButtons text='הבא' subject={subject} back='/genaratedSubjects' forward='/homePageCreatePath'/>
            </div>
        </React.Fragment>
    );
};

export default ChooseSubjectEnd;

import React, { useEffect, useState } from 'react';
import styles from './chooseSubjectEnd.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'
import { GoSync } from "react-icons/go";
import {getUnderSubjects} from '../../service/openAIService';
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const ChooseSubjectEnd = (props) => {

    const [selectedButton, setSelectedButton] = useState();
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
        await fetchData()
        setGenerateAgainClicked(false)
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

                {subjects ?
                <div className={styles.top_container_buttons}>
                    
                    <label className={styles.title}>נושאים בנושא {subject}</label>
                    
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
                    <LoadingPopUp text='טוען רעיונות בנושא ' subject={subject}></LoadingPopUp>
                }

            </div>

            {subjects != null && selectedButton != null && (
                <div className={styles.underBtn}>
                <UnderButtons text='הבא' subject={subject} back='/genaratedSubjects' forward='/homePageCreatePath'/>
                </div>
            )}
        </React.Fragment>
    );
};

export default ChooseSubjectEnd;

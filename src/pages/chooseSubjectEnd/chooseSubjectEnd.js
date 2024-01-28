import React, { useEffect, useState } from 'react';
import styles from './chooseSubjectEnd.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'
import { GoSync } from "react-icons/go";

const ChooseSubjectEnd = (props) => {
    const [selectedButton, setSelectedButton] = useState(2);
    const [subject, setSubject] = useState();

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    useEffect(() => {
        console.log(props.mainObj);
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces1.svg" alt="image" />
                <label className={styles.title}>נושאים בנושא {props.subject}</label>

                <div className={styles.top_container_buttons}>
                    <div className={styles.buttons_container}>
                        <button
                            className={`${styles.btn} ${selectedButton === 1 ? styles.selected : ''}`}
                            onClick={() => handleButtonClick(1)}
                        >
                            נושא 1
                        </button>

                        <button
                            className={`${styles.btn} ${selectedButton === 2 ? styles.selected : ''}`}
                            onClick={() => handleButtonClick(2)}
                        >
                            נושא 2
                        </button>

                        <button
                            className={`${styles.btn} ${selectedButton === 3 ? styles.selected : ''}`}
                            onClick={() => handleButtonClick(3)}
                        >
                            נושא 3
                        </button>
                    </div>

                    <button className={styles.more_option_btn}>
                        <label>הצעות נוספות</label>
                        <GoSync></GoSync>
                    </button>
                </div>

            </div>

            <div className={styles.underBtn}>
                <UnderButtons subject={subject} back='/' forward='/homePageCreatePath'/>
            </div>
        </React.Fragment>
    );
};

export default ChooseSubjectEnd;

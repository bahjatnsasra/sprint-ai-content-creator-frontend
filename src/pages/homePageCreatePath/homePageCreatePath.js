import React, { useState } from 'react';
import styles from './homePageCreatePath.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons'

const HomePageCreatePath = (props) => {

    const [subject, setSubject] = useState(props.mainObj.sub2);

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.img} src="/procces1.svg" alt="image" />

                <div className={styles.container_data}>
                    <img className={styles.text_img} src="/homepage_text.svg" alt="image" />

                    <div className={styles.input_container}>
                        <label>נושא</label>
                        <input type='text' value={subject} onChange={(event) => {setSubject(event.target.value)}}></input>

                        <label>מטרות המסלול</label>
                        <input type='text'></input>

                        <div className={styles.create_img_container}>
                            <label>יצירת תמונה למסלול</label>
                            <button>יצירה</button>
                        </div>
                    </div>

                    <img  className={styles.paint_img} src="/image.svg" alt="image" />
                </div>
            </div>

            <div className={styles.underBtn}>
                <UnderButtons back='/' forward='/genaratedSubjects'/>
            </div>
        </React.Fragment>
    );
};

export default HomePageCreatePath;

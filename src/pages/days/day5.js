import styles from '../structurePage/structurePage.module.css';
import Navbar from '../../components/navbar/navbar';
import UnderButtons from '../../components/underButtons/underButtons';
import PathData from '../../components/pathData/pathData';
import { IoIosAlert } from "react-icons/io";
import LoadingPopUp from '../../components/loadingPopUp/loadingPopUp';

const Day5 = (props) => {


    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/day5.svg" alt="image" />
        
        {props.daysList[4] ? 
            <div className={styles.container}>
                <h2 style={{marginBottom: '20px'}}>צפו ביום החמישי</h2>

                <div className={styles.messege_div}>
                    <IoIosAlert className={styles.alert_icon}></IoIosAlert>
                    <label>באפשרותכם לערוך את תוכן היום החמישי</label>
                </div>

                <PathData title = {props.daysList[4].title} data = {props.daysList[4].tasks}/>
            </div>
        :
            <LoadingPopUp text='אנחנו מכינים לכם פעילות ליום החמישי ...'></LoadingPopUp>}

        {props.daysList[4] &&
            <div className={styles.underBtn}>
                    <UnderButtons text='לצפיה במסלול הכולל' back='/day4' forward='/watchPath'/>
            </div>}

    </div>
};

export default Day5;

import React, { useState } from 'react';
import styles from './watchPath.module.css';
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ExtendedData from '../../components/extendedData/extendedData';

const WatchPath = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const openGoogleDoc = () => {
        setLoading(true);
    };

    return <div className={styles.all_page_container}>
        <Navbar className={styles.navbar}/>

        <img className={styles.img} src="/proccesEnd.svg" alt="image" />

        <div className={styles.container}>
            <h2>צפו במסלול המפורט</h2>

            <div className={styles.days_container}>
                <ExtendedData
                    text='האם אתה אוהב Cheese Whiz? שיזוף בהתזה? ריסים מלאכותיים? זה מה שהוא לורם איפסום בעיני רבים - הוא משפשף אותם בדרך הלא נכונה, כל הדרך. זה לא אמיתי, מוזר, גורם לך לתהות אם משהו לא בסדר, נראה שהוא מחפש את תשומת הלב שלך מכל הסיבות הלא נכונות. בדרך כלל, אנחנו מעדיפים את הדבר האמיתי, יין ללא חומרים משמרים מבוססי גופרית, חמאה אמיתית, לא מרגרינה, ולכן היינו רוצים שהפריסות והעיצובים שלנו יהיו מלאים במילים אמיתיות, עם מחשבות שחשובות, מידע שיש לו ערך.
                    התוספות שאולי בחרת לאותה פרוסת פיצה לארוחת ערב בטלוויזיה כששכחת לקנות מאכלים, הצבע שאתה עשוי להטיח על הפנים שלך כדי להרשים את הבוס החדש הוא העסק שלך. אבל מה עם הלחם היומי שלך? עיצוב קומפוזיציות, פריסות, מסגרות wireframes - האם הלקוחות שלך יסכימו שאתה מתנהל בצורה קלה? הרשויות בעסק שלנו יגידו במילים לא ברורות שלורם איפסום היא כל כך ענקית, ענקית, אין לא לא לוותר לנצח. לא כל כך מהר, הייתי אומר, ישנם כמה גורמים גואלים לטובת טקסט יווני, מכיוון שהשימוש בו הוא רק סימפטום לבעיה גרועה יותר שיש לקחת בחשבון.
                    
                    אתה מתחיל בטקסט, אתה מפסל מידע, אתה מפסלת את מה שלא צריך, אתה מגיע לנקודה, מבהיר דברים, מוסיף ערך, אתה איש תוכן, אתה אוהב מילים. עיצוב הוא לא מחשבה שלאחר מכן, רחוק מכך, אבל הוא מגיע בשניה ראויה. בכל מקרה, אתה עדיין משתמש ב-Lorem Ipsum ובצדק, שכן תמיד יהיה לו מקום בארגז הכלים של עובדי האינטרנט, כשדברים קורים, לא תמיד כמו שאתה אוהב, לא תמיד בסדר המועדף. גם אם אתה פחות מתעסק בעיצוב ויותר באסטרטגיית תוכן, אתה עשוי למצוא ערך גואל כלשהו עם, חכו לזה, עותק דמה, לא פחות.
                    
                    חשבו על זה: עשית את כל הדגמים הנדרשים לפריסה מוזמנת, קיבלת את כל האישורים, בנית בסיס קוד נבדק או בניית אותם, החלטת על מערכת ניהול תוכן, קיבלת רישיון עבורה או התאמת תוכנת קוד פתוח ללקוח שלך. צרכי. ואז נשאלת השאלה: איפה התוכן? עוד לא שם? זה לא כל כך נורא, יש עותק דמה להצלה. אבל גרוע מכך, מה אם הדג לא נכנס לפחית, כף הרגל גדולה מדי עבור המגף? או לקטנה? למשפטים קצרים, לכותרות רבות, תמונות גדולות מדי עבור העיצוב המוצע, או קטנות מדי, או שהן משתלבות אבל זה נראה מעורפל מסיבות שהאנשים בפגישה לא ממש יודעים עכשיו, אבל הם לא מרוצים, איכשהו . לקוח שלא מרוצה מסיבה כלשהי הוא בעיה, לקוח שלא מרוצה למרות שהוא לא ממש יכול לשים עליו את האצבע הוא גרוע יותר.
                    
                    אבל. אבל גדול: לורם איפסום הוא לא שורש הבעיה, הוא רק מראה מה משתבש. רוב הסיכויים שלא היה שיתוף פעולה, תקשורת ונקודות ביקורת, לא היה תהליך שהוסכם או צוין בפירוט הנדרש. אסטרטגיית התוכן שלה השתבשה כבר מההתחלה. להישבע את השימוש בלורם איפסום לא היה עוזר, לא יעזור עכשיו. זה כמו להגיד שאתה מעצב גרוע, השתמש בפחות טקסט מודגש, אל תשתמש בהטייה בכל פסקה אחרת. נכון, אבל זה לא כל מה שצריך כדי להחזיר דברים למסלולם.
                    
                    אז לורם איפסום גרוע (לא בהכרח)
                    
                    יש הרבה שנאה בחוץ לטקסט שמסתכם במעט יותר ממילים משובשות בשפה ישנה. תושבי הכפר נמצאים שם בחוץ עם נקמה להשיג את פרנקנשטיין הזה, אוחז בלפידים ובקלשונים, שרוצה לכל הפחות לזפת ולנוצות אותו, להוציא אותו מהעיר בבושה.
                    
                    אחת מתושבי הכפר, קריסטינה הלבורסון מ-Adaptive Path, מחזיקה בתוקף ברעיון שאי אפשר לבדוק עיצוב ללא תוכן אמיתי:
                    
                    שמעתי את הטיעון ש"lorem ipsum" יעיל במסגור קווי או בעיצוב כי הוא עוזר לאנשים להתמקד בפריסה בפועל, או בסכמת הצבעים, או כל דבר אחר. מה שהורג אותי כאן הוא שאנחנו מדברים על יצירת חווית משתמש שתהיה (בין אם נרצה או לא) תהיה מונעת על ידי מילים. כל המבנה של הדף או זרימת האפליקציה הוא FOR THE WORDS.
                    אם זה מה שאתה חושב מה קורה הפוך? כיצד ניתן להעריך תוכן ללא עיצוב? בלי טיפוגרפיה, בלי צבעים, בלי פריסה, בלי סגנונות, כל אותם דברים שמעבירים את האותות החשובים החורגים מהטקסטואלי בלבד, היררכיות של מידע, משקל, הדגשה, הדגשים אלכסוניים, סדרי עדיפויות, כל אותם רמזים עדינים שיש להם גם חזותיים ורגשיים לפנות לקורא. תומכים נוקשים של אסטרטגיית תוכן עשויים להתנער מהשימוש בעותק דמה, אבל אז מעצבים עשויים לרצות לבקש מהם לספק גיליונות סגנונות עם חפיסות ההעתקה שהם מספקים, שמתואמים לכיוון העיצובי שהם דורשים.'
                    day='יום ראשון'
                ></ExtendedData>
                <ExtendedData
                    text='df dgg dgdgasdgmnd  djghd ghdjk hgdgh dkgh ddjkghd kgh dkhg d'
                    day='יום שני'
                ></ExtendedData>
                <ExtendedData
                    text='df dgg dgdgasdgmnd  djghd ghdjk hgdgh dkgh ddjkghd kgh dkhg d'
                    day='יום שלישי'
                ></ExtendedData>
            </div>
        </div>

        <div className={styles.underBtn_container}>
            <button className={styles.move_btn} onClick={openGoogleDoc}>
                {!loading ? 
                    <label> יצוא ל - Google Doc</label>
                    :
                    <>
                         יצוא ל - Google Doc <AiOutlineLoading3Quarters className={styles.loading}/>
                    </>
                }
            </button>

            <button onClick={() => navigate('/')} className={styles.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
        </div>

    </div>
};

export default WatchPath;

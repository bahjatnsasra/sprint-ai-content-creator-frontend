import styels from './underButtons.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const navbar = () => {
    return <div className={styels.container}>

            <button className={styels.move_btn}>
                <IoIosArrowBack></IoIosArrowBack>
                <label>הבא</label>
            </button>

            <button className={styels.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
            
        </div>
}

export default navbar
import styels from './underButtons.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UnderButtons = (props) => {

    const navigate = useNavigate();

    const CallFunction = async () => {
        if(props.func)
        {
            await props.func()
        }
        navigate(props.forward)
    }

    return <div className={styels.container}>

            <button onClick={() => CallFunction} className={styels.move_btn}>
                <IoIosArrowBack></IoIosArrowBack>
                <label>{props.text}</label>
            </button>

            <button onClick={() => navigate(props.back)} className={styels.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
            
        </div>
}

export default UnderButtons
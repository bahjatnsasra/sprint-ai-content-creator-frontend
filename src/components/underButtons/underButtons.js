import styels from './underButtons.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { createProgramPlan } from '../../service/openAIService';

const UnderButtons = (props) => {

    const navigate = useNavigate();

    
    const CallFunction = async () => {
        if(props.setProgramPlan)
        {
            const programPlan = await createProgramPlan(props.programPlanData)
            props.setProgramPlan(programPlan)
            console.log(programPlan);
            // navigate(props.forward)
        }else{
            navigate(props.forward)
        }
        
    }

    return <div className={styels.container}>

            <button onClick={() => navigate(props.forward)} className={styels.move_btn}>
                <IoIosArrowBack></IoIosArrowBack>
                <label>{props.text}</label>
            </button>

            <button onClick={() => navigate(props.back)} className={styels.move_back_btn}><IoIosArrowForward></IoIosArrowForward></button>
            
        </div>
}

export default UnderButtons
import styels from './navbar.module.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return <div className={styels.container}>
            <img onClick={() => navigate('/')} className={styels.logo} src="/logo.svg" alt="image" />
        </div>
}

export default Navbar
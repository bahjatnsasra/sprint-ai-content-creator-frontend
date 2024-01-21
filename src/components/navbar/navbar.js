import styels from './navbar.module.css'

const navbar = () => {
    return <div className={styels.container}>
            <img className={styels.logo} src="/logo.svg" alt="image" />
        </div>
}

export default navbar
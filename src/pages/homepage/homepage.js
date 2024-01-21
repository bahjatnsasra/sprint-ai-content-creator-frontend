import styels from './homepage.module.css'

const homepage = () => {
    return <div className={styels.container}>
            <img src="/homepage_text.svg" alt="image" />
            <button className={styels.btn}>התחילו</button>

            <img  className={styels.img} src="/image.svg" alt="image" />
        </div>
}

export default homepage
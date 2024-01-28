import styels from './pathData.module.css'

const PathData = (props) => {

    return <div className={styels.container}>
            {props.data}
        </div>
}

export default PathData
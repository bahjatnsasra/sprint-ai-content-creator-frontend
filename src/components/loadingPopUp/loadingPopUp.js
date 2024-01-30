import styles from './loadingPopUp.module.css'

const LoadingPopUp = (props) => {

    return  <div className={styles.box_container}>
        <img className={styles.loading_gif} src="//2279b9660181ae6c1d8dcced2d7bfdc6.cdn.bubble.io/f1703410484586x240606988286996770/output-onlinegiftools.gif" alt="loading gif" />
        <label>{props.text}</label>
        <img className={styles.tiny_img} src="/tiny_image.svg" alt="image" />
    </div>
}

export default LoadingPopUp
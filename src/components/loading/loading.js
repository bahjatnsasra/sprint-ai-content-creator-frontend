import styles from './loading.module.css'

const Loading = () => {

    return <svg viewBox="0 0 240 240" className={styles.loader}>
    <circle
        stroke-linecap="round"
        stroke-dashoffset="-330"
        stroke-dasharray="0 660"
        stroke-width="20"
        stroke="#000"
        fill="none"
        r="105"
        cy="120"
        cx="120"
        className={`${styles.loader_ring} ${styles.loader_ring_a}`}
    ></circle>
    <circle
        stroke-linecap="round"
        stroke-dashoffset="-110"
        stroke-dasharray="0 220"
        stroke-width="20"
        stroke="#000"
        fill="none"
        r="35"
        cy="120"
        cx="120"
        className={`${styles.loader_ring} ${styles.loader_ring_b}`}
    ></circle>
    <circle
        stroke-linecap="round"
        stroke-dasharray="0 440"
        stroke-width="20"
        stroke="#000"
        fill="none"
        r="70"
        cy="120"
        cx="85"
        className={`${styles.loader_ring} ${styles.loader_ring_c}`}
    ></circle>
    <circle
        stroke-linecap="round"
        stroke-dasharray="0 440"
        stroke-width="20"
        stroke="#000"
        fill="none"
        r="70"
        cy="120"
        cx="155"
        className={`${styles.loader_ring} ${styles.loader_ring_d}`}
    ></circle>
</svg>

}

export default Loading
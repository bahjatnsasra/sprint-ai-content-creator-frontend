import React, { useState, useEffect } from 'react';
import styles from './pathData.module.css';

const PathData = (props) => {
    const [text, setText] = useState(props.data);

    useEffect(() => {
        const textarea = document.getElementById('myTextarea');
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height to auto to calculate new height
            textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight
        }
    }, [text]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <textarea
            id="myTextarea"
            value={text}
            className={styles.container}
            onChange={handleChange}
        />
    );
};

export default PathData;

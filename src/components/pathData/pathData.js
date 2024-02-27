import React, { useState, useEffect } from 'react';
import styles from './pathData.module.css';

const PathData = (props) => {
    const [text, setText] = useState(props.data);

    useEffect(() => {
        adjustTextareaHeight();
    }, [text]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const adjustTextareaHeight = () => {
        const textarea = document.getElementById('myTextarea');
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <div className={styles.container}>
            {props.title && <h1>{props.title}</h1>}
            <textarea
                id="myTextarea"
                value={text}
                onChange={handleChange}
            />
        </div>
    );
};

export default PathData;

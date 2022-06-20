import React from 'react';
import styles from './feedback.module.css';
import SingleComment from "./singleComment";

const Feedback = () => {
    return (
        <div className={styles.viewport}>
            <div className={styles.feedbackFrame}>
                <p className={styles.feedbackFont}>Отзывы</p>
            </div>
            <div className={styles.feedbackComments}>
                <SingleComment/>
                <SingleComment/>
                <SingleComment/>
                <SingleComment/>
            </div>
        </div>
    );
};

export default Feedback;
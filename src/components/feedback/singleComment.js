import React from 'react';
import styles from "./feedback.module.css";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";

const SingleComment = () => {
    return (
        <div className={styles.imgFrame}>
            <div className={styles.bgImg}>
                <img className={styles.headerImg} src={images.greyHole} alt=""/>
                <div className={styles.feedbackUser}>
                    <span className={styles.userName}>{defaultText.feedbackUserName}</span>
                    <img src={images.penIcon} alt=""/>
                </div>
                <p className={styles.textFont}>{defaultText.feedbackUserComment}</p>
                <span className={styles.date}>{defaultText.feedbackCommentDate}</span>
            </div>
        </div>
    );
};

export default SingleComment;
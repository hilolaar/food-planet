import React from 'react';
import styles from "./whyUs.module.css";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";

const ReasonThree = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.uniqueMenu} alt=""/>
            <h4 className={styles.titleFont}>{defaultText.whyUsReasonThreeTitle}</h4>
            <p className={styles.textFont}>{defaultText.whyUsReasonThreeDesc}</p>
        </div>
    );
};

export default ReasonThree;
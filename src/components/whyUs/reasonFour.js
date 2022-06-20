import React from 'react';
import styles from "./whyUs.module.css";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";

const ReasonFour = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.location} alt=""/>
            <h4 className={styles.titleFont}>{defaultText.whyUsReasonFourTitle}</h4>
            <p className={styles.textFont}>{defaultText.whyUsReasonFourDesc}</p>
        </div>
    );
};

export default ReasonFour;
import React from 'react';
import styles from "./whyUs.module.css";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";

const ReasonTwo = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.freshProduct} alt=""/>
            <h4 className={styles.titleFont}>{defaultText.whyUsReasonTwoTitle}</h4>
            <p className={styles.textFont}>{defaultText.whyUsReasonTwoDesc}</p>
        </div>
    );
};

export default ReasonTwo;
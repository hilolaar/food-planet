import React from 'react';
import styles from './whyUs.module.css';
import images from "../../img";
import defaultText from "../../defaultText/defaultText";

const ReasonOne = () => {
    return (
        <div className={styles.outlineBrd}>
            <img src={images.delivery} alt=""/>
            <h4 className={styles.titleFont}>{defaultText.whyUsReasonOneTitle}</h4>
            <p className={styles.textFont}>{defaultText.whyUsReasonOneDesc}</p>
        </div>
    );
};

export default ReasonOne;
import React from 'react';
import styles from "./whyUs.module.css";
import ReasonOne from "./reasonOne";
import ReasonTwo from "./reasonTwo";
import ReasonThree from "./reasonThree";
import ReasonFour from "./reasonFour";

const WhyUs = () => {
    return (
        <div className={styles.viewport}>
            <div className={styles.whyUsFrame}>
                <p className={styles.whyUsFont}>Почему выбирают нас:</p>
            </div>
            <div className={styles.reasonsWhy}>
                <ReasonOne/>
                <ReasonTwo/>
                <ReasonThree/>
                <ReasonFour/>
            </div>
        </div>
    );
};

export default WhyUs;
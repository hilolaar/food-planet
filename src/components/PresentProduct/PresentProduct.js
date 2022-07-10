import React from "react";
import styles from "../PresentProduct/PresentProduct.module.css";
import defaultText from "../../defaultText/defaultText";
import images from "../../img";

const PresentProduct = () => {
    return(
        <div className={styles.subNav}>
            <div className={styles.subNavLeft}>
                <div className={styles.subNavText}>
                    <p className={styles.boldText}>{defaultText.subNavTitle}</p>
                    <p className={styles.darkColor}>{defaultText.subNavDesc}</p>
                    <button className={styles.menuBtn}>ПЕРЕЙТИ В МЕНЮ ➤</button>
                </div>
            </div>
            <div className={styles.subNavRight}>
                <img className={styles.subNavImg} src={images.subNavLogo}/>
            </div>
        </div>
    )
}
export default PresentProduct;

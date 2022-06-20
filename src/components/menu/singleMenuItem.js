import React from "react";
import styles from "./menu.module.css";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";
import {Counter} from "../counter/counter";

const SingleMenuItem = () => {
    return (
        <div className={styles.singleItem}>
            <div className={styles.singleItemContent}>
                <img className={styles.singleItemSize} src={images.singleItem} alt=""/>
                <h4 className={styles.properSpacing}>Мексиканская</h4>
                <span className={styles.textAlign}>{defaultText.singleMenuItemDesc}</span>
                <h4 className={styles.properSpacing}>{defaultText.singleMenuItemPrice}</h4>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    )
}

export default SingleMenuItem;
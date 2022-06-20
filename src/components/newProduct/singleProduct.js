import React, {useState} from "react";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";
import styles from "./newproduct.module.css";
import {Counter} from "../counter/counter";

const SingleProduct = () => {

    return (
        <div className={styles.newProduct}>
            <img className={styles.newProductSize} src={images.newProduct} alt=""/>
            <div className={styles.newProductDesc}>
                <h4>Чизбургер</h4>
                <p className={styles.smallFont}>{defaultText.singleProductDesc}</p>
                <h4>{defaultText.singleProductPrice}</h4>
                <div>
                    <Counter/>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
import React from "react";
import defaultText from "../../defaultText/defaultText";
import styles from "./newproduct.module.css";
import {Counter} from "../counter/counter";
import AddButton from "../AddButton/AddButton";


const SingleProduct = (props) => {

    return (
        <div className={styles.newProduct}>
            <img className={styles.newProductSize} src={props.product.img_url} alt=""/>
            <div className={styles.newProductDesc}>
                <h4>{props.product.name}</h4>
                <p className={styles.smallFont}>{props.product.desc}</p>
                <h4>{defaultText.singleProductPrice}</h4>
                <div>
                    <Counter/>
                </div>
                <AddButton/>
            </div>
        </div>
    )
}

export default SingleProduct;
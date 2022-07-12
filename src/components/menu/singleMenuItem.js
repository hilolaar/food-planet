import React from "react";
import styles from "./menu.module.css";
import {Counter} from "../counter/counter";
import AddButton from "../AddButton/AddButton";



const SingleMenuItem = (props) => {

    const addCart = () => {
        let productsFromLocalStorage = {};
        const product = {};

        if (localStorage.getItem('burgers')){
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        product[props.id] = {
            ...props
        }

        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}));
    }


    return (
            <div className={styles.singleItem}>
                <div className={styles.singleItemContent}>
                    <img className={styles.singleItemSize} src={props.product.img_url} alt=""/>
                    <h4 className={styles.properSpacing}>{props.product.name}</h4>
                    <span className={styles.textAlign}>{props.product.desc}</span>
                    <h4 className={styles.properSpacing}>{props.product.price}</h4>
                </div>
                <Counter/>
                <AddButton
                    addCart={addCart}
                />

            </div>
        )

}

export default SingleMenuItem;
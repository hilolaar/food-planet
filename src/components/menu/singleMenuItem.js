import React from "react";
import styles from "./menu.module.css";
import {Counter} from "../counter/counter";
import AddButton from "../AddButton/AddButton";



const SingleMenuItem = (props) => {

    const addCart = () => {
        let productsFromLocalStorage = {};
        if (localStorage.getItem('cart')){
            productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        const product = {}
        product[props.id]={
            ...props
        };

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
                {/*<button onClick={addCart}>
                    В корзину
                </button>*/}
                <AddButton/>

            </div>
        )

}

export default SingleMenuItem;
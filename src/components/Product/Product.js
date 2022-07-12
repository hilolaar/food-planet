import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.products.img} alt="" className={styles.card_img} />
            <h4 className={styles.name}>{props.name}</h4>
            <p className={styles.price}>$ {props.price}</p>

            <button className={styles.card_button}>Купить</button>
        </div>
    );
};

export default Product;
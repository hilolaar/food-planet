import React from "react";
import styles from "./AddButton.module.css";
import {Link} from "react-router-dom";

const AddButton = (props) => {
    return (

             <Link  className={styles.card_button} to="/cart">В корзину</Link >


    )
}

export default AddButton;
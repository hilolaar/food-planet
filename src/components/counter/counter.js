import React, {useState} from "react";
import styles from "../newProduct/newproduct.module.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={styles.btnFrame}>
                <button className={styles.btnCount} onClick={() => {
                    (count === 0) ? setCount(prevState => prevState) : setCount(prevState => prevState - 1)
                }}>-</button>
                <span>{count}</span>
                <button className={styles.btnCount} onClick={() => setCount(prevState => prevState + 1)}>+</button>
            </div>
            <div>
                <button className={styles.btnCart} >В КОРЗИНУ</button>
            </div>
        </>
    )
}
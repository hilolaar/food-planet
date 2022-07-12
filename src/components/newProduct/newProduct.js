import React, {useEffect , useState} from "react";
import styles from "./newproduct.module.css";
import SingleProduct from "./singleProduct";
import {BASE_URL} from "./../../constants/index";

const NewProduct = () => {
    const [burgers, setBurgers] = useState([]);

    const getBurgers = () => {
        let url = BASE_URL + 'burgers';
        fetch(url)
            .then(response => response.json())
            .then(data => setBurgers(data));
    }

    useEffect(getBurgers, []);

    return (
        <>
            <div className={styles.viewport}>
                <div className={styles.sectionOne}>
                    <div className={styles.navBar}>
                        <span className={styles.navText}>Новинки</span>
                        <div className={styles.navDivider}>
                            <div className={styles.navBarContent}>
                                <nav>
                                    <ul className={styles.navMenu}>
                                        <li>Пицца</li>
                                        <li>Бургер</li>
                                        <li>Суши</li>
                                        <li>Роллы</li>
                                        <li>Салаты</li>
                                        <li>Десерты</li>
                                        <li>Напитки</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionThree}>
                    {
                        burgers.map((product, num) => {
                            return (
                                <SingleProduct product={product}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

// fetch, axios

export default NewProduct;



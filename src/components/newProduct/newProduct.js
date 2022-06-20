import React , {useEffect, useState} from "react";
import styles from "./newproduct.module.css";
import SingleProduct from "./singleProduct";
import {BASE_URL} from "../../constants";

const NewProduct = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = BASE_URL + '/newProducts';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProducts, []);


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
                                        <li>Салаты.</li>
                                        <li>Десерты.</li>
                                        <li>Напитки.</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionThree}>
                    {
                        products.map((item) => {
                            return (
                                <NewProduct
                                    key={item.id}
                                    name={item.name}
                                    img={item.img_url}
                                    price={item.price}
                                    id={item.id}
                                    desc={item.desc}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NewProduct;
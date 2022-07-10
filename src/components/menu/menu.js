import React, {useEffect, useState} from "react";
import styles from "./menu.module.css";
import SingleMenuItem from "./singleMenuItem";
import {BASE_URL} from "../../constants";


const Menu = () => {

    const [pizza, setPizzas] = useState([]);

    const getPizzas = () => {
        let url = BASE_URL + 'pizza';
        fetch(url)
            .then(response => response.json())
            .then(data => setPizzas(data));
    }

    useEffect(getPizzas, []);
    return (
        <div className={styles.viewport}>
            <div className={styles.sectionOne}>
                <div className={styles.navBar}>
                    <span className={styles.navText}>Меню</span>
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
            <div className={styles.sortNav}>
                <span className={styles.sortText}>Сортировать по:</span>
                <select>
                    <option value="default">По умолчанию</option>
                </select>
            </div>
            <div className={styles.MenuLine}>
                {
                    pizza.map((product, num) => {
                        return (
                            <SingleMenuItem product={product}/>

                        )
                    })
                }
            </div>
            <button className={styles.extendBtn}>ПОКАЗАТЬ ЕЩЕ</button>
        </div>
    )
}

export default Menu;
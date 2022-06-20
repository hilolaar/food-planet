import React from "react";
import styles from "./menu.module.css";
import SingleMenuItem from "./singleMenuItem";

const Menu = () => {
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
            <div className={styles.MenuLineup}>
                <SingleMenuItem/>
                <SingleMenuItem/>
                <SingleMenuItem/>
                <SingleMenuItem/>
            </div>
            <button className={styles.extendBtn}>ПОКАЗАТЬ ЕЩЕ</button>
        </div>
    )
}

export default Menu;
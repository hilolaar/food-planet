import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./nav.module.css";
import images from "../../img";
import defaultText from "../../defaultText/defaultText";

const Nav = () => {
    return (
        <>
            <div className={styles.navAligner1}>
                <div className={styles.navAligner2}>
                    <nav className={styles.navContent}>
                        <ul className={styles.navMenu}>
                            <li className={styles.navLogo}>
                                <img src={images.navLogo}/>
                            </li>
                            <NavLink to="/">
                                <li>Главная</li>
                            </NavLink>
                            <NavLink to="/menu">
                                <li>Меню</li>
                            </NavLink>
                            <NavLink to="/delivery">
                                <li>Доставка</li>
                            </NavLink>
                            <NavLink to="/contacts">
                                <li>Контакты</li>
                            </NavLink>
                            <NavLink to="/phone">
                                <div className={styles.navImg1}>
                                    <img src={images.phoneLogo}/>
                                </div>
                                <li>+996500405988</li>
                            </NavLink>
                            <NavLink to="/cart">
                                <div className={styles.navImg2}>
                                    <img src={images.cartLogo}/>
                                </div>
                                <li>1</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Nav;
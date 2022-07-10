import React ,{ useEffect, useState}from "react";
import styles from "./CartPage.module.css";
import images from "../../img";
import {Counter} from "../../components/counter/counter";
import {BASE_URL} from "../../constants";

const CartPage = () => {
    const [cartProducts, setCartProducts] = useState([]);

    const getProductsFromStorage= () => {
        let url = BASE_URL + 'list';
        fetch(url)
            .then(response => response.json())
            .then(data => setCartProducts(data));
    }
    useEffect(getProductsFromStorage, []);




    return (
        <div className="cart">
            <h4>Корзина</h4>
            <div className={styles.product_table}>
                <table>
                    <tbody>
                    <tr>
                        <th>№</th>
                        <th>Наименование</th>
                        <th>Товар</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Удалить</th>
                    </tr>
                    {
                        cartProducts.map((prodCart, )  => {
                            return(
                                <tr className={styles.product_item}>
                                    <td></td>
                                    <td>{prodCart.name}</td>
                                    <td ><img className={styles.imagePr} src={prodCart.img_url} alt=""/></td>
                                    <Counter/>
                                    <td>{prodCart.price}</td>
                                </tr>
                            )

                    })
                    }
                    </tbody>

                </table>
            </div>


        </div>
)
}

export default CartPage;


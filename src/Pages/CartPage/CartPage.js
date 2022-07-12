/*
import React ,{ useEffect, useState}from "react";
import styles from "./CartPage.module.css";
import {BASE_URL} from "../../constants";

const CartPage = () => {
    const [products, setProducts] = useState([]);

    const getProductsFromStorage = () => {
        let url = BASE_URL + 'list';
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }


   /!* const deleteProduct = (product) => {
        let products = JSON.parse(localStorage.getItem('cart'));
        delete products[product.id];
        addStorage('cart', JSON.stringify(products));
        getProductsFromStorage();
    }


    const increaseProduct = (product) => {
        if(!product.quantity){
            product.quantity = 2;
        } else {
            let count = product.quantity;
            product.quantity = ++count;
        }
        let products = JSON.parse(localStorage.getItem('cart'));
        products[product.id] = product;
        addStorage('cart', JSON.stringify(products));
        getProductsFromStorage();
    }

    const decreaseProduct = (product) => {
        if(!product.quantity){
            deleteProduct(product);
        } else {
            let count = product.quantity;
            product.quantity = --count;

            if(product.quantity === 0){
                deleteProduct(product);
                return;
            }

            let products = JSON.parse(localStorage.getItem('cart'));
            products[product.id] = product;
            addStorage('cart', JSON.stringify(products));
            getProductsFromStorage();
        }
    }



    const addStorage = (key, data) => localStorage.setItem(key, data);*!/
    useEffect(getProductsFromStorage, []);


/!*const CartPage = ({cartItems, onRemoveItem, onAddItem, onRemoveFromCart, modalActive, setModalActive}) => {

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );*!/

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
                        products.map((product, num)  => {
                            return(
                                <tr className={styles.product_item}>
                                    <td>1</td>
                                    <td>{product.name}</td>
                                    <td ><img className={styles.imagePr} src={product.img_url} alt=""/></td>
                                    <td>
                                        <div>
                                            <button>+</button>
                                            <span>{products.quantity ? products.quantity : 1}</span>
                                            <button>-</button>

                                        </div>
                                    </td>
                                    <td>{product.price}</td>
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


*/

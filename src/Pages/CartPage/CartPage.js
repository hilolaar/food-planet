// import React ,{ useEffect, useState}from "react";
// import styles from "./CartPage.module.css";
// import {BASE_URL} from "../../constants";
// import SingleMenuItem from "../../components/menu/singleMenuItem";
//
// const CartPage = () => {
//     const [products, setProducts] = useState([]);
//
//     const getProductsFromStorage = () => {
//         let url = BASE_URL + 'products';
//         fetch(url)
//             .then(response => response.json())
//             .then(data => setProducts(data));
//     }
//
//
//
//     useEffect(getProductsFromStorage, []);
//
//
//
//     return (
//         <div className="cart">
//             <h4>Корзина</h4>
//             <div className={styles.product_table}>
//                 <table>
//                     <tbody>
//                     <tr>
//                         <th>№</th>
//                         <th>Наименование</th>
//                         <th>Товар</th>
//                         <th>Количество</th>
//                         <th>Цена</th>
//                         <th>Удалить</th>
//                     </tr>
//                     {/*{
//                         products.map((product, num)  => {
//                             return(
//                                 <tr className={styles.product_item}>
//                                     <td>1</td>
//                                     <td>{product.name}</td>
//                                     <td ><img className={styles.imagePr} src={product.img_url} alt=""/></td>
//                                     <td>
//                                         <div>
//                                             <button>+</button>
//                                             <span>{products.quantity ? products.quantity : 1}</span>
//                                             <button>-</button>
//
//                                         </div>
//                                     </td>
//                                     <td>{product.price}</td>
//                                 </tr>
//                             )
//
//                     })*/}
//                     }
//                     </tbody>
//
//                 </table>
//             </div>
//
//
//         </div>
// )
// }
//
// export default CartPage;
//
//



import React from 'react';
import styles from './CartPage.module.css'
import {Link} from "react-router-dom";

const CartPage = () => {
    const cartItems = localStorage.getItem('cart')
        ? Object.values(JSON.parse(localStorage.getItem('cart')) )
        : []

    const deleteFromCart = (product) => {
        const updatedCart = cartItems.filter(cartProduct => cartProduct.id !== product.id)

        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }


    return (
        <div className={styles.product_table}>
            <div className={styles.title}>
                <p>Корзина</p>
            </div>

            {
                cartItems.length === 0  ?
                    (<div className={styles.empty_cart}>
                        <p>В корзине пусто</p>
                    </div>) : (
                        <table>
                            <tbody>
                            <tr>
                                <th>#</th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                                <th>&nbsp;</th>
                            </tr>
                            {
                                cartItems.map((product, idx) => {
                                    return (
                                        <tr key={idx} className={styles.items}>
                                            <td>&nbsp;</td>
                                            <td><img className={styles.card_img} src={product.img} alt=""/></td>
                                            <td>{product.name}</td>
                                            <td>{product.price} сом</td>
                                            <td>{1}</td>
                                            <td onClick={() => deleteFromCart(product)} style={{cursor: 'pointer'}}>Удалить</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    )
            }


            <div className={styles.buttons}>
                <button>Оплатить</button>
                <Link to="/products">
                    <button>На главную</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;

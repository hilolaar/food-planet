import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./Pages/main/main";
import Nav from "./components/nav/nav";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Footer from "./components/footer/footer";
import CartPage from "./Pages/CartPage/CartPage";


function App() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;

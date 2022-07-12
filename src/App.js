import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./Pages/main/main";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
//import CartPage from "./Pages/CartPage/CartPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
    return (
        <div>
            <Nav/>

                <Routes>
                    <Route path="/product" element={<ProductPage/>}/>
                    <Route path="/" element={<Main/>}/>
                </Routes>


            <Footer/>
        </div>
    )
}

export default App;

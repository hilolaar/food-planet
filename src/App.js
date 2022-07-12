import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./Pages/main/main";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
    return (
        <div>
            <Nav/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            <Footer/>
        </div>
    )
}

export default App;

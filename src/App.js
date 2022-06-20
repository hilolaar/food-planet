import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./Pages/main/main";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div >
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;

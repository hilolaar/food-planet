import React from 'react';
import NewProduct from "../../components/newProduct/newProduct";
import Menu from "../../components/menu/menu";
import WhyUs from "../../components/whyUs/whyUs";
import Feedback from "../../components/feedback/feedback";

const Main = () => {
    return (
        <>
            <NewProduct/>
            <Menu/>
            <WhyUs/>
            <Feedback/>
        </>
    );
};

export default Main;
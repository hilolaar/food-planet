import React from 'react';
import NewProduct from "../../components/newProduct/newProduct";
import Menu from "../../components/menu/menu";
import WhyUs from "../../components/whyUs/whyUs";
import Feedback from "../../components/feedback/feedback";
import PresentProduct from "../../components/PresentProduct/PresentProduct";

const Main = () => {
    return (
        <>
            <PresentProduct/>
            <NewProduct/>
            <Menu/>
            <WhyUs/>
            <Feedback/>
        </>
    );
};

export default Main;
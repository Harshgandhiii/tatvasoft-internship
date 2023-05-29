import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CartPage() {
    return(
        <>
        <Header/>
        <h1>Cart page</h1>
        <Link to='/cart-item'>Go to cart item</Link>
        <Footer/>
        </>
    )
}

export default CartPage;
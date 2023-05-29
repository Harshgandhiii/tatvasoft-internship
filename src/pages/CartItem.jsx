import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CartItem() {
    return(
        <>
        <Header/>
        <h1>Cart Items</h1>
        <ul>
            <li>Book 1</li>
            <li>Book 2</li>
            <li>Book 3</li>
            <li>Book 4</li>
        </ul>
        <Link to='/cart-page'>Go to cart page</Link>
        <Footer/>
        </>
    ) 
}

export default CartItem;
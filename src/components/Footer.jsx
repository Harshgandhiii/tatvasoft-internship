import React from "react";
import '../pages/Footer.css';
import img1 from '../images/tatvasoft-logo.png';

function Footer() {
    return(
        <>
        <div className="container">
            <img src={img1} alt="img1" height={'45px'} width={'170px'}/>
            <p>@2016 Tatvasoft.com all rights reserved</p>
        </div>
        </>
    )
}

export default Footer;
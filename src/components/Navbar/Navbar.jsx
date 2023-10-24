import React from "react";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({links}) => {



    return (
        <>
        <nav>
            <h1 className="title">Bienvenidos a mi E-COMMERCE </h1>
            <ul className="lista">
                <li><a href="#">PRODUCTOS</a></li>
                <li><a href="#">CONTACTO</a></li>
                <li><a href="#">NOSOTROS</a> </li>
            </ul>

            <CartWidget/>
        </nav>

    
        </>
    )
}

export default Navbar;
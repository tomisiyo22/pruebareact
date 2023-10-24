import React from 'react';
import "./cartWidget.css"
import { BiCartDownload } from "react-icons/bi";

const CartWidget = () => {
    return (
        <div>
            <BiCartDownload className='icon-car'/>
            <p className='contador'>0</p>
        </div>
    );
};

export default CartWidget;
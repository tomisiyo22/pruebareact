import React from "react";
import "./itemListContainer.css"

const ItemListContainer = ({greeting}) => {

    return (
        <h1 className="message">{greeting}</h1>
    )
}

export default ItemListContainer
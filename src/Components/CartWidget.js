import React, { useContext } from 'react';
import { cartContext, useCartContext } from '../context/cartContext'; // Importa cartContext correctamente

const CartWidget = () => {
    const { cart } = useCartContext();

    return (
        <div>
            <i className="bi bi-cart-plus-fill"></i>
            <span>{cart.length}</span>
        </div>
    );
}

export default CartWidget;

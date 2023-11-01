import React from 'react'
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import ItemCart from './ItemCart'
const Cart = () => {
    const {cart, totalPrice} = useCartContext();


    
    if(cart.length === 0){
        return(
            <>
            <p>El carrito esta vacío</p>
            <Link to='/'>Realizar compra</Link>
            </>
            );
    }


  return (
    <>
        {cart.map((product)=>(
        <ItemCart key = {product.id} product={product}/>
        ))}
        <p>Total: {totalPrice()}</p>
        <Link to='/checkout'>
            {''}
            <button>Finalizar la compra</button>
        </Link>
    </>
  );
};

export default Cart
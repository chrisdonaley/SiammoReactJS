import React from 'react'
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer:{
            name:'pepito',
            email: 'pepito@gmail.com',
            phone: '1111111111',
            adress: '123 abc st',
        },
        items: cart.map ((product)=>({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
        })),
        total : totalPrice(),
    }

    const handleClick = ()=>{
        const db = getFirestore();
        const orderCollection = collection (db, 'order');
        addDoc (orderCollection, order).then(({id})=> console.log(id));
    };

    
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
        <button onClick={handleClick}>Finalizar compra</button>
    </>
  );
};

export default Cart
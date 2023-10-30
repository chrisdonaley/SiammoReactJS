import React from 'react';
import { useCartContext } from '../context/cartContext';

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.img} alt ={product.title}/>
        <div>
            <p>Nombre: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: ${product.quantity * product.precio}</p>
            <button onClick={()=> removeProduct(product.id)}>Eliminar producto</button>
        </div>
    </div>
  )
}

export default ItemCart
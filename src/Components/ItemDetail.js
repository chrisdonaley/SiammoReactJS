import React, {useState} from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {useCartContext} from '../context/cartContext';

const ItemDetail = ({item}) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) =>{
    setGoToCart(true);
    addProduct (item, quantity);
  }

  return (
    <div className='row'>
        <div className='col-md-4 offset-md-4'>
            <img src={item.img} className='img-fluid' alt ='{item.title}'/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>Cantidad en stock: {item.stock}</p>
        </div>
        <div>
            {goToCart ? <Link to = '/cart'>Finalizar Compra</Link> : <ItemCount stockItems={10} initial = {0} onAdd={onAdd}/> }
        </div>
        
    </div>
  )
}

export default ItemDetail
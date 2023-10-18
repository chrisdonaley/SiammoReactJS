import React from 'react'
import {useState, useContext} from "react";
import { cartContext } from '../context/cartContext';

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const {addProduct} = useContext(cartContext)

    const incrementStock = () =>{
        if (counter < stock ){
            setCounter(counter+1);
        }
    }

    const decrementStock = () =>{
        if (counter > 1){
            setCounter (counter-1);
        }
    }

    const handleAdd =()=>{
        addProduct(counter);
    }

  return (
    <div className='container' id ='itemcount'>
        <div className='row mb-3'>
            <div className='col-md-2'> 
                <div className='btn-group' role='group' aria-label='Basic outlined example'>
                    <button type='button' onClick={decrementStock}>➖</button>
                    <button type='button' >{counter}</button>
                    <button type='button' onClick={incrementStock}>➕</button>
                </div>
            </div>  
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <button onClick={handleAdd}>Agregar al carrito</button>
            </div>

        </div>
    </div>
  )
}

export default ItemCount
import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import arrayProductos from './Json/arrayProductos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        const promesa = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(arrayProductos.find(item=> item.id === parseInt(id)));
                
            },3000);
        })
    promesa.then((data)=>{
        setItem(data)
    })
    },[id])


  return (
    <div className='container'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import arrayProductos from './Json/arrayProductos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const promesa = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(arrayProductos.find(item=> item.id === parseInt(id)));
                
            },2000);
        })
    promesa.then((data)=>{
        setItem(data)
        setLoading(false)
    })
    },[id])

    if (loading) return <h2>Esta cargando el producto...</h2>
  return (
    <div className='container'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
import React, { useCallback, useContext } from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { cartContext } from '../context/cartContext'
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    const miContexto = useContext (cartContext) 

    useEffect(() =>{
        const querydb = getFirestore;
        const queryCollection = collection(querydb, 'products');
        getDocs(queryCollection)
        .then(res=>setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))
    },[id])

return (
    <div className='container'>
        <div className='row'>
            <ItemList item={item}/>
        </div>

    </div>
)
}

export default ItemListContainer
import React, { useCallback, useContext } from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'

const ItemListContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (id){
            const queryFilter = query(queryCollection, where('categoryId', '==', id));
            getDocs(queryFilter).then((res)=>setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
        }else{
            getDocs(queryCollection).then((res)=>setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
        }
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
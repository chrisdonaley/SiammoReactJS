import React from 'react'
import Item from './Item'

const ItemList = ({item}) => {
  return (
    <div className='item' id='itemList'>
        {item.map(i =>
            <div className='col-md-3'
            key={item.id}>
        <Item items={item}/>
        </div>
        )}
    </div>
    )
}

export default ItemList
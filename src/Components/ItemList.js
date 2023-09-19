import React from 'react'

const ItemList = ({items}) => {
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
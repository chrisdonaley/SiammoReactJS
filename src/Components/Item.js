import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({items}) => {
  return(
    <Link to ={'/item/'+ items.id} className='text-decoration-none'>
        <div className='container'>
            <div className='card-border border-0'>
                <img src={items.img} className='card-img-top' alt ='{item.name}'/>
                <div className='card-body text-center'>
                    <p className='card-text'>{item.name}</p>
                </div>
                <div className='card-body text-center'>
                    <p className='card-text'>{item.description}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Item
import React, {useContext} from 'react' 
import CartContext, { cartContext } from '../context/cartContext'

const CartWidget = () => {

    const {cart} = useContext(cartContext)
return (
    <div>
        <i class="bi bi-cart-plus-fill"></i>
        <span>{cart.length}</span>
    </div>
)
}

export default CartWidget
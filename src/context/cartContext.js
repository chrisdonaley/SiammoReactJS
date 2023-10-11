import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    return(
    <cartContext.Provider value={{cart}}>
        {children}
    </cartContext.Provider>)

}

export default CartContext
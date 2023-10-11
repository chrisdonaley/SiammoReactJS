import { createContext } from "react";

export const cartContext = createContext([])

const CartContext = ({children}) => {
    return(
    <cartContext.Provider value={0}>
        {children}
    </cartContext.Provider>)

}

export default CartContext
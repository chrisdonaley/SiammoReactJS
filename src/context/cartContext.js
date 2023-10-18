import { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (producto) => {
        setCart([...cart, producto]);
    }

    return (
        <cartContext.Provider value={{ cart, addProduct }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContext;

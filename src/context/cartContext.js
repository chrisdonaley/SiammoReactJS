import { createContext, useState, useContext } from "react";

export const cartContext = createContext([]);

export const useCartContext = () => {
    const context = useContext(cartContext);
    return context;
};

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

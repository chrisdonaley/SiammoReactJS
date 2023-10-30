import { createContext, useState, useContext } from "react";

export const cartContext = createContext([]);

export const useCartContext = () => {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error('useCartContext debe ser utilizado dentro de un proveedor CartContext');
    }
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

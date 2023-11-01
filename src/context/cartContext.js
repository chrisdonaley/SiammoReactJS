import React, {useState, useContext } from "react";

const cartContext = React.createContext('');


export const useCartContext =()=> useContext(cartContext);
    

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addProduct = (item, quantity) => {
        if (itemFound(item.id)){
            setCart(
                cart.map((products)=> {
                return products.id === item.id ? {...products, quantity: products.quantity + quantity} : products;
            }),
            );
            }else{
            setCart([...cart, {...item, quantity}]);
        }
    };

    const totalPrice = ()=>{
        return cart.reduce((prev, act) => prev + act.quantity*act.price, 0);
    }

    const totalProducts = () =>
    cart.reduce (
        (acum, productoActual) => acum + productoActual.quantity,0,
    );
    
    const clearCart = ()=> setCart ([]);

    const itemFound = (id) =>
        cart.find((products)=> products.id === id ? true: false);

    const removeProduct = (id) =>
        setCart (cart.filter((products) => products.id !== id));    




    return (
        <cartContext.Provider 
        value={{ 
        cart, 
        addProduct, 
        totalPrice, 
        totalProducts, 
        removeProduct, 
        itemFound, 
        clearCart,}}
        >
            {children}
        </cartContext.Provider>
    );
}
export default CartProvider;

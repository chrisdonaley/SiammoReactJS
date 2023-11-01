import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Error404 from './Components/Error404';
import CartProvider from './context/cartContext';
import Cart from './Components/Cart';
import {Checkout} from './Components/Checkout'

function App() {
  return (
    
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/checkout'} element={<Checkout/>}/>
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    
  );
}

export default App;

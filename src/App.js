import React from 'react';
import {BrowseRouter, Routes, Route} from 'react-router-dom'
import Saludo from './Components/Saludo';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer' 
import Error404 from './Components/Error404';

function App() {
  return (
    <div>
      <BrowseRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </BrowseRouter>
    </div>
  );
}

export default App;

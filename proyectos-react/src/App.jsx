import './App.css';
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/componentNavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListcategoria from './components/ItemListaCategory/ItemListaCategory';
import AddOrders from './components/AddOrders/AddOrders';
import Cart from './components/Cart/Cart';


function App() {

  const [count, setCount] = useState(0);

  return (

    <div className='app'>
      <BrowserRouter>
        <NavBar count={count} />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer count={count} setCount={setCount} />} />
          <Route exact path="/categoryFilter/:categoriaId" element={<ItemListcategoria />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <AddOrders />
      </BrowserRouter>
    </div>
  );

}
export default App;

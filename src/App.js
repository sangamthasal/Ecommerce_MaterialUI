import React from 'react';
import './App.css';
import{Route,Routes}from "react-router";
import HomeScreen from './Screens/HomeScreen';
import CategoryScreen from './Screens/CategoryScreen';
import CartScreen from './Screens/CartScreen';
import ProductDetail from './Components/Card/ProductDetail';
import ContextState from './Context/ContextState';


function App() {
  return (
    <div>
  <ContextState>
        <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="Home" element={<HomeScreen/>} />
        <Route path="Category" element={<CategoryScreen/>}/>
        <Route path="Cart" element={<CartScreen/>}/>
        <Route path='ProductDetail' element={<ProductDetail/>}/>
      </Routes>
  </ContextState>

    </div>
  );
}

export default App;

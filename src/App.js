import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import Cart from './Pages/Cart';
import Navigation from './Components/Navigation';
import SingleProduct from './Pages/SingleProduct';
import { CartContext } from './CartContext';
import { getCart, storeCart } from './helpers';

const App = () => {

  const [ cart, setCart ] = useState({});
// Fetch cart from local storage
useEffect(() => {
  getCart().then(cart => {
    setCart(JSON.parse(cart));
  });
}, []);

useEffect(() => {
    storeCart(JSON.stringify(cart));
}, [cart]);


  return (
    <Router>
      < CartContext.Provider value={{ cart, setCart }} >
            <Navigation />
                <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/products" exact element={ <ProductsPage/> } />
                  <Route path="/products/:_id" exact element={ <SingleProduct />} />
                  <Route path="/cart" element={ <Cart/> } />
          </Routes>
      </CartContext.Provider>
    </Router>
  )
}

export default App
import { HomePage } from './pages/HomePage.jsx';
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { Orders } from './pages/OrdersPage.jsx';
import './App.css' 

function App() {

  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    let response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => { 
    loadCart();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart}/>}></Route>
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="/orders" element={<Orders cart={cart} />} />
    </Routes>
  )
}

export default App

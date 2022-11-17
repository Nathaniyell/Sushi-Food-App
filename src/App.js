import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Homepage from './Pages/Homepage';
import Menu from './Pages/Menu';


function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='menu' element={<Menu />} />
      <Route path='cart' element={<Cart />} />
     </Routes>
     
    </div>
  );
}

export default App;

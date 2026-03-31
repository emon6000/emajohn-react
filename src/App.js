import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route path='/product/:productkey' element={<ProductDetails/>}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

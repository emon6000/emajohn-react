import React, { useState } from 'react';
import product from '../../fakeData/products.js';
import './Shop.css';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';

const Shop = () => {
  const first10 = product;
  const [products] = useState(first10);
  const [cart,setCart] = useState([]);
  const handleAddProduct = (prod) => {
    console.log('product added',prod);
    const newCart = [...cart,prod];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product 
          handle = {handleAddProduct}
          showAddToCart={true}
          product={pd}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

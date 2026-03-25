import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    (total += product.price);
    total.toFixed(2);
  }
  let shipping = 0;
  if (total > 500) {
    shipping = 0;
  } else if (total > 300) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
//   const tax = Math.round(total / 10);
const tax = (total / 10).toFixed(2);

const grandtotal = (total + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <h4>Order Summary</h4>
      <h3>Items Ordered:{cart.length} </h3>
      <p>
        <small>Shipping Cost = {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT : {tax}</small>
      </p>
      <b>
        <p>Total Price:{grandtotal}</p>
      </b>
    </div>
  );
};

export default Cart;

import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const { img, name, seller, price, stock } = props.pro;
  return (
    <div className="product">
      <div>
        <img src={img} alt="productimage" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by {seller}</small>
        </p>
        <b>
          <p>Price : ${price}</p>
        </b>
        <p>Only {stock} items left</p>
        <button className="btn"
        onClick={()=>props.handle(props.pro)}>
          <FontAwesomeIcon icon={faCartArrowDown} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

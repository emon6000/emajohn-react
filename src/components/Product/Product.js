import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { img, name, seller, price, stock ,key} = props.product;
  const Btn = props.showAddToCart;
  return (
    <div className="product">
      <div>
        <img src={img} alt="productimage" />
      </div>
      <div>
        <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
        <p>
          <small>by {seller}</small>
        </p>
        <b>
          <p>Price : ${price}</p>
        </b>
        <p>Only {stock} items left</p>
        {Btn && <button className="btn"
        onClick={()=>props.handle(props.pro)}>
          <FontAwesomeIcon icon={faCartArrowDown} />
          add to cart
        </button>}
      </div>
    </div>
  );
};

export default Product;

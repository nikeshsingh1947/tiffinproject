import React from 'react';
import './Cartbutton.css';
import { Link } from 'react-router-dom';
const CartButton = () => {
    const arr= JSON.parse(localStorage.getItem("tiffincart"))||[];
           
  return (
    <Link to={"/cart"}><div className="cart-button-container" >
      <span className="cart-icon">&#128722;</span>
      <span className="item-count">{arr.length}</span>
    </div>
    </Link>
  );
};

export default CartButton;
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, price } = props.player;
    return (
      <ul className="list-group">
        <li className="list-group-item d-flex my-2 justify-content">
          <span>{name} </span><span> ${price}</span>
        </li>
      </ul>
    );
  
};

export default Cart;
import React from 'react';
import './Cart.css';


const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.convertedPrice.toFixed(2)} {item.currency}</span>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;






import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, RemoveItemToCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>A am the checkout page</h1>
      <divs>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>

              <span onClick={() => RemoveItemToCart(cartItem)}>
                decrement
              </span>
              <span onClick={() => addItemToCart(cartItem)}>
                increment
              </span>
            </div>
          );
        })}
      </divs>
    </div>
  );
};

export default Checkout;

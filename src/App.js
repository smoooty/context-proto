import React, { useReducer, useState, useEffect } from 'react';

import { addToCart, updateCart, removeItem } from './cartFunctions';

import productsConfig from './productsConfig';

import { ShopDispatch } from './shop-context';

import './App.css';
import Headline from './Headline';
import Cart from './Cart';
import Product from './Product';
import Scrub from './Scrub';
import Form from './Form';
import Circle from './Circle';
import CartIcon from './CartIcon';

function App() {
  // Initial cart value,
  // Get value from localStorage
  // Or default to empty array
  const intitialCart = JSON.parse(window.localStorage.getItem('cart')) || [];
  // This is the initial total of items in cart
  const intitialTotal = intitialCart.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const intitialPrice = intitialCart.reduce((acc, item) => acc + item.price, 0);
  const [totalProducts, setTotal] = useState({
    totalAmount: intitialTotal,
    totalPrice: intitialPrice,
  });

  // This is the useReducer declaration
  // Arguments are a state and action
  // Needs to return a state every case
  const [state, dispatch] = useReducer(shopReducer, {
    view: 'shop',
    isCartOpen: false,
    cart: intitialCart,
  });

  function shopReducer(state, action) {
    switch (action.type) {
      case 'add':
        const addedCart = addToCart(action.product, state.cart);
        return {
          view: 'shop',
          isCartOpen: state.isCartOpen,
          cart: addedCart,
        };
      case 'update':
        const updatedCart = updateCart(action.product, state.cart);
        console.log('update', updatedCart);
        return {
          view: 'shop',
          isCartOpen: updatedCart.length > 0 ? state.isCartOpen : false,
          cart: updatedCart,
        };
      case 'remove':
        const removedCart = removeItem(action.product, state.cart);
        return {
          view: 'shop',
          isCartOpen: removedCart.length > 0 ? state.isCartOpen : false,
          cart: removedCart,
        };
      case 'checkout':
        return {
          view: 'checkout',
          isCartOpen: state.isCartOpen,
          cart: state.cart,
        };
      case 'cartOpen':
        return {
          view: 'shop',
          isCartOpen: !state.isCartOpen,
          cart: state.cart,
        };
      default:
        return state;
    }
  }

  // Second arg to useEffect means it will only update when specified var changes
  useEffect(
    () => {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      setTotal({
        totalAmount: state.cart.reduce((acc, item) => acc + item.amount, 0),
        totalPrice: state.cart.reduce((acc, item) => acc + item.price, 0),
      });
    },
    [state.cart]
  );

  const shopView = (
    <>
      <Cart />
      <Scrub />
      {productsConfig.map((product, i) => (
        <Product id={`product${i}`} product={product} />
      ))}
    </>
  );
  return (
    <div className="App">
      {/* This is the context provider */}
      <ShopDispatch.Provider value={{ totalProducts, state, dispatch }}>
        <Headline />
        <Circle />
        <CartIcon />
        {state.view === 'shop' && shopView}
        {state.view === 'checkout' && <Form />}
      </ShopDispatch.Provider>
    </div>
  );
}

export default App;

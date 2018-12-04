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

function App() {
  // Initial cart value,
  // Get value from localStorage
  // Or default to empty array
  const intitialCart = JSON.parse(window.localStorage.getItem('cart')) || [];
  // This is how we declare the state
  const [cart, setCart] = useState(intitialCart);
  // This is the initial total of items in cart
  const intitialTotal = intitialCart.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  const [totalProducts, setTotal] = useState(intitialTotal);

  // This is the useReducer declaration
  // Arguments are a state and action
  // Needs to return a state every case
  const [state, dispatch] = useReducer(shopReducer, {
    view: 'shop',
    isCartOpen: false,
  });

  function shopReducer(state, action) {
    switch (action.type) {
      case 'add':
        setCart(addToCart(action.product, cart));
        return { view: 'shop', isCartOpen: state.isCartOpen };
      case 'update':
        setCart(updateCart(action.product, cart));
        return { view: 'shop', isCartOpen: state.isCartOpen };
      case 'remove':
        setCart(removeItem(action.product, cart));
        return { view: 'shop', isCartOpen: state.isCartOpen };
      case 'checkout':
        return { view: 'checkout', isCartOpen: state.isCartOpen };
      case 'cartOpen':
        return { view: 'shop', isCartOpen: !state.isCartOpen };
      default:
        return state;
    }
  }

  // Second arg to useEffect means it will only update when specified var changes
  useEffect(
    () => {
      console.log('use effect', cart);
      window.localStorage.setItem('cart', JSON.stringify(cart));
      setTotal(cart.reduce((acc, item) => acc + item.amount, 0));
    },
    [cart]
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
      <ShopDispatch.Provider value={{ cart, totalProducts, state, dispatch }}>
        <Headline />
        <Circle />
        {state.view === 'shop' && shopView}
        {state.view === 'checkout' && <Form />}
      </ShopDispatch.Provider>
    </div>
  );
}

export default App;

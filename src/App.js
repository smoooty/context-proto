import React, { useReducer, useState, useEffect } from 'react';

import productsConfig from './productsConfig';

import { ShopDispatch } from './shop-context';

import './App.css';
import Headline from './Headline';
import Cart from './Cart';
import Product from './Product';
import Scrub from './Scrub';
import Form from './Form';

// Utility function to group the products by name
function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({ amount: obj.amount, price: obj.price });
    return acc;
  }, {});
}

// Add to cart function
function addToCart(product, cart) {
  const scopeState = cart;
  scopeState.push(product);

  const amalgam = groupBy(scopeState, 'name');
  let val;
  const array = [];
  Object.entries(amalgam).forEach(([key, value]) => {
    val = {
      name: key,
      price: value
        .map(thing => thing.price)
        .reduce((acc, item) => acc + item, 0),
      amount: value
        .map(thing => thing.amount)
        .reduce((acc, item) => acc + item, 0),
    };
    array.push(val);
  });
  return array;
}

function updateCart(product, cart) {
  console.log('product - update', product);
  const scopeState = cart;

  const filteredState = scopeState.filter(item => item.name === product.name);
  //console.log(scopeState.splice(filteredState));
  console.log('filteredState', filteredState);
  //filteredState[0].amount = product.amount;
  filteredState[0].price =
    (filteredState[0].price / filteredState[0].amount) * product.amount;
  filteredState[0].amount = product.amount;
  console.log(filteredState[0]);
  console.log('scopeState', scopeState);

  const array = [];
  array.push(...scopeState);
  return array;
}

// Remove item from cart function
function removeItem(product, cart) {
  const scopeState = cart;
  return scopeState.filter(item => item.name !== product.name);
}

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
  const [state, dispatch] = useReducer(shopReducer, { view: 'shop' });

  function shopReducer(state, action) {
    switch (action.type) {
      case 'add':
        setCart(addToCart(action.product, cart));
        return { view: 'shop' };
      case 'update':
        setCart(updateCart(action.product, cart));
        return { view: 'shop' };
      case 'remove':
        setCart(removeItem(action.product, cart));
        return { view: 'shop' };
      case 'checkout':
        return { view: 'checkout' };
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
      <ShopDispatch.Provider value={{ cart, totalProducts, dispatch }}>
        <Headline />
        {state.view === 'shop' && shopView}
        {state.view === 'checkout' && <Form />}
      </ShopDispatch.Provider>
    </div>
  );
}

export default App;

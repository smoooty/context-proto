import React, { useContext, useState } from 'react';
import { ShopDispatch } from '../shop-context';

import {
  CartContainer,
  ProductDisplay,
  Name,
  RemoveContainer,
  CheckoutContainer,
  H1,
  H2,
  H3,
} from './styles';
import Quantity from '../Product/Quantity';

const Cart = () => {
  const { cart, dispatch } = useContext(ShopDispatch);

  return (
    <CartContainer onClick={() => console.log('click', cart)}>
      {cart.map(item => (
        <ProductDisplay>
          <H1>{item.name}</H1>
          <H2>{item.amount}</H2>
          <H3>${item.price}</H3>
          <Quantity
            product={item}
            initialAmount={item.amount}
            buttonText={'UPDATE'}
            onButtonClick={count =>
              dispatch({
                type: 'update',
                product: {
                  name: item.name,
                  amount: count,
                  price: item.price * count,
                },
              })
            }
          />
          <RemoveContainer>
            <button
              onClick={() =>
                dispatch({ type: 'remove', product: { name: item.name } })
              }
            >
              remove
            </button>
          </RemoveContainer>
        </ProductDisplay>
      ))}
      {cart.length > 0 && (
        <CheckoutContainer>
          <button onClick={() => dispatch({ type: 'checkout' })}>
            checkout
          </button>
        </CheckoutContainer>
      )}
    </CartContainer>
  );
};

export default Cart;

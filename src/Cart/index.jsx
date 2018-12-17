import React, { useContext } from 'react';
import { ShopDispatch } from '../shop-context';

import {
  CartContainer,
  ProductDisplay,
  RemoveContainer,
  CheckoutContainer,
  H1,
  H2,
  counterCss,
  TextButtonCss,
} from './styles';
import Quantity from '../Product/Quantity';

const Cart = () => {
  const { dispatch, state } = useContext(ShopDispatch);

  return (
    <CartContainer open={state.isCartOpen}>
      {state.cart.map(item => (
        <ProductDisplay key={item.name}>
          <H1>{item.name}</H1>
          <H2>${item.price}</H2>
          <Quantity
            cssProps={{ counterCss, TextButtonCss }}
            product={item}
            initialAmount={item.amount}
            onChange={count =>
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
      {state.cart.length > 0 && (
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

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
  const { cart, dispatch, state } = useContext(ShopDispatch);

  return (
    <CartContainer
      onClick={() => console.log('click', cart)}
      open={state.isCartOpen}
    >
      {cart.map(item => (
        <ProductDisplay>
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

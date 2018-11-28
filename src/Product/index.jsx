import React, { useContext, useState } from 'react';
import { ShopDispatch } from '../shop-context';

import Quantity from './Quantity';
import { Div, H1, H2, P, Img } from './styles';

const Product = ({ id, product }) => {
  const { dispatch } = useContext(ShopDispatch);

  function handleClick(count) {
    console.log('count', count, product);

    dispatch({
      type: 'add',
      product: {
        amount: count,
        name: product.title,
        price: count * product.price,
      },
    });
  }

  return (
    <Div
      id={id}
      gridColumn={product.position.gridcolumn}
      gridRow={product.position.gridrow}
    >
      <div />
      <H1>{product.title}</H1>
      <H2>${product.price}</H2>
      <P>{product.description}</P>
      <Quantity
        product={product}
        initialAmount={1}
        buttonText={'BUY'}
        onButtonClick={count => handleClick(count)}
      />
      {/* <Img src={product.img} /> */}
    </Div>
  );
};

export default Product;

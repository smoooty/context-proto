import React, { useState, useEffect } from 'react';
import { Div, H3, Button, Row1, TextButton } from './styles';
const Quantity = ({ initialAmount, buttonText, onButtonClick }) => {
  const [count, setCount] = useState(initialAmount);

  function handleCount(action) {
    return setCount(count + action);
  }

  // Set amount to new value for Cart component
  useEffect(
    () => {
      setCount(initialAmount);
    },
    [initialAmount]
  );

  return (
    <Row1>
      <TextButton
        onClick={() =>
          // Kind of hacky little solution to set count back to 1 for Product components
          onButtonClick(count) || (initialAmount === 1 && setCount(1))
        }
      >
        {buttonText}
      </TextButton>
      <Div>
        <Button type={'-'} onClick={() => handleCount(-1)}>
          -
        </Button>
        <H3>{count}</H3>
        <Button type={'+'} onClick={() => handleCount(+1)}>
          +
        </Button>
      </Div>
    </Row1>
  );
};

export default Quantity;

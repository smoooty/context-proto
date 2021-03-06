import React, { useState, useEffect } from 'react';
import { Div, H3, Button, TextButton, Span } from './styles';

const Quantity = ({
  initialAmount,
  buttonText,
  onButtonClick,
  onChange,
  cssProps,
}) => {
  const [count, setCount] = useState(initialAmount);

  // Increment or decrement amount
  function handleCount(action) {
    setCount(count + action);
  }

  // Set amount to new value for Cart component
  useEffect(
    () => {
      setCount(initialAmount);
    },
    [initialAmount]
  );

  useEffect(
    () => {
      onChange && onChange(count);
    },
    [count]
  );

  return (
    <>
      {buttonText && (
        <TextButton
          css={cssProps && cssProps.TextButtonCss}
          onClick={() =>
            // Kind of hacky little solution to set count back to 1 for Product components
            onButtonClick(count) || (initialAmount === 1 && setCount(1))
          }
        >
          {buttonText}
        </TextButton>
      )}
      <Div css={cssProps && cssProps.counterCss}>
        <Button type={'-'} onClick={() => count > 0 && handleCount(-1)}>
          -
        </Button>
        <Span>•</Span>
        <Button type={'+'} onClick={() => handleCount(+1)}>
          +
        </Button>
        <H3>{count}</H3>
      </Div>
    </>
  );
};

export default Quantity;

import React, { useState, useEffect, Fragment } from 'react';
import { Div, H3, Button, Row1, TextButton, Span } from './styles';

const Quantity = ({
  initialAmount,
  buttonText,
  onButtonClick,
  onChange,
  cssProps,
}) => {
  const [count, setCount] = useState(initialAmount);

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
      onChange != null && onChange(count);
    },
    [count]
  );

  if (cssProps != null) {
    console.log(cssProps);
  }
  return (
    <>
      {buttonText != null && (
        <TextButton
          css={cssProps != null && cssProps.TextButtonCss}
          onClick={() =>
            // Kind of hacky little solution to set count back to 1 for Product components
            onButtonClick(count) || (initialAmount === 1 && setCount(1))
          }
        >
          {buttonText}
        </TextButton>
      )}
      <Div css={cssProps != null && cssProps.counterCss}>
        <Button type={'-'} onClick={() => handleCount(-1)}>
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

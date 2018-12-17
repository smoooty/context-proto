import React, { useState, useEffect } from 'react';

// import { ShopDispatch } from '../shop-context';
import { FormContainer, H1, TextInput, ErrorMsg } from './styles';
const Form = () => {
  const [formData, setForm] = useState('');
  // const { cart, dispatch } = useContext(ShopDispatch);

  useEffect(
    () => {
      console.log(
        'we can do validation here',
        formData,
        formData.includes('@')
      );
    },
    [formData]
  );

  return (
    <FormContainer>
      <H1>Fill out this form to checkout</H1>
      {!formData.includes('@') && (
        <ErrorMsg>Please enter a valid email address</ErrorMsg>
      )}
      <TextInput
        type="text"
        value={formData}
        onChange={event => setForm(event.target.value)}
      />
      <button type="submit">buy!</button>
    </FormContainer>
  );
};

export default Form;

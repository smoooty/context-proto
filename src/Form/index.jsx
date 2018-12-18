import React, { useState, useEffect, useRef } from 'react';

// import { ShopDispatch } from '../shop-context';
import { FormContainer, H1, TextInput, ErrorMsg } from './styles';

// Super simple contrived example to show how you could use a
// Custom hook to abstract use of form data to do form validation
function useFormData(data) {
  const hasError = !data.includes('@');
  return hasError;
}

const Form = () => {
  const [formData, setForm] = useState('');
  const hasError = useFormData(formData);

  const inputRef = useRef(null);
  // ComponentDidMount type functionality
  // EmptyArray means it'll just fire intitially / once
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <FormContainer>
      <H1>Fill out this form to checkout</H1>
      {hasError && <ErrorMsg>Please enter a valid email address</ErrorMsg>}
      <TextInput
        type="text"
        value={formData}
        onChange={event => setForm(event.target.value)}
        ref={inputRef}
      />
      <button type="submit">buy!</button>
    </FormContainer>
  );
};

export default Form;

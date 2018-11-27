import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const FormContainer = styled.form`
  grid-column: 2 / 10;
  grid-row: 3 / 10;
  align-items: start;
`;

const H1 = styled.h1`
  text-align: left;
  font-family: 'Sporting';
`;

const TextInput = styled.input`
  display: flex;
  font-family: 'Junicode';
  font-size: ${getRems(16)};
`;

const ErrorMsg = styled.p`
  color: red;
  font-family: 'Junicode';
  text-align: left;
`;

export { FormContainer, H1, TextInput, ErrorMsg };

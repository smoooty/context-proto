import styled from 'styled-components';
import { getRems } from '../utilities/rems';
import query from '../utilities/layout';

const FormContainer = styled.form`
  position: relative;
  z-index: 6;
  grid-column: 2 / end;
  grid-row: 3 / auto;
  align-items: start;
  background: #ffffff85;
  ${query.small`grid-row: 4 / auto;`};
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

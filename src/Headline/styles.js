import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const H1 = styled.h1`
  font-family: 'Monarch';
  font-size: ${getRems(26)};
  text-transform: uppercase;
  text-align: left;
  z-index: 3;
  pointer-events: none;
  grid-row: 1;
  crid-column: 1 / 2;
`;

export { H1 };

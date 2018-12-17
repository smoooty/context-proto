import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const H1 = styled.h1`
  grid-area: text;
  font-family: 'Monarch';
  font-size: ${getRems(26)};
  text-transform: uppercase;
  text-align: left;
  z-index: 3;
  pointer-events: none;
  grid-row: 1;
  grid-column: 1 / 2;
  word-break: break-all;
  position: absolute;
  margin: 0;
  font-size: ${getRems(100)};
  left: ${getRems(-15)};
  top: ${getRems(-5)};
`;

export { H1 };

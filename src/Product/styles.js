import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  overflow: auto;
  background: white;
  border: ${getRems(3)} solid black;
  grid-column: auto / span 2;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));
`;

const H1 = styled.h1`
  font-family: 'Monarch';
  text-align: right;
  font-size: ${getRems(28)};
  grid-column: 2;
`;

const H2 = styled.h2`
  font-family: 'Sporting-Normal';
  font-size: ${getRems(20)};
  text-align: right;
  grid-column: 2;
`;

const P = styled.p`
  font-family: 'Junicode';
  color: black;
  text-align: left;
  grid-column: 2;
`;

const Img = styled.img`
  width: 100%;
  pointer-events: none;
`;

export { Div, H1, H2, P, Img };

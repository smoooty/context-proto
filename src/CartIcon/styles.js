import styled from 'styled-components';
import { getRems } from '../utilities/rems';
import { query } from '../utilities/layout';

const Div = styled.div`
  display: grid;
  grid-area: special;
  background: repeating-linear-gradient(
    45deg,
    yellow,
    yellow 20px,
    transparent 20px,
    transparent 40px
  );
  grid-template-columns: repeat(3, auto);
  ${query.max`grid-template-rows: repeat(5, auto);`};
`;

const Svg = styled.svg`
  width: ${getRems(100)};
  :hover {
    ${'' /* fill: purple; */} cursor: pointer;
  }
`;

const H1 = styled.h1`
  color: black;
  font-family: 'Monarch';
  z-index: 2;
  width: ${getRems(150)};
  pointer-events: none;
  border: ${getRems(4)} solid black;
  border-radius: 50%;
  padding: ${getRems(30)};
  grid-row: 2;
`;

const Logo1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${query.max`transform: rotate(90deg); grid-row: 1;`};
`;

const Logo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${query.max`transform: rotate(90deg); grid-row: 2`};
`;

export { Div, H1, Svg, Logo1, Logo2 };

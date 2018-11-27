import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  position: relative;
  width: ${getRems(100)};
  display: flex;
`;

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  :hover {
    fill: purple;
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  color: red;
  font-family: 'Monarch';
  z-index: 2;
  width: 100%;
  pointer-events: none;
`;

const H2 = styled.h2`
  color: green;
  font-family: 'Monarch';
  z-index: 2;
  width: 100%;
  text-align: right;
  margin-right: -100%;
`;

export { Div, H1, H2, Svg };

import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 5;
  ${'' /* grid-row: 1; */};
`;

const Svg = styled.svg`
  width: ${getRems(300)};
  overflow: visible;

  :hover {
    fill: purple;
    cursor: crosshair;
  }
`;

const H1 = styled.h1`
  font-family: monarch;
  color: red;
  position: absolute;
  bottom: 0;
  text-shadow: 4px 3px 6px orange;
  text-shadow: ${getRems(4)} ${getRems(3)} ${getRems(6)} orange;
`;

export { Div, H1, Svg };

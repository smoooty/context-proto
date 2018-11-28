import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2;
  grid-row: 1;
`;

const Svg = styled.svg`
  width: 100%;
  overflow: visible;
  position: absolute;
  top: ${getRems(30)};
  transform: rotate(${({ open }) => (open ? '45deg' : '0')});
  transition: all 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);
  :hover {
    fill: purple;
    cursor: crosshair;
  }
`;

const H1 = styled.h1`
  font-family: 'Sporting';
  color: red;
  position: absolute;
  top: ${getRems(30)};
  z-index: 2;
`;

export { Div, H1, Svg };

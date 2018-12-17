import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  grid-area: scrub;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
`;

const Svg = styled.svg`
  width: 100%;
  min-width: ${getRems(200)};
  overflow: visible;
  position: absolute;
  top: ${getRems(30)};
  transform: rotate(${({ open }) => (open ? '45deg' : '0')});
  transition: all 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);
  fill: ${({ open }) => (open ? 'red' : 'black')};
  :hover {
    cursor: crosshair;
  }
`;

const H1 = styled.h1`
  font-family: 'Sporting';
  font-size: 5em;
  color: rgb(33, 255, 33);
  top: ${getRems(30)};
  z-index: 5;
  pointer-events: none;
  margin: 0;
  grid-column: 1;
`;

const H2 = styled.h2`
  font-family: 'Sporting';
  color: rgb(33, 255, 33);
  z-index: 5;
  margin: 0;
  font-size: 2em;
  grid-column: 2;
  pointer-events: none;
  display: flex;
  justify-content: center;
  transition: opacity 200ms cubic-bezier(0.67, 0.47, 0.23, 0.44);
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: transform 350ms cubic-bezier(0.67, 0.47, 0.23, 0.44);
  transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(100%)')};
`;

export { Div, H1, H2, Svg };

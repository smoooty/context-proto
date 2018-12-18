import styled from 'styled-components';
import { getRems } from '../../utilities/rems';
import query from '../../utilities/layout';

const cursorIcons = {
  '+': 'zoom-in',
  '-': 'zoom-out',
};

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 2;

  @media (max-width: 450px) {
    transform: rotate(90deg);
  }
  ${({ css }) => css};
`;

const H3 = styled.h3`
  font-family: 'Sporting-Normal';
  padding: 0 ${getRems(10)};
  ${query.small`padding-left: 0;`};
`;

const Button = styled.button`
  font-family: 'Sporting-Normal';
  font-size: ${getRems(20)};
  border: none;
  -webkit-appearance: none;
  background: none;
  transition: background 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  :hover {
    cursor: ${({ type }) => cursorIcons[type]};
  }
`;

const Span = styled.span`
  font-family: 'Sporting-Normal';
`;

const Row1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const TextButton = styled.button`
  background: linear-gradient(black, white);
  color: white;
  font-family: 'Sporting';
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-appearance: none;
  transition: all 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);

  :hover {
    cursor: cell;
    background: black;
  }
  ${({ css }) => css};
`;

export { Div, H3, Span, Button, Row1, TextButton };

import styled from 'styled-components';
import { getRems } from '../../utilities/rems';
import { borderWidth } from '../../utilities/constants';

const cursorIcons = {
  '+': 'zoom-in',
  '-': 'zoom-out',
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H3 = styled.h3`
  font-family: 'Monarch';
  padding: 0 ${getRems(10)};
`;

const Button = styled.button`
  font-family: 'Sporting';
  font-size: ${getRems(14)};
  border: ${getRems(borderWidth)} solid black;
  border-radius: 0 ${getRems(10)} 0 ${getRems(10)};
  background: linear-gradient(ghostwhite 18%, blue);
  -webkit-appearance: none;
  transition: background 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  :hover {
    background: ghostwhite;
    cursor: ${({ type }) => cursorIcons[type]};
  }
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
  border: ${getRems(borderWidth)} solid black;
  border-radius: ${getRems(10)} 0 ${getRems(10)} 0;
  font-family: 'Sporting';

  -webkit-appearance: none;
  ${'' /* width: auto; */}
  transition: all 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);

  :hover {
    ${'' /* width: 20%; */}
    cursor: cell;
    background: black;
  }
`;
export { Div, H3, Button, Row1, TextButton };

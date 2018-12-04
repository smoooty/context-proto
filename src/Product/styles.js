import styled from 'styled-components';
import query from '../utilities/layout';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  overflow: auto;
  background: white;
  border: ${getRems(3)} solid black;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px));

  ${query.small`
    min-height: 350px;
  `};
  grid-area: ${({ gridArea }) => gridArea};
`;

const H1 = styled.h1`
  font-family: 'Monarch';
  text-align: right;
  font-size: ${getRems(28)};
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${query.small`
    grid-column: 1 / 3;
  `};
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
  ${query.small`
    grid-column: 1 / 3;
    margin-left: ${getRems(5)};
  `};
`;

const Img = styled.img`
  width: 100%;
  pointer-events: none;
`;

export { Div, H1, H2, P, Img };

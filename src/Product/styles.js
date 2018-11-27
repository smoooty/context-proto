import styled from 'styled-components';
import { getRems } from '../utilities/rems';

const Div = styled.div`
  overflow: auto;
  background: white;
  padding: ${getRems(5)};
  border: ${getRems(3)} solid black;
  /* border-radius: ${getRems(10)}; */
  ${
    '' /* grid-row: ${({ gridRow }) => gridRow} / ${({ gridRow }) => gridRow + 6};
  grid-column: ${({ gridColumn }) => gridColumn} /
    ${({ gridColumn }) => gridColumn + 5}; */
  }
  /* box-shadow: ${getRems(10)} ${getRems(15)} ${getRems(20)} #21ff21; */

  grid-column: auto / span 2;
`;

const Row1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const H1 = styled.h1`
  font-family: 'sporting';
  text-align: left;
  font-size: ${getRems(18)};
  /* text-shadow: ${getRems(2)} ${getRems(3)} ${getRems(11)} #ff000069; */
`;

const H2 = styled.h2`
  font-family: 'Monarch';
`;

const P = styled.p`
  font-family: 'Junicode';
  color: black;
  text-align: left;
`;

const Img = styled.img`
  width: 100%;
  pointer-events: none;
`;

export { Div, Row1, H1, H2, P, Img };

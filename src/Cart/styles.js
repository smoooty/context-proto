import styled, { css } from 'styled-components';
import { getRems } from '../utilities/rems';
import { borderWidth } from '../utilities/constants';

const CartContainer = styled.div`
  position: relative;
  grid-column: 4 / 7;
  grid-row: 1;
  transition: all 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);
  overflow: hidden;
  width: ${({ open }) => (open ? '100%' : '0')};
  height: ${({ open }) => (open ? '100%' : '0')};
  transform: translateX(${({ open }) => (open ? '0' : '-30vw')});
  opacity: ${({ open }) => (open ? '1' : '0')};
`;

const ProductDisplay = styled.div`
  text-align: left;
  display: flex;
  border: 3px solid black;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

const RemoveContainer = styled.div`
  display: flex;
  align-items: center;
  grid-row: 2;

  button {
    font-family: 'Sporting';
    background: linear-gradient(black, red);
    color: white;
    border: none;
    width: 100%;
    height: 100%;
    transition: color 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);

    :hover {
      background: black;
      color: red;
    }
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${getRems(5)};
  button {
    font-family: 'Sporting';
    color: white;
    background: linear-gradient(black, #21ff21);
    font-size: ${getRems(14)}
    border: ${getRems(borderWidth)} solid black;
    border-radius: ${getRems(10)} 0 ${getRems(10)} 0;
    transition: color 300ms cubic-bezier(0.67, 0.47, 0.23, 0.44);

    :hover {
      background: black;
      color: #21ff21;
    }

  }
`;

const H1 = styled.h1`
  font-family: 'Monarch';
  text-align: right;
  font-size: ${getRems(24)};
  grid-column: 1;
  display: flex;
  align-items: flex-end;
`;

const H2 = styled.h2`
  font-family: 'Sporting-Normal';
  font-size: ${getRems(16)};
  text-align: right;
  grid-column: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const counterCss = css`
  grid-column: 4;
  grid-row: 1;
  margin: 0;
`;

const TextButtonCss = css`
  grid-column: 4;
`;

export {
  CartContainer,
  ProductDisplay,
  RemoveContainer,
  CheckoutContainer,
  H1,
  H2,
  counterCss,
  TextButtonCss,
};

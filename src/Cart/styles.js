import styled from 'styled-components';
import { getRems } from '../utilities/rems';
import { borderWidth } from '../utilities/constants';

const CartContainer = styled.div`
  width: ${getRems(400)};
  position: relative;
  ${'' /* grid-column: 10; */}
`;

const ProductDisplay = styled.div`
  text-align: left;
  display: flex;
  background: linear-gradient(ghostwhite, grey);
  border-radius: 0 ${getRems(30)} 0 ${getRems(30)};
  padding: 0 ${getRems(10)};
`;
const Name = styled.h1`
  text-align: left;
`;

const RemoveContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    font-family: 'Sporting';
    background: linear-gradient(black, red);
    color: white;
    border: ${getRems(borderWidth)} solid black;
    border-radius: 0 ${getRems(10)} 0 ${getRems(10)};
    margin-top: ${getRems(25)};
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
  font-family: 'Sporting';
  font-size: ${getRems(24)};
`;

const H2 = styled.h2`
  font-family: 'Sporting';
  font-size: ${getRems(14)};
`;

const H3 = styled.h3`
  font-family: 'Sporting-Normal';
  font-size: ${getRems(12)};
`;

export {
  CartContainer,
  ProductDisplay,
  Name,
  RemoveContainer,
  CheckoutContainer,
  H1,
  H2,
  H3,
};

// background: linear-gradient(#eee, #333);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

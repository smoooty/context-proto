import styled from 'styled-components';

const Div = styled.div`
  z-index: -1;
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-20deg);
  @media (max-width: 850px) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 2;
  }
`;

const CircleDiv = styled.div`
  border-radius: 50%;
  background: linear-gradient(black, white);
  filter: blur(1.5rem);
  width: 250px;
  height: 400px;
`;

const SvgDiv = styled.div`
  z-index: -1;
  grid-column: 4 / span 3;
  grid-row: 3 / 5;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  filter: blur(1em);

  @media (max-width: 850px) {
    grid-column: 3 / span 3;
    grid-row: 4 / 6;
  }

  @media (max-width: 550px) {
  }
`;

export { Div, CircleDiv, SvgDiv };

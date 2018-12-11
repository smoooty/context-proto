import { css } from 'styled-components';

export const query = {
  small: (...args) => css`
    @media (max-width: 550px) {
      ${css(...args)};
    }
  `,
  max: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)};
    }
  `,
};

export default query;

import { css } from 'styled-components';

const features = {
  small: `screen and (max-width: ${550 / 16}rem)`,
  max: `screen and (min-width: ${1200 / 16}rem)`,
};

// Reduce the features and return media templates for each
export const query = Object.keys(features).reduce((acc, entry) => {
  acc[entry] = (...args) => css`
    @media ${features[entry]} {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default query;

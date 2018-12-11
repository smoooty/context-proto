import React from 'react';

import { Div, H1, Svg, Logo1, Logo2 } from './styles.js';

const CartIcon = () => (
  <Div>
    <Logo2>
      <Svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <path d="M150,4.8C69.9,4.8,4.8,69.9,4.8,150c0,80.1,65.2,145.2,145.2,145.2S295.2,230.1,295.2,150C295.2,69.9,230.1,4.8,150,4.8z M190.4,72.5c7.2,0,13,14,13,31.4c0,17.3-5.8,31.4-13,31.4c-7.2,0-13-14-13-31.4C177.4,86.5,183.2,72.5,190.4,72.5z M109.6,72.5	c7.2,0,13,14,13,31.4c0,17.3-5.8,31.4-13,31.4s-13-14-13-31.4C96.7,86.5,102.5,72.5,109.6,72.5z M266.8,142.8l6.1,6.1	c-4.6,4.6-10.8,7.2-17.3,7.2c-0.1,0-0.1,0-0.2,0c-3.2,55.4-49.2,99.5-105.4,99.5S47.8,211.5,44.6,156.1c-0.1,0-0.1,0-0.2,0	c-6.5,0-12.7-2.5-17.3-7.2l6.1-6.1c3,3,7,4.6,11.2,4.6c6.1,0,11.7-3.5,14.3-9l7.8,3.7c-2.7,5.7-7.6,10.1-13.4,12.3	C55.5,205.9,98,247,150,247s94.5-41.1,96.8-92.5c-5.8-2.2-10.6-6.6-13.4-12.3l7.8-3.7c2.6,5.5,8.2,9,14.3,9	C259.8,147.5,263.8,145.8,266.8,142.8z" />
      </Svg>
    </Logo2>
    <Logo1>
      <H1>
        Material
        <br />
        Things
      </H1>
    </Logo1>
  </Div>
);

export default CartIcon;

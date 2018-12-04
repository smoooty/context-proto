import React from 'react';
import { Div, CircleDiv, SvgDiv } from './styles';
const svg = () => (
  <SvgDiv>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="373.9"
      height="407.2"
      viewBox="0 0 373.9 407.2"
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="black" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad2)"
        d="M304.2,328.5c11.8-32.2,17.5-67.5,17.6-91.9c0.1-16.4-0.3-31.4,7.7-46.3c7.6-14.1,20.7-24.7,27.3-39.6c28.3-63.6,20.7-128.7-16.9-145.5c-60-26.7-106.8,54.1-124.3,101.1c-5.5,14.9-10.4,28.6-23.9,37.7c-13.2,9-30.5,9.7-42.9,20.7c-8.9,8-17.4,17.6-23.6,28c-9.7,16.4-8.9,32.7-31.4,36.3c-11.4,1.8-23-0.3-34.5,0.7c-16.2,1.5-31.8,9.6-42.7,22.2c-30.5,35.3-16.6,94.1,21.4,115.5c16.8,9.5,37.6,12.5,56.3,6.2c17.8-6,27.6-16,47.3-6.5c13.8,6.6,24.5,18.1,37.4,26.4C237.5,431.3,283.6,384.8,304.2,328.5z"
      />
    </svg>
  </SvgDiv>
);
const Circle = () => (
  <>
    {svg()}
    <Div>
      <CircleDiv />
    </Div>
  </>
);

export default Circle;

import React, { useContext } from 'react';
import { ShopDispatch } from '../shop-context';

import { Div, H1, H2, Svg } from './styles';

const Scrub = () => {
  const { totalProducts, dispatch, state } = useContext(ShopDispatch);

  return (
    <Div>
      <H1>{totalProducts.totalAmount}</H1>
      <H2 open={state.isCartOpen}>{`$${totalProducts.totalPrice}.00`}</H2>
      <Svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 569.1 559.9"
        onClick={() => dispatch({ type: 'cartOpen' })}
        open={state.isCartOpen}
      >
        <defs>
          <filter
            id="f3"
            x="-100"
            y="-100"
            width="400%"
            height="400%"
            filterUnits="userSpaceOnUse"
          >
            <feOffset result="offOut" in="SourceGraphic" dx={5} dy={-10} />
            <feColorMatrix
              result="matrixOut"
              in="offOut"
              type="matrix"
              values="0.2 0 0 0 0 0 0.2 1 0 50 0 0 0.2 0 0 0 0 0 1 0"
            />
            <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <path
          // filter="url(#f3)"
          d="M284.6,8.4C134.6,8.4,13.1,130,13.1,280c0,149.9,121.6,271.5,271.5,271.5c149.9,0,271.5-121.6,271.5-271.5 C556.1,130,434.5,8.4,284.6,8.4z M20.3,280C20.3,166.7,91.6,70,191.7,32.4c-63.8,34-107.3,101.1-107.3,178.5c0,0-2.6,59.9,9,96.1 c11.6,36.2,11.6,45.6,11.6,53.4c0,9.2-4.4,28,3.6,40.5c8,12.5,15,19.4,29.7,25.2c-2.5,11.1,1.6,40.5,34.1,44.9 c10.3,1.4,21.9,1.4,25.5,1.4c1.9,6.7,5.8,27.7,11.6,35.2c0.3,6.1-3.1,20.5,20,22.2c1.6,3.1,2.8,6.5,4.4,9.6 C112.2,515.8,20.3,408.6,20.3,280z M123.9,401.4c11.4,13.5,17.7,12.5,23.5,13.5c-8.3,3.7-20.8-1.5-28.9-12.3 c-8.1-10.8-6.7-20.2-4.4-30.4c2.3-10.2,2.9-23.9-1.5-34.9c-4.4-11-5.2-16.4-5.2-19.3c0,0,12.7,17.9,11.4,36.4 C117.6,372.9,112.4,387.9,123.9,401.4z M157.7,442.7c-0.1,2.5,1.1,8.6,3.1,11.8c1.9,3.2,3.7,5.8,3.1,6.5c-0.7,0.7-5.3-1.8-7.5-4.4 c-2.2-2.6-6.1-9.4-5.7-14.4c0.4-5,2.9-5.5,3.7-5.4C157.1,437.2,157.8,440.2,157.7,442.7z M154.6,423.3c0-1.9,1.2-3.9,3.6-3.9 c3.2,0,4.7,1.4,4.7,3.2c0,1.8-1.7,4.4-4.6,4.4C155.5,427.1,154.6,425.3,154.6,423.3z M168.9,440c1.9,0,1.2,4.9,1.8,8.2 c0.6,3.3,8,12.5,6.9,13.4c-1.1,1-8.3-5.1-10.1-9.8C165.7,447,165.6,440,168.9,440z M168.5,426.4c1.1-2.1,2.2-2.5,3.6-2.6 c2.8-0.3,3.9,1.9,3.9,3.3c0,1.4-1.5,3.3-4.2,3.3C169.2,430.4,167.4,428.5,168.5,426.4z M180.2,439.8c2.2,0.1,3.1,2.4,2.8,4.4 c-0.3,2.1-0.7,6.4,0.4,8.5c1.1,2.1,2.9,5.1,1.9,5.8c-1,0.7-5.3-4.3-6.1-6.5C178.4,449.8,176.4,439.7,180.2,439.8z M181.7,426.7 c1.2-0.8,3.9-1.4,4.3-1c0.8,0.8,0.6,2.1-0.3,4c-0.8,1.9-3.6,4.4-5.8,1.7C177.7,428.6,180.4,427.5,181.7,426.7z M208.4,482.7 c0.1-4.6,0.8-6.8,2.6-6.5c2.6,0.4,3.7,2.6,3.7,4.7c0,2.1,0.7,17.9-1.4,17.9C211.4,498.8,208.3,487.3,208.4,482.7z M224.4,479.6 c2.6,0,5.3,5.5,6.1,8.2c0.8,2.6,2.2,15.4,0.3,15.4c-1.9,0-4.6-8.5-5.3-10c0,4.3,0.4,12.3,0.7,16.8c0.3,4.4-0.3,10.5-4.2,10.1 c-3.9-0.4-4.3-6.2-4.3-10.7c0-4.4,1-14,6.2-19.6C222.6,485.7,220.8,479.6,224.4,479.6z M240.3,538.3c-1.7,0.1-5.3-11.9-5.5-19.1 c-0.3-7.2,1-14.1,3.5-14.1c2.5,0,5.5,10,5.5,14.7C243.8,524.4,242,538.1,240.3,538.3z M260.2,531.8c-0.1,2.5-4.4,9.7-6.5,9.6 c-2.1-0.1-4.7-4.3-4.9-6.8c-0.1-2.5,0.1-10.4,1.1-13.2c1-2.8,4.3-7.3,7.1-7.1c2.5,0.2,3.9,2.2,3.9,5.8 C260.9,523.7,260.3,529.3,260.2,531.8z M274.3,543.4c-3.1-0.4-8.5-3.6-8.7-8c-0.3-4.4,0.6-11.4,1.9-13.6c1.4-2.2,2.8-3.3,4.7-3.3 c3.3,0,4.7,3.5,4.9,7.5C277.2,530,277.4,543.8,274.3,543.4z M299.1,536.5c-0.1,1.4-3.7,6.5-8,6.4c-4.3-0.1-6.4-2.2-6.7-5.3 c-0.3-3-1-8.9,0.1-11.5c1.1-2.6,4-8,7.1-8.3c2.8-0.3,7.3,7.2,7.3,9.3C299,529.1,299.3,535.1,299.1,536.5z M314,539.5 c-0.6,2.4-3.7,3.1-5,2.9c-1.2-0.1-5-3.1-5.4-5.5c-0.4-2.5,1-19.8,5-19.8c2.8,0,5.1,8,5.4,14.3C314,531.4,314.5,537.2,314,539.5z M329.4,516.2c-0.1,3.2-3.1,21.8-5.3,21.8c-2.2,0-4.3-4.2-4.3-6.7c0-2.5,0.3-12.8,2.4-16.9c2.1-4.2,3.7-7.3,5.4-7.3 C329.1,507.1,329.5,513,329.4,516.2z M330,496.1c-1.2,0-2.7,3.7-4.2,6.4c-1.5,2.7-9.2,9.6-10.8,10.8c-1.7,1.2-3.1-2.3-6.4-1.5 c-3.3,0.8-4.2,6.4-6.9,6.4c-2.7,0-5-5-9.8-5c-4.8,0-8.3,5.6-9.8,5.6c-1.5,0-2.7-0.8-4.2-4c-1.5-3.1-3.3-4-5.2-4 c-1.9,0-3.5,1.7-5,1.7c-1.5,0-2.3-4.6-8.1-4.8c-5.8-0.2-8.9,4.8-12.1,4.6c-3.1-0.2-5.2-7.9-7.3-13.9c-2.1-6-5-16.2-4.8-22.7 c-16.2,0.4-23.5-5-26.8-9.8c-13.5-0.6-19.3-7.9-19.1-17.9c0.2-10,11-11.2,16.4-11.2c-2.5-0.4-4.4-2.3-4.4-5.4 c0-3.1,6.4-4.4,6.4-4.4s27.7,0.4,34.5,0.4s12.5-2.7,15.2-4c1.5,1.9,1,6.4,2.1,9.2c1,2.7,1,7.5,0,10.6c2.9,0.2,4.6,0.6,6-0.6 c1.5-1.2-0.2-5.4-0.4-7.9c-0.2-2.5,2.5-5.6,2.7-10.2c0.2-4.6-7.1-9.6-20.8-16c-13.7-6.4-17.5-9.8-36-11.9c-18.5-2.1-32.2,0-40.8-1 c-8.5-1-24.3-20.8-25.6-25.6c-1.2-4.8,4.6-20.6,4-26.4c-0.3-3.1-2.3-9.6-4.1-15c27.4,32.9,66.1,56.1,110.2,63.7l0,0c0,0,0,0,0,0 c0.4,0.1,0.9,0.1,1.3,0.2c4.2,0.7,16.8,3.2,20.5,8.4c4.4,6.2,3.6,16.2,5.1,16.2c1.5,0,0.9-11,7.2-17.3c3.5-3.5,11.1-5,18.6-6.1 c2.7-0.3,5.3-0.7,7.9-1.1c1.8-0.3,3.5-0.5,4.9-0.9c0,0,0,0,0.1,0c59.2-11.2,108.5-50.7,133.1-103.9c10.8-23.5,16.9-49.6,16.9-77.2 c0-101.8-82.5-184.3-184.3-184.3c-101.8,0-184.3,82.5-184.3,184.3c0,5.6,0.3,11.1,0.7,16.5l0,0.4c2.5,19.4,8.3,52.6,24,75.4 c0,0,18.7,25.6,17.6,42.8c-1.1,17.2-7.8,15.5-7.8,26.9c0,11.4,5.7,13.2,13,20.5c0,0-19.7-6.1-18-20.5c1.7-14.4,8.3-13.3,7.8-27.5 c-0.6-14.1-12.2-28.3-18.3-39.1c-4.7-8-16.5-28.6-22.3-59.4c-0.1,0.4-0.1,0.8-0.2,1.1c4.2,33,14.4,55.2,18.6,61.8 c4.2,6.7,12.5,17.2,13.9,33c1.4,15.8-6.7,18-6.1,34.9c0.6,16.9,22.2,32.7,22.2,32.7c-18.3-4.7-25.2-18-25.5-33.6 c-0.3-15.5,10.8-26.1-11.4-66.6C88.2,270,90.5,209.6,90.5,209.6s0-0.1,0.1-0.3C91.5,101.8,178.8,15,286.5,15 c108.2,0,195.9,87.7,195.9,195.9c0,27.9-5.8,54.4-16.3,78.4c0,0,0.1,0,0.1,0.1c-4.4,9.2-11.9,25-16.2,38.3 c-4.4,13.3-9.8,29.7-8.9,47c0.8,17.3-1.9,22.5-6.2,28.7c-4.4,6.2-12.1,7.1-13.9,7.3c-1.9,0.2,2.9-3.3,10.2-10.4 c7.3-7.1,6.9-15.8,6.4-21.8c-0.4-6-1.7-20.2,0-26.4c-1.9,1.5-5.6,7.5-4.6,16.8c2.2,19.8-0.6,23.5-3.7,28.1 c-3.1,4.6-10.8,7.5-12.1,6.9c-1.2-0.6,3.5-3.5,8.1-9.2c4.6-5.6,5-18.3,5-26.8c0-8.5,1.2-17.1,4.8-24.5c3.5-7.5,12.1-26.4,12.1-26.4 c-11,20.8-22.7,39.9-23.1,56c-0.4,16-4,22.3-13.1,28.9c-9.2,6.7-25.2-0.2-34.9-4c-9.8-3.7-31.2-2.9-46,1 c-14.8,4-29.3,15.4-27.9,22.9c1.5,7.5,25.6,6,45.1,4c19.6-2.1,50.5-5.6,57.8-6c-0.4,4.6-7.7,4.8-12.1,5.4 c-4.4,0.6-11.4,2.5-14.4,2.9c0.2,2.7,3.1,3.1,7.3,4.8c4.2,1.7,2.9,11.2-0.4,23.3c-3.3,12.1-13.5,13.1-23.1,13.5 c-9.6,0.4-11.6-2.3-16-2.1c-4,3.7-18.1,10.2-25.4,13.7c3.3,1,8.9,0,13.7,0c4.8,0,4.8,3.5,5,7.7c0.2,4.2-0.6,5.4-2.3,5.4 c0,2.7-2.7,7.1-4.8,7.1S331.2,496.1,330,496.1z M190,430.7c0-1.5,1.5-3.7,2.9-3.7c1.8,0,2.6,1.5,2.8,3.1c0.1,1.5-0.4,3.3-2.2,3.5 C191.7,433.6,190,432.2,190,430.7z M409.5,431.1c0,2.2-0.1,9.2-1.1,14.8c-1,5.7-4.2,13.6-6.1,13.7c-1.9,0.1,2.4-25.5,2.4-25.5 C405.2,432.8,408,431,409.5,431.1z M398.6,450.8c-1.7,6-6.1,16.6-8.6,16.8c-2.5,0.1-0.1-12.3,1.7-17.9c1.8-5.5,4.4-14.8,6.9-15.1 C399.9,434.4,400.2,444.8,398.6,450.8z M351.4,485.5c-1.1,1.9-3.5,8.3-4.4,8.5c-1,0.1-0.4-14.6,1-16.1c0.8-0.8,6.8-1.1,7.1-0.1 C355.3,478.7,352.5,483.5,351.4,485.5z M340.7,517.6c-1.9,2.9-3.2,6.1-4.9,6.1c-1.7,0-2.4-4.4-2.1-7.9c0.3-3.5,3.6-17.2,6.5-17.5 c1.7-0.2,1.8,6,1.8,9C342.1,510.4,342.7,514.7,340.7,517.6z M330.8,540.2c1.3-2,2.6-4.5,3.7-7.1c5.3-3.3,15-2.8,15-30.8 c6.7-10.8,10.5-18.9,11.4-23c4.7,0.8,27.7,3.3,38-4.7c10.3-8,15-20.5,18.3-53c11.6-1.7,23.6-8.3,28.6-20.2 c5-11.9,0.8-27.5,3.1-42.2c2.2-14.7,6.1-28,24.1-70.2c0.4-0.9,0.7-1.8,1-2.6c9.4-23.4,14.6-48.9,14.6-75.6 c0-73.3-39-137.4-97.3-172.8c92.8,41,157.7,133.9,157.7,241.9C548.9,410.1,454.7,518.3,330.8,540.2z"
        />
        <path d="M278.9,463.6c0.3-2.9,2.4-7.7,0.6-8.1c-1.8-0.4-7.3,6.2-9.4,14.4c-2.1,8.1-1.2,15.1-0.6,19c0.6,4,3,8.2,4.7,8.6 c1.7,0.4,6.8-3.3,8.3-4.5c1.6-1.1,2.9-2.7,2.9-4.8c0-2.1-4.4-9.6-6.1-16.1C278.6,469.9,278.5,466.5,278.9,463.6z" />
        <path d="M258,454.4c-2.3-2.9-3.3,0.8-3.3,3c0,2.2-1.1,6.9-2,12.6c-0.8,5.7-3.2,12.4-2.9,14.1c0.3,1.8,5.6,10.6,9.6,14 c4,3.4,6.2-21.1,4.5-28.6C262.1,462.3,260.2,457.3,258,454.4z" />
      </Svg>
    </Div>
  );
};

export default Scrub;

import React, { PropsWithChildren } from 'react';
import './hexagon-grid.scss';

type HexagonGridProps = PropsWithChildren & {
  className: string;
};

const HexagonGrid = ({ className, children }: HexagonGridProps) => {
  return (
    <ul className={`${className} hexGrid `}>
      {children}
      {/* <li className="hex">
        <a className="hexIn" href="#">
          <img
            src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
            alt=""
          />
          <h1>This is a title</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </a>
      </li>
      <li className="hex">
        <a className="hexIn" href="#">
          <img
            src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
            alt=""
          />
          <h1>This is a title</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </a>
      </li>
      <li className="hex">
        <a className="hexIn" href="#">
          <img
            src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
            alt=""
          />
          <h1>This is a title</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </a>
      </li> */}
    </ul>
  );
};

export default HexagonGrid;

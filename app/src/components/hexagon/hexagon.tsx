import React, { PropsWithChildren } from 'react';
// import '../hexagon-grid/hexagon-grid.scss';

type HexagonProps = PropsWithChildren & {
  title?: string;
  content?: string;
};

const Hexagon = ({ title, content }: HexagonProps) => {
  return (
    <li className="hex bg-primary">
      <a className="hexIn bg-primary" href="#">
        {/* <img
          src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
          alt=""
        /> */}
        <h1>This is a title</h1>
        <p>Some sample text about the article this hexagon leads to</p>
      </a>
    </li>
  );
};

export default Hexagon;

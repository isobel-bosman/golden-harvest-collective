import React, { PropsWithChildren } from 'react';
import Multiflora from '../../assets/images/Multiflora.jpeg';

type HexagonProps = PropsWithChildren & {
  title?: string;
  content?: string;
};

const Hexagon = ({ title, content }: HexagonProps) => {
  return (
    <li className="hex bg-primary">
      <a className="hexIn bg-primary" href="#">
        <img src={Multiflora} alt="" />
        <h1>Multiflora</h1>
        <p>View All</p>
      </a>
    </li>
  );
};

export default Hexagon;

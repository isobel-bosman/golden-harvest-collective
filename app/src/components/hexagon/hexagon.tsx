import React, { PropsWithChildren } from 'react';
import WildFlower from '../../assets/images/wild-flower.jpg';
import BlueGum from '../../assets/images/blue-gum.jpg';
import BuffuloThorn from '../../assets/images/buffulo-thorn.jpg';
import Cosmos from '../../assets/images/cosmos.jpg';
import Macadamia from '../../assets/images/macadamia.jpg';
import Citrus from '../../assets/images/citrus.jpg';
import Eucalyptus from '../../assets/images/eucalyptus.jpg';

type HexagonProps = PropsWithChildren & {
  title?: string;
  content?: string;
  icon: RegisteredIcons;
};

const iconPath: { [icon: string]: string } = {
  wildFlower: WildFlower,
  blueGum: BlueGum,
  buffuloThorn: BuffuloThorn,
  cosmos: Cosmos,
  macadamia: Macadamia,
  citrus: Citrus,
  eucalyptus: Eucalyptus,
};

export type RegisteredIcons =
  | 'wildFlower'
  | 'blueGum'
  | 'buffuloThorn'
  | 'cosmos'
  | 'macadamia'
  | 'citrus'
  | 'eucalyptus';

const Hexagon = ({ title, content, icon }: HexagonProps) => {
  return (
    <li className="hex bg-primary">
      <a className="hexIn bg-primary">
        <img src={iconPath[icon]} alt="" />
        <h1>{title}</h1>
        <p>{content}</p>
      </a>
    </li>
  );
};

export default Hexagon;

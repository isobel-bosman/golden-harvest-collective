import React, { PropsWithChildren } from 'react';
import WildFlower from '../../assets/images/varieties/wild-flower.jpg';
import BlueGum from '../../assets/images/varieties/blue-gum.jpg';
import BuffaloThorn from '../../assets/images/varieties/buffulo-thorn.jpg';
import Cosmos from '../../assets/images/varieties/cosmos.jpg';
import Macadamia from '../../assets/images/varieties/macadamia.jpg';
import Citrus from '../../assets/images/varieties/citrus.jpg';
import Eucalyptus from '../../assets/images/varieties/eucalyptus.jpg';

type HexagonProps = PropsWithChildren & {
  title?: string;
  content?: string;
  icon: RegisteredIcons;
};

const iconPath: { [icon: string]: string } = {
  wildFlower: WildFlower,
  blueGum: BlueGum,
  buffaloThorn: BuffaloThorn,
  cosmos: Cosmos,
  macadamia: Macadamia,
  citrus: Citrus,
  eucalyptus: Eucalyptus,
};

export type RegisteredIcons =
  | 'wildFlower'
  | 'blueGum'
  | 'buffaloThorn'
  | 'cosmos'
  | 'macadamia'
  | 'citrus'
  | 'eucalyptus';

const Hexagon = ({ title, content, icon }: HexagonProps) => {
  return (
    <li className="hex">
      <a className="hexIn bg-primary">
        <img src={iconPath[icon]} alt="" />
        <h1>{title}</h1>
        <p>{content}</p>
      </a>
    </li>
  );
};

export default Hexagon;

import React, { PropsWithChildren } from 'react';
import './hexagon-grid.scss';

type HexagonGridProps = PropsWithChildren & {
  className: string;
};

const HexagonGrid = ({ className, children }: HexagonGridProps) => {
  return <ul className={`${className} hexGrid `}>{children}</ul>;
};

export default HexagonGrid;

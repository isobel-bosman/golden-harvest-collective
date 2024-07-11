import React from 'react';
import HexagonGrid from '../../../../components/hexagon-grid/hexagon-grid';
import Hexagon from '../../../../components/hexagon/hexagon';

const SeasonalVarieties = () => {
  return (
    <div id="seasonal-varieties" className="w-full bg-secondary p-3 sm:p-10">
      <div className="flex w-full flex-wrap h-full justify-center items-center rounded border border-solid border-white bg-secondary p-5">
        <h2 className="basis-full text-center text-3xl font-medium text-primary">
          Seasonal Varieties and Harvesting Times
        </h2>
        <p className="mb-8 text-primary basis-full text-center">
          Please note that the times listed below are for
          <b> Harvesting Times </b>
          and all honey varieties are subject to availability.
        </p>
        <HexagonGrid className="w-full overflow-hidden sm:w-3/4 md:w-1/3">
          <Hexagon title="Blue Gum" content="Dec - Apr" icon="blueGum" />
          <Hexagon
            title="Buffalo Thorn"
            content="Jan - Feb"
            icon="buffaloThorn"
          />
          <Hexagon title="Cosmos" content="Apr - Jul" icon="cosmos" />
          <Hexagon title="Wildflower" content="All season" icon="wildFlower" />
          <Hexagon title="Macadamia" content="Sep - Nov" icon="macadamia" />
          <Hexagon title="Citrus" content="Jul - Sep" icon="citrus" />
          <Hexagon
            title="Dark Bark Eucalyptus"
            content="May - Jul"
            icon="eucalyptus"
          />
        </HexagonGrid>
      </div>
    </div>
  );
};

export default SeasonalVarieties;

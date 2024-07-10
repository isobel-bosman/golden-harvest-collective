import React from 'react';
import HexagonGrid from '../../../../components/hexagon-grid/hexagon-grid';
import Hexagon from '../../../../components/hexagon/hexagon';

const SeasonalVarieties = () => {
  return (
    <div id="seasonal-varieties" className="w-full bg-secondary p-3 sm:p-10">
      <div className="flex w-full flex-wrap h-full justify-center items-center rounded border border-solid border-white bg-secondary p-5">
        <h2 className="mb-8 basis-full text-center text-3xl font-medium text-primary">
          Seasonal Variaties
        </h2>
        <HexagonGrid className="w-full overflow-hidden sm:w-3/4 md:w-1/3">
          <Hexagon title="Wild Flower" content="All season" icon="wildFlower" />
          <Hexagon title="Blue Gum" content="Dec - Apr" icon="blueGum" />
          <Hexagon
            title="Buffulo Thorn"
            content="Jan - Feb"
            icon="buffuloThorn"
          />
          <Hexagon title="Cosmos Flower" content="Apr - Jul" icon="cosmos" />
          <Hexagon title="Macadamia" content="Sep - Nov" icon="macadamia" />
          <Hexagon title="Citrus" content="Jul - Sep" icon="citrus" />
          <Hexagon
            title="Dark Bark Eucalyptus"
            content="May - Jul"
            icon="eucalyptus"
          />
        </HexagonGrid>
        <div className="rounded-xl bg-white w-full mb-4 p-10 sm:w-3/4 md:w-1/3 md:mx-20">
          <div className="h-full flex flex-col items-center">
            <h3 className="text-secondary text-xl font-medium">Price List</h3>
            <div className="flex flex-wrap ">
              <div className="flex basis-full justify-between items-center">
                <h4 className="text-secondary w-40 text-lg font-medium ">
                  Raw Honey
                </h4>
                <hr className="w-full border-primary" />
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">375g (squeeze) </p>
                <p className="text-secondary ">R60 </p>
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">500g (squeeze) </p>
                <p className="text-secondary ">R80 </p>
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">1Kg (squeeze) </p>
                <p className="text-secondary ">R140 </p>
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">1.5Kg (tub) </p>
                <p className="text-secondary ">R200 </p>
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">7Kg (tub) </p>
                <p className="text-secondary ">R785 </p>
              </div>

              <div className="mt-4 flex basis-full justify-between items-center">
                <h4 className="text-secondary w-56 text-lg font-medium ">
                  Creamed Honey
                </h4>
                <hr className="basis-full border-primary" />
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">300g ALOE </p>
                <p className="text-secondary ">R50 </p>
              </div>

              <div className="mt-4 flex basis-full justify-between items-center">
                <h4 className="text-secondary w-44 text-lg font-medium ">
                  Honeycomb
                </h4>
                <hr className="basis-full border-primary" />
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">350g</p>
                <p className="text-secondary ">R65 </p>
              </div>

              <div className="mt-4 flex basis-full justify-between items-center">
                <h4 className="text-secondary text-lg font-medium w-40">
                  Gift Favours
                </h4>
                <hr className="basis-full border-primary" />
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">165g</p>
                <p className="text-secondary ">R43 </p>
              </div>

              <div className="mt-4 flex basis-full justify-between items-center">
                <h4 className="text-secondary text-lg font-medium w-60">
                  Food Grade Wax
                </h4>
                <hr className="basis-full border-primary" />
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">per Kg</p>
                <p className="text-secondary ">R280 </p>
              </div>

              <div className="mt-4 flex basis-full justify-between items-center">
                <h4 className="text-secondary text-lg font-medium w-40">
                  Bulk Orders
                </h4>
                <hr className="basis-full border-primary" />
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">375g x 24 (box)</p>
                <p className="text-secondary ">R1300</p>
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">500g x 24 (box)</p>
                <p className="text-secondary ">R1725</p>
              </div>
              <div className="flex basis-full justify-between">
                <p className="text-secondary ">1Kg x 12 (box)</p>
                <p className="text-secondary ">R1620</p>
              </div>
            </div>
          </div>
        </div>

        {/* <HexagonGrid >
              <Hexagon />
              <Hexagon />
              <Hexagon />
              <Hexagon /> 
           </HexagonGrid> */}
      </div>
    </div>
  );
};

export default SeasonalVarieties;

import React from 'react';
import QRCode from '../../../../assets/images/qr-code.png';
import MultiCardCarousel from '../../../../components/multi-card-carousel/multi-card-carousel';

const Sales = () => {
  return (
    <div
      id="sales"
      className="flex w-full flex-col bg-primary p-5 sm:p-20 gap-5"
    >
      <h2 className="text-center text-3xl font-medium text-white">Sales</h2>
      <p className="italic text-white basis-full text-center">
        Please note that prices are subject to change at any time without notice
      </p>
      <div className="flex flex-col md:flex-row w-full h-full gap-5 lg:gap-10 xl:gap-20">
        <div className="rounded-xl bg-white w-full py-5 px-5">
          <h3 className="text-secondary text-xl font-medium text-center">
            Price List
          </h3>
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

        <div className="rounded-xl bg-white w-full py-5 px-5">
          <h3 className="text-secondary text-xl font-medium text-center ">
            Buy Now
          </h3>
          <p className="my-5 text-center">
            Scan this code to browse our Whatsapp catalouge (or simply click on
            it)
          </p>
          <div className="flex items-center sm:p-10 p-5">
            <img
              className="w-full min-w-40 cursor-pointer"
              src={QRCode}
              onClick={() =>
                window.open('https://wa.me/c/27815258959', '_blank')
              }
            ></img>
          </div>
        </div>
        <div className="rounded-xl bg-white w-full py-5 px-5 flex flex-col justify-between">
          <h3 className="text-secondary text-xl font-medium text-center">
            Bulk Sales
          </h3>

          <div className="flex flex-wrap">
            <div className="flex basis-full justify-between items-center">
              <h4 className="text-secondary text-lg font-medium max-w-64">
                Wildflower and Cosmos
              </h4>
              <hr className="basis-full border-primary" />
            </div>
            <div className="flex basis-full justify-between">
              <p className="text-secondary ">up to 200kg</p>
              <p className="text-secondary font-medium">R85.00 pkg</p>
            </div>
            <div className="flex basis-full justify-between">
              <p className="text-secondary ">201 - 999kg</p>
              <p className="text-secondary font-medium">R80.00 pkg</p>
            </div>
            <div className="flex basis-full justify-between">
              <p className="text-secondary ">over 1000kg</p>
              <p className="text-secondary font-medium">R75.00 pkg</p>
            </div>

            <div className="mt-6 flex basis-full justify-between items-center">
              <h4 className="text-secondary text-lg font-medium max-w-96">
                Seasonal Premium Varieties
              </h4>
              <hr className="w-full border-primary" />
            </div>
            <div className="flex basis-full justify-between">
              <p className="text-secondary ">up to 200kg</p>
              <p className="text-secondary font-medium">R90.00 pkg</p>
            </div>
            <div className="flex basis-full justify-between">
              <p className="text-secondary ">201 - 999kg</p>
              <p className="text-secondary font-medium">R85.00 pkg</p>
            </div>
            <div className="flex basis-full justify-between">
              <p className="text-secondary ">over 1000kg</p>
              <p className="text-secondary font-medium">R75.00 pkg</p>
            </div>
          </div>
          <p className="mt-6 text-secondary ">
            Please contact Shane Boyd at shane@goldenharvestco.co.za for
            enquiries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sales;

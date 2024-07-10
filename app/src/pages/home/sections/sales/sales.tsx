import React from 'react';
import QRCode from '../../../../assets/images/qr-code.png';

const Sales = () => {
  return (
    <div
      id="sales"
      className="flex w-full flex-col bg-primary p-5 sm:p-20 gap-5 sm:gap-20"
    >
      <h2 className="mb-0 text-center text-3xl font-medium text-white">
        Sales
      </h2>

      <div className="flex flex-col sm:flex-row w-full h-full gap-5 sm:gap-20">
        <div className="rounded-xl bg-white w-full py-5 px-16">
          <h3 className="text-secondary text-xl font-medium text-center ">
            Buy Now
          </h3>
          <p className="my-5 text-center">
            Scan this code to view our Whatsapp catalouge
          </p>
          <div className="flex items-center sm:p-10">
            <img className="w-full" src={QRCode}></img>
          </div>
        </div>
        <div className="rounded-xl bg-white w-full py-5 sm:px-16 px-5">
          <h3 className="text-secondary text-xl font-medium text-center">
            Bulk Sales
          </h3>

          <div className="flex flex-wrap">
            <div className="mt-4 flex basis-full justify-between items-center">
              <h4 className="text-secondary text-lg font-medium w-64">
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

            <div className="mt-4 flex basis-full justify-between items-center">
              <h4 className="text-secondary text-lg font-medium w-96">
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
        </div>
        <div className="rounded-xl bg-white w-full py-5 px-16">
          <h3 className="text-secondary text-xl font-medium text-center">
            Become a Distributer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sales;

import React from 'react';
import QRCode from '../../../../assets/images/qr-code.png';
import { getStandardPriceList } from '../../../../components/price-lists/standard-price-list.function';
import { getBulkSalesList } from '../../../../components/price-lists/bulk-price-list.function';

const Sales = () => {
  const priceList = getStandardPriceList();
  const builkList = getBulkSalesList();

  return (
    <div
      id="sales"
      className="flex w-full flex-col bg-primary p-5 sm:p-20 gap-5"
    >
      <div>
        <h2 className="text-center text-3xl font-medium text-white">Sales</h2>
        <p className="italic text-white basis-full text-center">
          Please note that prices are subject to change at any time without
          notice
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full gap-5 lg:gap-10 xl:gap-20">
        <div className="rounded-xl bg-white w-full py-5 px-5">
          <h3 className="text-secondary text-xl font-medium text-center">
            Price List
          </h3>
          <div className="flex flex-wrap ">
            {priceList.map((list, index) => {
              return (
                <React.Fragment key={`price-container-${index}`}>
                  <div
                    className="flex mt-4 basis-full justify-between items-center"
                    key={`price-${index}`}
                  >
                    <h4 className="text-secondary min-w-fit mr-2 text-lg font-medium ">
                      {list.heading}
                    </h4>
                    <hr className="w-full border-primary" />
                  </div>
                  {list.products.map((product, prodIndex) => {
                    return (
                      <div
                        className="flex basis-full justify-between"
                        key={`product-${index}-${prodIndex}-${product.description}`}
                      >
                        <p className="text-secondary ">{product.description}</p>
                        <p className="text-secondary ">{product.price}</p>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl bg-white w-full py-5 px-5">
          <h3 className="text-secondary text-xl font-medium text-center ">
            Buy Now
          </h3>
          <p className="my-5 text-center">
            Scan this code to browse our WhatsApp catalogue (or simply click on
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
            {builkList.map((bulk, index) => {
              return (
                <React.Fragment key={`bulk-container-${index}`}>
                  <div
                    className="flex mt-4 basis-full justify-between items-center"
                    key={`bulk-${index}`}
                  >
                    <h4 className="text-secondary text-lg mr-2 font-medium max-w-64 min-w-fit">
                      {bulk.heading}
                    </h4>
                    <hr className="basis-full border-primary" />
                  </div>
                  {bulk.products.map((product, chop) => {
                    return (
                      <div
                        className="flex basis-full justify-between"
                        key={`bulk-product-${index}-${chop}-${product.description}`}
                      >
                        <p className="text-secondary ">{product.name}</p>
                        <p className="text-secondary font-medium">
                          {product.price}
                        </p>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
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

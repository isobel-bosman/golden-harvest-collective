import React from 'react';
import QRCode from '../../../../assets/images/qr-code.png';
import MultiCardCarousel from '../../../../components/multi-card-carousel/multi-card-carousel';

const Products = () => {
  return (
    <div
      id="sales"
      className="flex w-full flex-col justify-center bg-primary p-5 sm:p-20 gap-5 sm:gap-20"
    >
      <h2 className="mb-0 text-center text-3xl font-medium text-white">
        Our Products
      </h2>

      <MultiCardCarousel />
    </div>
  );
};

export default Products;

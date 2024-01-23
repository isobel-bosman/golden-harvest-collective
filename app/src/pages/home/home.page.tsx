import React from 'react';
import Logo from '../../assets/logo.jpg';

const Home = () => {
  return (
    <div className="min-h-page flex w-full flex-row ">
      <div className="flex h-full basis-full flex-col justify-center gap-6 bg-primary p-20 sm:basis-2/3">
        <h1 className="text-7xl font-bold text-white">
          100% Pure Raw Honey. Locally Sourced.
        </h1>
        <h2 className="text-lg font-semibold text-secondary">
          The Golden Harvest Collective offers a lush variety of raw honey
          products sourced from local South African farmers.
        </h2>
        <button className="w-fit rounded bg-secondary px-5 py-3 font-medium text-white">
          View Products
        </button>
      </div>
      <div className="hidden h-full basis-1/3 flex-col justify-center p-0 sm:flex lg:p-14">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;

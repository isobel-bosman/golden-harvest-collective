import React from 'react';
import Logo from '../../../../assets/images/GHC Logo_Black Background.jpg';
import MadeInSa from '../../../../assets/images/Made in SA.jpg';

const LandingSection = () => {
  return (
    <div id="home" className="h-page mt-16 flex w-full flex-row ">
      <div className="flex h-full basis-full flex-col justify-between gap-6 bg-primary p-10 sm:basis-2/3 sm:p-20">
        <div className="hidden xl:block"></div>
        <div>
          <h1 className="text-7xl font-medium text-white">
            100% Pure Raw Honey. Locally Sourced.
          </h1>
          <p className="my-10 text-xl font-medium text-secondary">
            The Golden Harvest Collective offers a lush variety of raw honey
            products sourced from local South African beekeepers.
          </p>
          <a
            className="w-fit rounded bg-secondary px-5 py-3 font-normal text-white cursor-pointer"
            href="#seasonal-varieties"
          >
            View Products
          </a>
        </div>
        <img className="w-20" src={MadeInSa} alt="Made in South Africa"></img>
      </div>
      <div className="hidden h-full basis-1/3 flex-col justify-center p-0 sm:flex lg:p-14">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default LandingSection;

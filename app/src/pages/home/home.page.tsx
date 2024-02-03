import React from 'react';
import Logo from '../../assets/images/GHC Logo_Black Background.jpg';
import Warehouse from '../../assets/images/warehouse.jpeg';
import Hexagon from '../../components/hexagon/hexagon';
import HexagonGrid from '../../components/hexagon-grid/hexagon-grid';
import RevealOnScroll from '../../components/reveal-on-scroll/reveal-on-scroll';

const Home = () => {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <div className="h-page mt-16 flex w-full flex-row ">
        <div className="flex h-full basis-full flex-col justify-center gap-6 bg-primary p-10 sm:basis-2/3 sm:p-20">
          <h1 className="text-7xl font-bold text-white">
            100% Pure Raw Honey. Locally Sourced.
          </h1>
          <p className="text-xl font-semibold text-secondary">
            The Golden Harvest Collective offers a lush variety of raw honey
            products sourced from local South African farmers.
          </p>
          <button className="w-fit rounded bg-secondary px-5 py-3 font-medium text-white">
            View Products
          </button>
        </div>
        <div className="hidden h-full basis-1/3 flex-col justify-center p-0 sm:flex lg:p-14">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <RevealOnScroll>
        <div className="flex w-full flex-col items-center justify-center gap-10 bg-slate-200 p-10 sm:flex-row md:p-20 ">
          <div className="basis-1/3 md:p-10">
            <img src={Warehouse} alt="logo" />
          </div>
          <div className="flex basis-2/3 flex-col gap-5">
            <h2 className="basis-1/3 text-3xl font-bold text-primary">
              About us
            </h2>
            <p className="text-xl font-medium text-secondary">
              Golden Harvest Collective eloquently pays homage to the age-old
              tradition of honey harvesting in South Africa, encapsulating
              narratives of resilience and coexistence with nature in every jar.
              Beyond its exquisite flavor, African honey is esteemed for its
              medicinal properties, prized for its antibacterial and
              anti-inflammatory benefits. Responsibly sourced from local
              farmers, this golden nectar signifies a commitment to
              environmental preservation and the flourishing of bee populations.
              At Golden Harvest Collective, the objective is to deliver the
              purest honey while embracing the natural richness and ecological
              balance woven into the tapestry of South Africa’s honey history.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="w-full bg-secondary p-3 sm:p-10">
          <div className="flex w-full flex-wrap justify-center rounded border border-solid border-white bg-secondary p-5">
            <h2 className="mb-8 basis-full text-center text-3xl font-bold text-primary">
              Flavours of the Month
            </h2>
            <HexagonGrid className="w-full overflow-hidden sm:w-3/4 md:w-1/3">
              <Hexagon />
              <Hexagon />
              <Hexagon />
              <Hexagon />
              <Hexagon />
              <Hexagon />
              <Hexagon />
            </HexagonGrid>
            <HexagonGrid className="mb-10 w-full sm:-ml-10 sm:mt-44 sm:w-3/4 md:w-1/3">
              <Hexagon />
              <Hexagon />
              <Hexagon />
              <Hexagon />
            </HexagonGrid>
          </div>
        </div>
      </RevealOnScroll>
      <div className="h-page flex w-full flex-wrap justify-center bg-slate-200 p-10">
        <h2 className="mb-0 basis-full text-center text-3xl font-bold text-primary">
          Contact Us
        </h2>
      </div>
    </div>
  );
};

export default Home;

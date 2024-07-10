import React from 'react';
import Warehouse from '../../../../assets/images/warehouse.jpeg';

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="flex w-full flex-col items-center justify-center gap-10 bg-slate-200 p-10 sm:flex-row md:p-20 "
    >
      <div className="basis-1/3 md:p-10">
        <img src={Warehouse} alt="logo" />
      </div>
      <div className="flex basis-2/3 flex-col gap-5">
        <h2 className="basis-1/3 text-3xl font-medium text-primary">
          About us
        </h2>
        <p className="text-xl font-medium text-secondary">
          GOLDEN HARVEST COLLECTIVE eloquently pays homage to the age-old
          tradition of honey harvesting in South Africa, encapsulating
          narratives of resilience and coexistence with nature in every jar.
          Beyond its exquisite flavor, African honey is esteemed for its
          medicinal properties, prized for its antibacterial and
          anti-inflammatory benefits. Responsibly sourced from local farmers,
          this golden nectar signifies a commitment to environmental
          preservation and the flourishing of bee populations. At GOLDEN HARVEST
          COLLECTIVE, the objective is to deliver the purest honey while
          embracing the natural richness and ecological balance woven into the
          tapestry of South Africa`s honey history.
          <br /> <br /> At GOLDEN HARVEST COLLECTIVE, our mission is to pioneer
          sustainable honey production, setting industry benchmarks through
          rigorous scientific validation, transparent practices, and strategic
          collaborations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

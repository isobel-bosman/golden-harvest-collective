import React from 'react';
import Warehouse from '../../../../assets/images/about-us/warehouse.jpeg';
import SAndE from '../../../../assets/images/about-us/S&E.jpg';
import Beekeeping from '../../../../assets/images/about-us/beekeeping.jpg';
import Bees from '../../../../assets/images/about-us/bees.jpg';

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="flex w-full flex-col items-center justify-center gap-10 bg-slate-200 p-10 sm:flex-row md:p-20 "
    >
      <div className="flex flex-wrap basis-1/2 lg:basis-1/3">
        <img className="w-1/2 p-2" src={SAndE} alt="Shane and Elaine" />
        <img className="w-1/2 p-2" src={Warehouse} alt="Warehouse" />
        <img
          className="w-1/2 p-2 object-cover"
          src={Beekeeping}
          alt="Beekeeping"
        />
        <img className="w-1/2 p-2 object-cover" src={Bees} alt="Bees" />
      </div>
      <div className="flex basis-1/2 lg:basis-2/3 flex-col gap-5">
        <h2 className="basis-1/3 text-3xl font-medium text-primary">
          Meet the team
        </h2>
        <p className="text-base md:text-lg font-medium text-secondary">
          Shane, a professional in Asset and Finance Management, and Elaine, a
          Senior Architectural Technologist, founded our honey business out of a
          shared concern for the environment and the impact of imported products
          on local markets. We are dedicated to supporting our local farming and
          beekeeping community, aiming to foster economic growth, promote
          sustainability, and enhance the well-being of out nation through out
          efforts.
        </p>
        <h2 className="basis-1/3 text-3xl font-medium text-primary">
          About us
        </h2>
        <p className="text-base md:text-lg font-medium text-secondary">
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

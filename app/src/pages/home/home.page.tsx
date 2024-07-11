import React from 'react';

import RevealOnScroll from '../../components/reveal-on-scroll/reveal-on-scroll';
import LandingSection from './sections/landing-section/landing-section';
import AboutUs from './sections/about-us/about-us';
import SeasonalVarieties from './sections/seasonal-varieties/seasonal-varieties';
import Sales from './sections/sales/sales';
import ContactUs from './sections/contact-us/contact-us';
import Products from './sections/products/products';
import BecomeDistributor from './sections/become-a-distributor/become-a-distributor';

const Home = () => {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <LandingSection />

      <RevealOnScroll>
        <AboutUs />
      </RevealOnScroll>

      <RevealOnScroll>
        <Products />
      </RevealOnScroll>

      <RevealOnScroll>
        <SeasonalVarieties />
      </RevealOnScroll>

      <RevealOnScroll>
        <Sales />
      </RevealOnScroll>

      <RevealOnScroll>
        <BecomeDistributor />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactUs />
      </RevealOnScroll>
    </div>
  );
};

export default Home;

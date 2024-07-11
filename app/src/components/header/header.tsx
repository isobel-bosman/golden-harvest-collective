import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 z-10 h-16 w-full bg-secondary shadow">
      <div className="flex h-full w-full items-center justify-between px-5 sm:px-20">
        <a className="text-xl font-light text-accent" href="/">
          Golden Harvest Collective
        </a>
        <span className="hidden items-center gap-5 sm:flex">
          <a className="text-base text-accent" href="#home">
            Home
          </a>
          <a className="text-base text-accent" href="#about-us">
            About Us
          </a>
          <a className="text-base text-accent" href="#seasonal-varieties">
            Varieties
          </a>
          <a className="text-base text-accent" href="#sales">
            Sales
          </a>
          <a className="text-base text-accent" href="#contact-us">
            Contact Us
          </a>
          <a
            className="rounded bg-accent px-5 py-3 text-base text-secondary min-w-fit"
            href="#seasonal-varieties"
          >
            View Products
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;

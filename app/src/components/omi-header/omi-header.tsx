import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 z-10 h-16 w-full bg-secondary shadow">
      <div className="flex h-full w-full items-center justify-between px-5 sm:px-10">
        <a className="text-lg font-semibold text-accent" href="/">
          Golden Harvest Collective
        </a>
        <span
          className="flex items-center gap-5
        "
        >
          <a className="text-base text-accent" href="/">
            Home
          </a>
          <a className="text-base text-accent" href="/">
            About Us
          </a>
          <a className="text-base text-accent" href="/">
            Contact Us
          </a>
          <a
            className="rounded bg-accent px-5 py-3 text-base text-secondary"
            href="/"
          >
            View Products
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;

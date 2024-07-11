import React from 'react';

const BecomeDistributor = () => {
  return (
    <div
      id="distributor"
      className="flex w-full flex-col items-center p-5 sm:p-20 gap-5 bg-bees bg-opacity-90 "
    >
      <div className="rounded-xl bg-white w-full sm:w-2/3 py-5 px-5 flex flex-col ">
        <h3 className="text-secondary text-xl font-medium text-center">
          Become a distributor
        </h3>
        <p className="italic text-center">
          This is where your journey starts, whether it's for extra income or to
          build an empire. <br />
        </p>
        <p className=" text-center">
          Tell us a little about yourself whilst we will consider your
          application
        </p>
      </div>
    </div>
  );
};

export default BecomeDistributor;

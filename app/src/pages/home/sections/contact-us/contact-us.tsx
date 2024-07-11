import React from 'react';

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className=" flex w-full flex-col bg-slate-200 p-5 sm:p-20"
    >
      <h2 className="mb-0 text-center text-3xl font-medium text-primary">
        Contact Us
      </h2>
      <div className="flex w-full gap-10">
        <div className="w-full flex flex-col gap-10">
          <div>
            <h3 className="text-xl">ADDRESS</h3>
            <p className="text-md">
              558 Cliff Avenue <br />
              Waterkloof Ridge X2 <br />
              Pretoria
            </p>
          </div>
          <div>
            <h3 className="text-xl">GENERAL ENQUIRIES &amp; BULK SALES</h3>
            <p className="text-md">
              Telephone Number: 079 233 8103 <br />
              Email: shane@goldenharvestco.co.za
            </p>
          </div>
          <div>
            <h3 className="text-xl">SALES ENQUIRIES</h3>
            <p className="text-md">
              Telephone Number: 081 525 8959 <br />
              Email: info@goldenharvestco.co.za
            </p>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default ContactUs;

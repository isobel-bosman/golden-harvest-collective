import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className=" flex w-full flex-col bg-slate-200 p-5 sm:p-20"
    >
      <h2 className="mb-10 text-center text-3xl font-medium text-accent">
        Contact Us
      </h2>

      <div className="flex w-full flex-col sm:flex-row gap-10">
        <div className="basis-2/3 bg-accent rounded p-5 sm:p-20">
          <div className="w-full flex flex-col sm:flex-row gap-10">
            <div className="w-full flex flex-col gap-10">
              <div>
                <h3 className="text-xl">SALES ENQUIRIES</h3>
                <p className="text-md">
                  <b>Telephone Number</b>: 081 525 8959 <br />
                  <b>Email</b>: info@goldenharvestco.co.za
                </p>
              </div>
              <div>
                <h3 className="text-xl">
                  GENERAL ENQUIRIES &amp; TRADE ENQUIRIES
                </h3>
                <p className="text-md">
                  <b>Telephone Number</b>: 079 233 8103 <br />
                  <b>Email</b>: shane@goldenharvestco.co.za
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col sm:items-end">
              <div>
                <h3 className="text-xl">ADDRESS</h3>
                <p className="text-md">
                  558 Cliff Avenue <br />
                  Waterkloof Ridge X2 <br />
                  Pretoria
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center">
          <MapContainer
            center={[-25.81851, 28.25038]}
            zoom={15}
            scrollWheelZoom={false}
            className="h-96 w-96"
          >
            <TileLayer
              className="h-full w-full"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-25.81851, 28.25038]}>
              <Popup autoClose={false}>Golden Harvest Collective</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

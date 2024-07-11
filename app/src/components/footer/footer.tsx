import React from 'react';
import InstagramLogo from '../../assets/icons/instagram-logo.wine.svg';
import WhatsAppLogo from '../../assets/icons/whatsapp-logo.svg';
import GHCLogo from '../../assets/images/GHC_Logo_White Background.png';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const handleClick = () => {
    navigator.clipboard.writeText('+27815258959');
    toast.success('Copied to clipboard 🐝', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  return (
    <div className="bottom-0 z-10 w-full bg-secondary shadow flex justify-between items-center">
      <div className="flex w-full flex-col gap-5 p-10 px-5 sm:px-10">
        <a className="text-lg font-semibold text-accent" href="/">
          GHC
        </a>
        <div className="text-white">
          Copyright © 2020 Golden Harvest Collective.
          <br />
          All rights reserved
        </div>
        <span className="items-center gap-5 sm:flex">
          <div className="h-15 w-15 rounded-full">
            <a
              href="https://www.instagram.com/goldenharvestcollective?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstagramLogo} alt="instagram-logo" />
            </a>
          </div>
          <div
            className="h-15 w-15 cursor-pointer rounded-full"
            onClick={handleClick}
          >
            <img src={WhatsAppLogo} alt="whatsapp-logo" />
          </div>
        </span>
      </div>
      <img className="w-40 h-40 object-cover mr-10" src={GHCLogo}></img>
      <ToastContainer />
    </div>
  );
};

export default Footer;

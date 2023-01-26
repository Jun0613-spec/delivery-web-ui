import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-ful py-16">
      <div className="max-w-[1240px] mx-auto flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>
            Over <span className="font-bold text-orange-600">Eats</span>
          </h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <p className="text-right">© 2023 Jun Park.</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className=" pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden
"
      id="Footer"
    >
      <div
        className="container mx-auto flex flex-col md:flex-row justify-between items-start
"
      >
        <div
          className="w-full md:w-1/3 mb-8 md:mb-0
"
        >
          <img src={assets.logo_dark} alt="" className="h-14" />
          <p
            className="text-gray-400 mt-4
"
          >
            Don’t miss your chance to own a slice of serenity in Hubli. Book now
            and turn your dream home into a reality with Zenora.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3
            className="text-white text-lg font-bold mb-4
"
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>

            <a href="#About" className="hover:text-white">
              About Us
            </a>

            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>

            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3
            className="text-white text-lg font-bold mb-4
"
          >
            Contact Details
          </h3>

          <div className="flex gap-2 text-gray-400 hover:text-white">
            <p className="font-bold">Phone:</p>
            {/* <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-400 border-gray-700 focus:outline-none w-full md:w-auto"
            /> */}

            {/* <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button> */}
            <p className="">+91 98745 63211</p>
          </div>
          <div className="flex gap-2 text-gray-400 hover:text-white">
            <p className="font-bold">Email:</p>
            <p className="">info@zenora.com</p>
          </div>
          <div className="flex gap-2 text-gray-400 hover:text-white">
            <p className="font-bold">Address:</p>
            <p className="">
              Vidyanagar, Hubli, Karnataka
              <br />
              580031
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 @ sutarkeerthi. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;

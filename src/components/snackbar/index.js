import React from "react";
import { Link } from "gatsby";

const Snackbar = () => {
  return (
    <div className="fixed z-10 w-screen h-screen top-20 right-0 left-0 bottom-0 blue-glassmorphism slide-in">
      <ul className="flex flex-col items-center justify-between font-nunito text-primary font-semibold tracking-wide ">
        <li className=" active:text-secondary mb-10 mt-20">
          <Link to="home">Home</Link>
        </li>
        <li className=" active:text-secondary mb-10">
          <Link to="/services">Services</Link>
        </li>
        <li className=" active:text-secondary mb-10">
          <Link to="/our-project">Our Project</Link>
        </li>
        <li className=" active:text-secondary mb-10">
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <button
            type="button"
            className="text-primary bg-transparent border-2 border-primary rounded-lg px-5 py-2"
          >
            Contact us
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Snackbar;

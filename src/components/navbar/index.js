import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Sidebar } from "..";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="max-w-screen-xl w-full h-24 mx-auto py-7 flex items-center justify-between text-white px-3 z-50">
      <div>
        <Link to="/">
          <StaticImage
            src={"../../images/logo.png"}
            alt="Enver"
            placeholder="blurred"
            w={200}
            h={200}
            layout="fixed"
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/* Desktop Version */}
      <div className="flex-[0.4] hidden md:block">
        <ul className="flex items-center justify-between font-nunito text-primary font-semibold tracking-wide ">
          <li className="hover:text-secondary active:text-secondary cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={1100}>
              Home
            </Link>
          </li>
          <li className="hover:text-secondary active:text-secondary cursor-pointer">
            <Link to="services" spy={true} smooth={true} duration={1100}>
              Services
            </Link>
          </li>
          <li className="hover:text-secondary active:text-secondary cursor-pointer">
            <Link to="portfolio" spy={true} smooth={true} duration={1100}>
              Our Project
            </Link>
          </li>
          <li className="hover:text-secondary active:text-secondary cursor-pointer">
            <Link to="about" spy={true} smooth={true} duration={1100}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <Link to="contact" spy={true} smooth={true} duration={1100}>
          <button
            type="button"
            className="text-primary bg-transparent border-2 border-primary rounded-lg px-5 py-2 hover:bg-secondary hover:text-white hover:border-secondary transition duration-700 ease-in-out"
          >
            Contact us
          </button>
        </Link>
      </div>
      {/* Mobile Version */}
      <div className=" md:hidden">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <img
            src={require("../../images/sort.svg").default}
            alt="Menu"
            placeholder="tracedSVG"
            width={40}
            height={40}
            layout="fixed"
          />
        </button>
        {isExpanded && (
          <Sidebar toggleExpansion={toggleExpansion} isExpanded={isExpanded} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Snackbar } from "..";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="max-w-screen-xl w-full h-24 mx-auto py-7 flex items-center justify-between text-white px-3">
      <div>
        <Link to="/">
          <StaticImage
            src={"../../images/logo.png"}
            alt="Enver"
            placeholder="blurred"
            w={200}
            h={200}
            layout="fixed"
          />
        </Link>
      </div>
      {/* Desktop Version */}
      <div className="flex-[0.4] hidden md:block">
        <ul className="flex items-center justify-between font-nunito text-primary font-semibold tracking-wide ">
          <li className=" active:text-secondary">
            <Link to="home">Home</Link>
          </li>
          <li className=" active:text-secondary">
            <Link to="/services">Services</Link>
          </li>
          <li className=" active:text-secondary">
            <Link to="/our-project">Our Project</Link>
          </li>
          <li className=" active:text-secondary">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <button
          type="button"
          className="text-primary bg-transparent border-2 border-primary rounded-lg px-5 py-2"
        >
          Contact us
        </button>
      </div>
      {/* Mobile Version */}
      <div className=" md:hidden">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <StaticImage
            src={"../../images/sort.svg"}
            alt="Menu"
            placeholder="tracedSVG"
            width={40}
            height={40}
            layout="fixed"
          />
        </button>
        {isExpanded && <Snackbar />}
      </div>
    </nav>
  );
};

export default Navbar;

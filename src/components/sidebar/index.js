import React from "react";
import { Link } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ toggleExpansion, isExpanded }) => {
  return (
    <div className="fixed z-40 w-screen h-screen top-0 right-0 left-0 bottom-0 blue-glassmorphism slide-in">
      <div className="flex items-center justify-between px-6 py-8">
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
        <IoMdClose fontSize={30} 
          className="cursor-pointer"
          onClick={() => toggleExpansion(!isExpanded)}/>
        {/* <button
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
        </button> */}
      </div>
      <ul className="flex flex-col items-center justify-between font-nunito text-primary font-semibold tracking-wide ">
        <li className=" hover:text-gray-200 cursor-pointer active:text-secondary mb-10 mt-20">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={1100}
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Home
          </Link>
        </li>
        <li className=" hover:text-gray-200 cursor-pointer active:text-secondary mb-10">
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={1100}
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Services
          </Link>
        </li>
        <li className=" hover:text-gray-200 cursor-pointer active:text-secondary mb-10">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1100}
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Our Project
          </Link>
        </li>
        <li className="hover:text-gray-200 cursor-pointer active:text-secondary mb-10">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={1100}
            onClick={() => toggleExpansion(!isExpanded)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1100}
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <button
              type="button"
              className="text-primary bg-transparent border-2 border-primary rounded-lg px-5 py-2"
            >
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;

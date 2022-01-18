import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-scroll";

const Button = (props) => {
  return (
    <Link to={props.destination} spy={true} smooth={true} duration={1100}>
      <button
        type="button"
        className={`text-white bg-secondary hover:bg-secondaryDark transition duration-700 ease-in-out rounded-lg px-5 py-4 ${props.width} mt-10 flex items-center justify-between font-nunito text-lg`}
      >
        {props.title} <FiArrowUpRight fontSize={24} />
      </button>
    </Link>
  );
};

export default Button;

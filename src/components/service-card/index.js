import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ title, description, icon, color }) => {
  return (
    <div>
      <div
        className={`bg-${color}-light rounded-full w-16 h-16 text-center mx-auto flex items-center justify-center`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`text-3xl text-center text-${color}`}
        />
      </div>
      <h4 className="font-sans text-white text-xl font-normal tracking-wide text-center mt-3">
        {title}
      </h4>
      <p className="font-nunito text-primary font-light tracking-wide text-base text-center word-break mt-5">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

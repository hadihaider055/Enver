import React from "react";
import Button from "../../components/button";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div
      className="w-full bg-[rgba(0,0,0,0.2)] h-full pt-44 md:mt-20 py-28 "
      id="contact"
    >
      <div className="max-w-screen-xl w-full mx-auto px-6 relative">
        <span className="herobg"></span>
        <img
          src={require("../../images/add.png").default}
          className="absolute md:right-16 right-3 -mt-12"
          width={30}
          height={30}
          alt="Add Icon"
        />
        <div className="flex items-start flex-col md:flex-row  justify-between">
          <Zoom right duration={2000}>
            <h2 className="font-nunito text-white text-5xl font-bold tracking-wide md:w-3/5">
              Contact us for the service you want to use
            </h2>
          </Zoom>
          <Fade right duration={2000}>
            <Button title="Contact us" width="w-40" destination="contact" />
          </Fade>
        </div>
        <img
          src={require("../../images/circles.png").default}
          alt="Circles"
          className="absolute top-72 md:top-36 left-5 md:left-24"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Contact;

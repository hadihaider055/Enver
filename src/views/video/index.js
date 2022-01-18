import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const VideoView = () => {
  return (
    <div className="max-w-screen-xl w-full mt-24 mx-auto px-6" id="about">
      <div className="flex md:justify-between items-start flex-col md:flex-row justify-start">
        <Fade bottom duration={2000}>
          <h2 className="font-sans text-white text-5xl font-bold tracking-wide">
            Why Enver Is The <br />
            Best Choice?
          </h2>
        </Fade>
        <Fade top duration={2000}>
          <p className="font-nunito text-primary font-normal tracking-wide mt-10 md:w-2/5">
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </Fade>
      </div>

      <Fade zoom duration={2000}>
        <div className="mt-20">
          <StaticImage
            src={"../../images/video.png"}
            alt="Video"
            className="w-full object-contain"
            placeholder="blurred"
          />
          <button className="absolute z-10 left-1/2 -ml-10 md:mt-72 mt-20">
            <BsPlayFill
              fontSize={80}
              className=" text-white bg-secondary rounded-full p-5 border-0 text-center opacity-90"
            />
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default VideoView;

import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const VideoView = () => {
  return (
    <div className="max-w-screen-xl w-full mt-24 mx-auto px-6" id="about">
      <div className="flex md:justify-between items-start flex-col md:flex-row justify-start overflow-visible">
        <Fade bottom duration={2000}>
          <h2 className="font-sans text-white text-5xl font-bold tracking-wide overflow-visible">
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
          <iframe
            src="https://www.youtube.com/embed/iwyyxEJCIuU"
            title="YouTube video player"
            frameBorder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg object-contain w-full h-96 md:h-[600px] "
          ></iframe>
        </div>
      </Fade>
    </div>
  );
};

export default VideoView;

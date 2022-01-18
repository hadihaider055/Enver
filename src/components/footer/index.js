import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Link as LinkS } from "react-scroll";

const Footer = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto h-full py-10 px-6">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <LinkS
          className="cursor-pointer"
          spy={true}
          smooth={true}
          duration={1100}
          to="home"
        >
          <StaticImage
            src={"../../images/logo.png"}
            alt="Enver"
            placeholder="blurred"
          />
        </LinkS>
        <div className="flex-[0.5]">
          <ul className="flex items-center justify-between font-nunito text-primary font-base tracking-wide flex-col md:flex-row">
            <li className="hover:text-secondary transition duration-700 ease-in-out active:text-secondary mt-1">
              <Link to="/support">Support</Link>
            </li>
            <li className="hover:text-secondary transition duration-700 ease-in-out active:text-secondary mt-1">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-secondary transition duration-700 ease-in-out active:text-secondary mt-1">
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-nunito text-primary font-base tracking-wide mt-1">
            © 2020 Enver, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

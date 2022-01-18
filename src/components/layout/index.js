import React from "react";
import { Navbar } from "..";
import Footer from "../footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

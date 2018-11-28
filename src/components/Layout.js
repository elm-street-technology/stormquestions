import React from "react";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import favicon from "../images/favicon.png";

import config from "../utils/siteConfig";

import "../styles/fonts.css";

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#4652AF",
          secondary: "#68FBD0",
          gray100: "#f4f4f4",
          gray600: "#465568",
          black: "#1F2E41",
        },
      }}
    >
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

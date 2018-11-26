import React from "react";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";

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
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

import React from "react";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Home from "../components/Home";

import "../styles/fonts.css";

const Storm = ({ classes }) => {
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
      <Home />
    </ThemeProvider>
  );
};

export default Storm;

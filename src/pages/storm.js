import React from "react";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Home from "../components/storm/Home";

import "../styles/fonts.css";

const Storm = ({ classes }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "blue",
          secondary: "red",
          tertiary: "gray",
          quaternary: "purple",
        },
      }}
    >
      <Home />
    </ThemeProvider>
  );
};

export default Storm;

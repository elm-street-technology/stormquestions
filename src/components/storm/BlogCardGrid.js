import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const BlogCardGrid = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#fff !important",
    },
    a: {
      textDecoration: "none !important",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
  },
  root: {
    display: "grid",
    gridColumnGap: "36px",
    gridRowGap: "60px",
    justifyContent: "center",
    width: "100%",
    margin: "30px auto 96px auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 320px))",

    // [theme.breakpoints[600]]: {
    //   gridTemplateColumns: "repeat(2, 280px)",
    // },

    // [theme.breakpoints[900]]: {
    //   gridTemplateColumns: "repeat(3, 280px)",
    // },
  },
}))(BlogCardGrid);

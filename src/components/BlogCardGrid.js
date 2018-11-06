import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const BlogCardGrid = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    display: "grid",
    gridColumnGap: "36px",
    gridRowGap: "60px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 320px))",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1080px",
    margin: "30px auto 96px auto",
  },
}))(BlogCardGrid);

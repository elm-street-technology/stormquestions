import React from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

const Container = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1080px",
    padding: "0 8px",
    margin: "0 auto",
  },
});

export default withStyles(styles)(Container);

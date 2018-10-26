import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Hero = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <h1>Hello world</h1>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    padding: "0px 14px 0px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
  },
});

export default withStyles(styles)(Hero);

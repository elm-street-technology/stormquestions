import React from "react";
import withStyles from "elevate-ui/withStyles";

const BlogHeading = ({ classes, className }) => (
  <div className={classes.root}>
    <h1 className={classes.heading}>Blog</h1>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  heading: {
    paddingTop: "80px",
    paddingBottom: "10px",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "League Spartan",
  },
});

export default withStyles(styles)(BlogHeading);

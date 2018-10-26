import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const FaqsHeading = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <h1 className={classes.heading}>Need further assistance?</h1>
      <h2 className={classes.subHeading}>
        Below are the most frequently asked questions
      </h2>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "680px",
    paddingBottom: "20px",
  },
  heading: {
    color: theme.colors.black,
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "18px",
  },
  subHeading: {
    color: theme.colors.gray600,
    fontSize: "21px",
  },
});

export default withStyles(styles)(FaqsHeading);

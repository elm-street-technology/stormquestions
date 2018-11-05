import React from "react";
import withStyles from "elevate-ui/withStyles";
import CTAButton from "./CTAButton";

const PrimaryCTA = ({ classes, tagline, title, description }) => (
  <div className={classes.root}>
    <div className={classes.heading}>Have a question we didn’t answer?</div>
    <div className={classes.subHeading}>
      Provide your email and we'll be in touch shortly
    </div>
    <CTAButton />
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "70px 14px",
  },
  heading: {
    color: theme.colors.black,
    fontSize: "26px",
    fontFamily: "League Spartan",
    paddingBottom: "10px",
    lineHeight: "1.4",
    textAlign: "center",
  },
  subHeading: {
    color: theme.colors.gray600,
    fontSize: "21px",
    paddingBottom: "24px",
    lineHeight: "1.2",
    textAlign: "center",
  },
});

export default withStyles(styles)(PrimaryCTA);

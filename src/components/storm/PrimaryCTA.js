import React from "react";
import withStyles from "elevate-ui/withStyles";
import CTAForm from "./CTAForm";

const PrimaryCTA = ({ classes, className, tagline, title, description }) => (
  <div className={classes.root}>
    <div className={classes.heading}>Have a question we didn’t answer?</div>
    <div className={classes.subHeading}>
      Provide your email and we'll be in touch shortly
    </div>
    <CTAForm />
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "80px 0px",
  },
  heading: {
    color: theme.colors.black,
    fontSize: "26px",
    fontFamily: "League Spartan",
    paddingBottom: "16px",
  },
  subHeading: {
    color: theme.colors.gray600,
    fontSize: "21px",
    paddingBottom: "30px",
  },
});

export default withStyles(styles)(PrimaryCTA);

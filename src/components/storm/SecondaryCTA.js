import React from "react";
import withStyles from "elevate-ui/withStyles";

const PrimaryCTA = ({ classes, className, tagline, title, description }) => (
  <div className={classes.root}>
    <div className={classes.heading}>Receive Donation Funds</div>
    <div className={classes.subHeading}>
      Send us a private message on GoFundMe to appeal for receiving donation
      funds.
    </div>
    <button className={classes.button}>Go to page</button>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 0px",
    backgroundColor: theme.colors.gray100,
  },
  heading: {
    color: theme.colors.black,
    fontSize: "26px",
    fontFamily: "League Spartan",
    paddingBottom: "4px",
    lineHeight: "1.4",
  },
  subHeading: {
    color: theme.colors.gray600,
    fontSize: "21px",
    padding: "0px 14px 30px 14px",
    maxWidth: "520px",
    lineHeight: "1.4",
  },
  button: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: ".5px",
    backgroundColor: theme.colors.primary,
    borderRadius: "32px",
    padding: "14px 40px",
  },
});

export default withStyles(styles)(PrimaryCTA);

import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Hero = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <div className={classes.heroLeft}>
        <h1 className={classes.heading}>
          We want to <span className={classes.headingEnd}>help.</span>
        </h1>
        <p className={classes.subHeading}>
          Everything we know about storms is at your disposal.
        </p>
        <p className={classes.headingBottom}>
          <span className={classes.headingBottomTop}>Stay informed.</span>
        </p>
        <p className={classes.headingBottom}>Keep you and your family safe.</p>
      </div>
      <div className={classes.heroRight}>
        <video
          className={classes.video}
          controls
          src="https://youtu.be/fSTdAzcQIB8"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
        <p className={classes.headingBottomMobile}>
          <span className={classes.headingBottomTopMobile}>Stay informed.</span>
        </p>
        <p className={classes.headingBottomMobile}>
          Keep you and your family safe.
        </p>
      </div>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0px 14px 0px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      textAlign: "left",
    },
  },
  heroLeft: {
    paddingTop: "20px",
  },

  video: {
    maxWidth: "600px",
    width: "100%",
    paddingBottom: "30px",

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
      width: "560px",
      height: "360px",
    },
  },
  heading: {
    color: theme.colors.black,
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "16px",

    [theme.breakpoints[900]]: {
      fontSize: "34px",
    },
  },
  headingEnd: {
    color: theme.colors.primary,
  },
  subHeading: {
    display: "none",
    color: theme.colors.gray600,
    fontFamily: "League Spartan",
    fontSize: "18px",
    lineHeight: "1.5",
    maxWidth: "320px",
    paddingBottom: "80px",

    [theme.breakpoints[900]]: {
      display: "flex",
    },
  },
  headingBottom: {
    color: theme.colors.gray600,
    fontFamily: "League Spartan",
    fontSize: "18px",
    lineHeight: "1.5",
    maxWidth: "320px",
    display: "none",

    [theme.breakpoints[900]]: {
      display: "flex",
    },
  },
  headingBottomTop: {
    fontSize: "24px",
    color: theme.colors.black,
    display: "none",

    [theme.breakpoints[900]]: {
      display: "flex",
    },
  },
  headingBottomMobile: {
    color: theme.colors.gray600,
    fontFamily: "League Spartan",
    fontSize: "18px",
    lineHeight: "1.5",
    justifyContent: "center",
    display: "flex",

    [theme.breakpoints[900]]: {
      display: "none",
    },
  },
  headingBottomTopMobile: {
    fontSize: "24px",
    color: theme.colors.black,

    [theme.breakpoints[900]]: {
      display: "none",
    },
  },
});

export default withStyles(styles)(Hero);

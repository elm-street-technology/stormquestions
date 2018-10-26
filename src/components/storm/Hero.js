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
          controls
          src="https://youtu.be/fSTdAzcQIB8"
          width="560"
          height="360"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
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
    justifyContent: "space-between",
    padding: "0px 14px 0px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
  },
  heroLeft: {
    paddingTop: "20px",
  },
  heading: {
    color: theme.colors.black,
    fontFamily: "League Spartan",
    fontSize: "34px",
    paddingBottom: "16px",
  },
  headingEnd: {
    color: theme.colors.primary,
  },
  subHeading: {
    color: theme.colors.gray600,
    fontFamily: "League Spartan",
    fontSize: "18px",
    lineHeight: "1.5",
    maxWidth: "320px",
    paddingBottom: "80px",
  },
  headingBottom: {
    color: theme.colors.gray600,
    fontFamily: "League Spartan",
    fontSize: "18px",
    lineHeight: "1.5",
    maxWidth: "320px",
  },
  headingBottomTop: {
    color: theme.colors.black,
  },
});

export default withStyles(styles)(Hero);

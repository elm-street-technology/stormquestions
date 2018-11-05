import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import CTAButton from "./CTAButton";

const Hero = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.heroLeft}>
          <h1 className={classes.heading}>
            We want to <span className={classes.headingEnd}>help.</span>
          </h1>
          <div className={classes.headingBottomContainer}>
            <p className={classes.subHeading}>
              Everything we know about storms is at your disposal.
            </p>
            <p className={classes.headingBottom}>
              <span className={classes.headingBottomTop}>Stay informed.</span>
            </p>
            <p
              style={{ marginBottom: "30px" }}
              className={classes.headingBottom}
            >
              Keep you and your family safe.
            </p>
            <CTAButton />
          </div>
        </div>
        <div>
          <iframe
            className={classes.video}
            controls
            src="https://www.youtube.com/embed/fSTdAzcQIB8?feature=oembed"
          >
            Sorry, your browser doesn't support embedded videos.
          </iframe>
          <div className={classes.headingBottomMobileContainer}>
            <p className={classes.headingBottomMobile}>
              <span className={classes.headingBottomTopMobile}>
                Stay informed.
              </span>
            </p>
            <p
              style={{ marginBottom: "20px" }}
              className={classes.headingBottomMobile}
            >
              Keep you and your family safe.
            </p>
            <CTAButton className={classes.headingBottomMobile} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.colors.gray100,

    [theme.breakpoints[900]]: {
      padding: "100px 14px",
    },
  },
  container: {
    padding: "50px 14px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    paddingRight: "12px",
  },

  video: {
    maxWidth: "600px",
    width: "100%",
    paddingBottom: "30px",
    height: "300px",

    [theme.breakpoints[600]]: {
      paddingBottom: "0px",
      height: "380px",
      width: "600px",
    },

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
      width: "600px",
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
    fontSize: "24px",
    color: theme.colors.black,
  },
  headingBottomMobile: {
    color: theme.colors.gray600,
    fontFamily: "League Spartan",
    fontSize: "18px",
    lineHeight: "1.5",
    justifyContent: "center",
    display: "flex",
  },
  headingBottomTopMobile: {
    fontSize: "24px",
    paddingTop: "20px",
    color: theme.colors.black,
  },
  headingBottomContainer: {
    marginBottom: "30px",
    flexDirection: "column",
    display: "none",

    [theme.breakpoints[900]]: {
      display: "flex",
    },
  },
  headingBottomMobileContainer: {
    [theme.breakpoints[900]]: {
      display: "none",
    },
  },
});

export default withStyles(styles)(Hero);

import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import CTAButton from "./CTAButton";
import topography from "../images/topography.svg";

const Hero = ({ classes, className, heroTop, heroBottom }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.heroLeft}>
          <div
            className={classes.heroTop}
            dangerouslySetInnerHTML={{
              __html: heroTop.childMarkdownRemark.html,
            }}
          />
          <div className={classes.headingBottomContainer}>
            <div
              className={classes.heroBottom}
              dangerouslySetInnerHTML={{
                __html: heroBottom.childMarkdownRemark.html,
              }}
            />
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
            <div
              className={classes.heroBottomMobile}
              dangerouslySetInnerHTML={{
                __html: heroBottom.childMarkdownRemark.html,
              }}
            />
            <CTAButton />
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
    fontFamily: "League Spartan",

    [theme.breakpoints[900]]: {
      padding: "100px 14px",
    },
    backgroundImage: `url('${topography}')`,
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
  heroTop: {
    "& h1": {
      color: theme.colors.black,
      fontSize: "26px",
      paddingBottom: "16px",
      lineHeight: "1.4",

      [theme.breakpoints[900]]: {
        fontSize: "34px",
      },
    },
    "& p": {
      color: theme.colors.gray600,
      fontFamily: "League Spartan",
      fontSize: "18px",
      lineHeight: "1.5",
      paddingBottom: "20px",
      display: "none",

      [theme.breakpoints[900]]: {
        textAlign: "left",
        paddingBottom: "80px",
        maxWidth: "320px",
        display: "flex",
      },
    },
    "& strong": {
      color: theme.colors.primary,
    },
  },
  heroBottom: {
    "& h2": {
      fontSize: "24px",
      color: theme.colors.black,
      paddingBottom: "10px",
    },
    "& p": {
      color: theme.colors.gray600,
      fontSize: "18px",
      lineHeight: "1.5",
      maxWidth: "320px",
      paddingBottom: "30px",
    },
  },
  heroBottomMobile: {
    "& h2": {
      fontSize: "24px",
      paddingTop: "20px",
      paddingBottom: "8px",
      color: theme.colors.black,
    },
    "& p": {
      color: theme.colors.gray600,
      fontSize: "18px",
      lineHeight: "1.5",
      justifyContent: "center",
      display: "flex",
      paddingBottom: "20px",
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

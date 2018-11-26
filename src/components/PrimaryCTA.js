import React from "react";
import withStyles from "elevate-ui/withStyles";
import CTAButton from "./CTAButton";

const PrimaryCTA = ({ classes, text }) => (
  <div className={classes.root}>
    <div
      className={classes.text}
      dangerouslySetInnerHTML={{
        __html: text.childMarkdownRemark.html,
      }}
    />
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
  text: {
    "& h1": {
      color: theme.colors.black,
      fontSize: "26px",
      fontFamily: "League Spartan",
      paddingBottom: "10px",
      lineHeight: "1.4",
      textAlign: "center",
    },

    "& p": {
      color: theme.colors.gray600,
      fontSize: "21px",
      paddingBottom: "24px",
      lineHeight: "1.2",
      textAlign: "center",
    },
  },
});

export default withStyles(styles)(PrimaryCTA);

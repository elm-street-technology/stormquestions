import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Resources = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <div className={classes.inner}>
        <h1 className={classes.heading}>Resources</h1>
        <p className={classes.paragraph}>
          If you have an insurance company representative or Independent
          Adjuster coming to your property, you should probably contact a{" "}
          <span className={classes.bold}>Public Insurance Adjuster</span> to
          assist you.
        </p>
        <p className={classes.paragraph}>
          <span className={classes.bold}>Public Insurance Adjusters</span> are
          the only entity other than a lawyer that can legally assist you (and
          they ONLY represent you) with your claim filing and dealing with the
          insurance company adjusters.
        </p>
        <h3 className={classes.closing}>
          Send an email to {""}
          <a href="mailto:AllStormQuestions@gmail.com" className={classes.link}>
            AllStormQuestions@gmail.com
          </a>{" "}
          and we will have a licensed, Public Insurance Adjuster contact you
          immediately.
        </h3>
      </div>
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
    padding: "60px 0px",
    maxWidth: "680px",
  },
  heading: {
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0, 0, 0, .15)",
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "18px",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
  },
  paragraph: {
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.10)",
    color: "#DCF6F5",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "1.4",
    paddingBottom: "28px",
  },
  bold: {
    color: "#DCF6F5",
    fontWeight: "700",
  },
  underline: {
    borderBottom: `2px solid ${theme.colors.primary}`,
  },
  closing: {
    textShadow: "0px 2px 4px rgba(0, 0, 0, .15)",
    lineHeight: "1.4",
    color: "#DCF6F5",
    fontWeight: "700",
    fontSize: "21px",
  },
  link: {
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.10)",
    color: theme.colors.secondary,
    textDecoration: "none",
    fontWeight: "700",

    "&:hover": {
      borderBottom: "2px solid #DCF6F5",
      transition: "250ms all",
    },
  },
});

export default withStyles(styles)(Resources);

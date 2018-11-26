import React from "react";
import withStyles from "elevate-ui/withStyles";
import CTAButton from "./CTAButton";
import PageBody from "./PageBody";

const Introduction = ({ classes, title, body }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.inner}>
        <h1 className={classes.heading}>{title}</h1>
        <PageBody color={"#465568"} body={body} />
        <h3 className={classes.closing}>
          <CTAButton />
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
    maxWidth: "680px",
    padding: "60px 12px",

    [theme.breakpoints[600]]: {
      padding: "80px 12px",
    },
  },
  heading: {
    color: theme.colors.black,
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "18px",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
  },
  paragraph: {
    color: theme.colors.gray600,
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "1.4",
    paddingBottom: "28px",
  },
  bold: {
    fontWeight: "700",
  },
  underline: {
    borderBottom: `2px solid ${theme.colors.primary}`,
  },
  closing: {
    color: theme.colors.black,
    fontWeight: "700",
    // fontSize: "21px",
    lineHeight: "1.3",
  },
  link: {
    color: theme.colors.primary,
    textDecoration: "none",
    fontWeight: "700",

    "&:hover": {
      borderBottom: `2px solid ${theme.colors.gray600}`,
      transition: "250ms all",
    },
  },
});

export default withStyles(styles)(Introduction);

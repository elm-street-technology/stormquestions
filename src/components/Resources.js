import React from "react";
import withStyles from "elevate-ui/withStyles";
import PageBody from "./PageBody";

const Resources = ({ classes, title, body }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h1 className={classes.heading}>{title}</h1>
      <PageBody body={body} color={"#DCF6F5"} linkColor={"#68FBD0"} />
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    backgroundColor: theme.colors.gray600,
    width: "100%",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 12px 0px",
    maxWidth: "680px",
    margin: "auto",

    [theme.breakpoints[600]]: {
      padding: "60px 12px 10px",
    },
  },
  heading: {
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0, 0, 0, .15)",
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "18px",
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

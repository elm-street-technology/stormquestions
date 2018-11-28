import React from "react";
import withStyles from "elevate-ui/withStyles";
import logo2 from "../images/logo2.png";

const Header = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={logo2} alt={"Brand logo"} className={classes.logoImage} />
        <div className={classes.logoText}>StormQuestions</div>
      </div>
      <div className={classes.copyright}>© 2018 All Rights Reserved</div>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: theme.colors.primary,
  },
  container: {
    maxWidth: "1080px",
    width: "100%",
    margin: "0 auto",
    padding: "0px 14px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoImage: {
    width: "26px",
    height: "26px",

    [theme.breakpoints[600]]: {
      width: "34px",
      height: "34px",
    },
  },
  logoText: {
    fontFamily: "League Spartan",
    color: "#fff",
    paddingTop: "4px",
    fontSize: "18px",
    paddingLeft: "6px",

    [theme.breakpoints[600]]: {
      fontSize: "21px",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    marginTop: "40px",
  },
  copyright: {
    fontSize: "13px",
    letterSpacing: ".3px",
    color: theme.colors.gray100,
    paddingTop: "10px",
  },
});

export default withStyles(styles)(Header);

import React from "react";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import logo from "../images/logo.png";

const Header = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.inner}>
        <Link to="/" className={classes.logo}>
          <img src={logo} alt={"Brand logo"} className={classes.logoImage} />
          <div className={classes.logoText}>StormQuestions</div>
        </Link>
        <div className={classes.callToAction}>
          <a
            href="https://www.gofundme.com/stormquestions"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.button}
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fff",
    borderTop: {
      color: `${theme.colors.primary}`,
      width: 4,
      style: "solid",
    },
  },
  container: {
    padding: "0px 14px 0px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0px",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  callToAction: {
    display: "flex",
    alignItems: "center",
  },
  logIn: {
    color: theme.colors.gray600,
    marginRight: "20px",
    fontWeight: "600",
    fontSize: "14px",

    [theme.breakpoints[600]]: {
      marginRight: "26px",
    },
  },
  button: {
    color: theme.colors.primary,
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".5px",
    border: `3px solid ${theme.colors.primary}`,
    borderRadius: "32px",
    padding: "8px 16px",

    [theme.breakpoints[600]]: {
      padding: "10px 26px",
    },
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
    color: theme.colors.black,
    paddingTop: "4px",
    fontSize: "18px",
    paddingLeft: "6px",

    [theme.breakpoints[600]]: {
      fontSize: "21px",
    },
  },
});

export default withStyles(styles)(Header);

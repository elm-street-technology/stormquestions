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
      <div className={classes.copyright}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 64 64"
          fill="#fff"
          style={{ marginRight: "6px" }}
        >
          <path d="M31.941 0c8.952 0 16.573 3.125 22.858 9.372 3.008 3.009 5.295 6.447 6.855 10.314C63.217 23.553 64 27.657 64 32c0 4.381-.773 8.486-2.314 12.313-1.543 3.828-3.82 7.211-6.828 10.145-3.123 3.084-6.666 5.447-10.629 7.086C40.268 63.18 36.172 64 31.943 64c-4.229 0-8.276-.809-12.143-2.43-3.866-1.617-7.333-3.961-10.4-7.027S4 48.02 2.4 44.172 0 36.268 0 32c0-4.229.809-8.295 2.428-12.2C4.047 15.896 6.4 12.4 9.485 9.314 15.58 3.106 23.065 0 31.941 0zm.115 5.772c-7.313 0-13.466 2.553-18.457 7.656-2.515 2.553-4.448 5.42-5.8 8.6-1.354 3.182-2.029 6.506-2.029 9.973 0 3.429.675 6.733 2.029 9.913 1.353 3.184 3.285 6.021 5.8 8.516 2.514 2.496 5.351 4.4 8.515 5.715 3.161 1.314 6.476 1.973 9.942 1.973 3.428 0 6.75-.666 9.973-2 3.221-1.334 6.121-3.258 8.715-5.771 4.988-4.875 7.482-10.99 7.482-18.344 0-3.543-.646-6.896-1.941-10.058-1.293-3.161-3.182-5.979-5.654-8.457-5.147-5.144-11.336-7.716-18.575-7.716z" />
          <path d="M41.607 39.639l-.828-.516c-1.941 2.143-4.738 3.492-7.857 3.492-5.862 0-10.615-4.75-10.615-10.614 0-5.863 4.753-10.616 10.615-10.616 3.119 0 5.916 1.351 7.857 3.492l.828-.516 5.707-3.539c-3.34-4.29-8.535-7.061-14.393-7.061-10.07 0-18.237 8.167-18.237 18.239 0 10.073 8.167 18.237 18.237 18.237 5.857 0 11.055-2.77 14.393-7.061l-5.707-3.537z" />
        </svg>
        2018 All Rights Reserved
      </div>
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
    fontSize: "14px",
    letterSpacing: ".3px",
    color: theme.colors.gray100,
    paddingTop: "10px",
    display: "flex",
    aligItems: "center",
  },
});

export default withStyles(styles)(Header);

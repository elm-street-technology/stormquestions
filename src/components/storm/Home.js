import React from "react";
import withStyles from "elevate-ui/withStyles";
import Header from "./Header";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Resources from "./Resources";

const Home = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <div className={classes.heroBgContainer}>
          <div className={classes.heroContainer}>
            <Hero />
          </div>
        </div>
        <Introduction />
        <div className={classes.resourceBgContainer}>
          <Resources />
        </div>
      </div>
    </div>
  );
};

const styles = (theme) => ({
  "@global": {
    "html, body": {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
      backgroundColor: "#fff",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderTop: {
      color: `${theme.colors.primary}`,
      width: 6,
      style: "solid",
    },
  },
  container: {
    padding: "0px 14px 0px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
  },
  heroBgContainer: {
    backgroundColor: theme.colors.gray100,
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  heroContainer: {
    maxWidth: "1080px",
    margin: "auto",
    padding: "100px 0px",
  },
  heading: {
    fontFamily: "League Spartan",
    color: theme.colors.black,
  },
  resourceBgContainer: {
    backgroundColor: theme.colors.gray600,
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
});

export default withStyles(styles)(Home);

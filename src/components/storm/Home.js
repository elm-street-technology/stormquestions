import React from "react";
import withStyles from "elevate-ui/withStyles";
import Header from "./Header";

const Home = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      Hello, world
    </div>
  );
};

const styles = (theme) => ({
  "@global": {
    "html, body": {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.colors.tertiary,
    fontFamily: "League Spartan",
  },
});

export default withStyles(styles)(Home);

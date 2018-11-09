import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const PageTitle = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
    lineHeight: "1.2",
    fontSize: "28px",
    color: theme.colors.black,
    fontWeight: "800",
    marginTop: "80px",
    marginBottom: "30px",
    textAlign: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",

    [theme.breakpoints[600]]: {
      fontSize: "36px",
    },
  },
}))(PageTitle);

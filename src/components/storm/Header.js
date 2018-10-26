import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Header = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>Header</div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export default withStyles(styles)(Header);

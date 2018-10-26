import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const FaqCard = ({ classes, className, tagline, title, description }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.container}>
      <h1 className={classes.heading}>
        {tagline} <span className={classes.title}>{title}</span>?
      </h1>
      <p className={classes.description}>{description}</p>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 600px))",
    backgroundColor: "#fff",
    padding: "36px",
    boxShadow:
      "0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)",
    borderRadius: "8px",
    margin: "14px",
  },
  container: {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    flexDirection: "column",
  },
  heading: {
    fontSize: "20px",
    paddingBottom: "16px",
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "700",
  },
  description: {
    lineHeight: "1.5",
  },
});

export default withStyles(styles)(FaqCard);

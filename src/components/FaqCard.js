import React from "react";
import withStyles from "elevate-ui/withStyles";

const FaqCard = ({ classes, tagline, title, description }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h1
        className={classes.heading}
        dangerouslySetInnerHTML={{
          __html: title.childMarkdownRemark.html,
        }}
      />
      <div
        className={classes.description}
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 600px))",
    backgroundColor: "#fff",
    padding: "36px 36px 20px 36px",
    boxShadow:
      "0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)",
    borderRadius: "8px",
    margin: "14px",
    transition: "all 2s",
  },
  container: {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    flexDirection: "column",
  },
  heading: {
    color: theme.colors.black,
    fontSize: "20px",
    paddingBottom: "16px",

    "& strong": {
      fontWeight: "700",
      color: theme.colors.primary,
    },
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "700",
  },
  description: {
    lineHeight: "1.5",
    color: theme.colors.gray600,

    "& a": {
      wordWrap: "break-word",
      color: theme.colors.primary,
      textDecoration: "none",
      fontWeight: "700",

      "&:hover": {
        borderBottom: `2px solid ${theme.colors.gray600}`,
        transition: "250ms all",
      },
    },

    "& p": {
      paddingBottom: "16px",
    },

    "& strong": {
      fontWeight: "700",
      color: theme.colors.black,
    },
  },
});

export default withStyles(styles)(FaqCard);

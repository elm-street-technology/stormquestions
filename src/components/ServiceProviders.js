import React from "react";
import withStyles from "elevate-ui/withStyles";

const ServiceProviders = ({ classes, providers }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h1 className={classes.heading}>Recommended Service Providers</h1>
      {providers.map((provider, i) => {
        return (
          <div key={i}>
            <h2 className={classes.subHeading}>{provider.title}</h2>
            <div
              className={classes.paragraph}
              dangerouslySetInnerHTML={{
                __html: provider.information.childMarkdownRemark.html,
              }}
            />
          </div>
        );
      })}
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    backgroundColor: theme.colors.primary,
  },
  heading: {
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0, 0, 0, .15)",
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "40px",
    lineHeight: "1.4",
  },
  container: {
    maxWidth: "680px",
    margin: "auto",
    width: "100%",
    display: "flex",
    padding: "80px 12px 40px",
    flexDirection: "column",
  },
  subHeading: {
    color: "#fff",
    paddingBottom: "6px",
    fontSize: "20px",
    fontWeight: "700",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
  },
  paragraph: {
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.10)",
    color: "#DCF6F5",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "1.4",
    paddingBottom: "32px",

    "& a": {
      wordWrap: "break-word",
      textShadow: "0px 2px 4px rgba(0, 0, 0, 0.10)",
      color: theme.colors.secondary,
      textDecoration: "none",
      fontWeight: "700",

      "&:hover": {
        borderBottom: "2px solid #DCF6F5",
        transition: "250ms all",
      },
    },
  },
});

export default withStyles(styles)(ServiceProviders);

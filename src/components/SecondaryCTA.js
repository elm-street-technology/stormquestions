import React from "react";
import withStyles from "elevate-ui/withStyles";

const PrimaryCTA = ({ classes, text }) => (
  <div className={classes.root}>
    <div
      className={classes.text}
      dangerouslySetInnerHTML={{
        __html: text.childMarkdownRemark.html,
      }}
    />
    <a
      href="https://www.gofundme.com/storm-questions-urgent-needs&rcid=r01-153962467248-cb2db2db02294c3f&pc=ot_co_campmgmt_w"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.button}
    >
      Go to page
    </a>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "50px 0px",
    backgroundColor: theme.colors.gray100,
  },
  text: {
    "& h1": {
      color: theme.colors.black,
      fontSize: "26px",
      fontFamily: "League Spartan",
      paddingBottom: "4px",
      lineHeight: "1.4",
    },
    "& p": {
      color: theme.colors.gray600,
      fontSize: "21px",
      padding: "0px 14px 20px 14px",
      maxWidth: "520px",
      lineHeight: "1.4",
    },
  },
  button: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: ".5px",
    backgroundColor: theme.colors.primary,
    borderRadius: "32px",
    padding: "14px 40px",
  },
});

export default withStyles(styles)(PrimaryCTA);

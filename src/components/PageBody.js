import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import "prismjs/themes/prism.css";

const PageBody = ({ classes, className, body, color, linkColor }) => {
  return (
    <div
      className={classNames(classes.post, className)}
      dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
    />
  );
};

export default withStyles((theme) => ({
  post: {
    width: "100%",
    color: (props) => props.color || theme.colors.black,
    fontSize: "21px",
    fontWeight: "400",
    lineHeight: "1.6",
    margin: "0px auto 16px auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",

    "& h1": {
      color: theme.colors.black,
      fontWeight: "700",
      letterSpacing: ".2px",
      lineHeight: "1.2",
      fontSize: "24px",
      marginTop: "44px",
      marginBottom: "12px",
    },

    "& h2": {
      fontSize: "22px",
      lineHeight: "1.4",
      fontWeight: "700",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h3": {
      fontSize: "20px",
      fontWeight: "700",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h4": {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "24px",
      marginBottom: "12px",
    },

    "& a": {
      color: (props) => props.linkColor || theme.colors.primary,
      textDecoration: "underline",
    },

    "& em": {
      fontStyle: "italic",
    },

    "& strong": {
      fontWeight: "700",
    },

    "& ol": {
      position: "relative",
      counterReset: "item",
    },

    "& ol li": {
      counterIncrement: "item",
      paddingLeft: "24px",

      "&:before": {
        content: 'counter(item) "."',
        position: "absolute",
        left: "0",
        fontWeight: "700",
      },
    },

    "& ul": {
      listStyleType: "disc",
    },

    "& ul li": {
      marginLeft: "18px",
    },

    "& p": {
      marginTop: "4px",
      marginBottom: "28px",
    },

    "& img": {
      display: "block",
      maxWidth: "100%",
      marginBottom: "16px",
    },
  },
}))(PageBody);

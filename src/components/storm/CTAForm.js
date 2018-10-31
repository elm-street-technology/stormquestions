import React from "react";
import withStyles from "elevate-ui/withStyles";

const CTAForm = ({ classes }) => {
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <input
          className={classes.input}
          placeholder="Enter your email"
          type="text"
        />
        <button className={classes.button}>Subscribe</button>
      </form>
    </div>
  );
};

export default withStyles((theme) => ({
  form: {
    boxShadow:
      "0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)",
    overflow: "hidden",
    height: "48px",
    width: "360px",
    maxWidth: "400px",
    position: "relative",
    borderRadius: "8px",
  },

  input: {
    borderRadius: "4px",
    height: "48px",
    padding: "18px 0 18px 15px",
    outline: "none",
    border: "none",
    color: theme.colors.gray600,
    fontSize: "14px",
    fontWeight: "600",

    "&::-webkit-input-placeholder": {
      color: theme.colors.gray600,
      opacity: ".7",
    },
    "&::-moz-placeholder": {
      color: theme.colors.gray600,
      opacity: ".7",
    },
    "&:-ms-input-placeholder": {
      color: theme.colors.gray600,
      opacity: ".7",
    },
    "&::placeholder": {
      color: theme.colors.gray600,
      opacity: ".7",
    },
  },

  button: {
    position: "absolute",
    fontSize: "13px",
    fontWeight: "700",
    zIndex: "999",
    right: "0px",
    top: "0px",
    height: "48px",
    border: "none",
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: "0px 10px",
    margin: "0",
    width: "100px",
    textAlign: "center",
    cursor: "pointer",
  },
}))(CTAForm);

import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

class CTAButton extends Component {
  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      bottom: 0,
      behavior: "auto",
      // can be changed to behavior: "smooth" for smooth scroll effect
      // This probably needs to be updated to scroll to the actual ContactForm component
    });
  };

  render() {
    const { classes, className } = this.props;
    return (
      <div className={classNames(classes.root, className)}>
        <button onClick={this.scrollToBottom} className={classes.button}>
          Contact us
        </button>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  button: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "18px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: ".5px",
    backgroundColor: theme.colors.primary,
    borderRadius: "32px",
    padding: "16px 40px",
  },
}))(CTAButton);

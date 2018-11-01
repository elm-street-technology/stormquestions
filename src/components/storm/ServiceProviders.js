import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import serviceData from "../../data/serviceData";

class Resources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableResources: 6,
    };
  }

  handleLoadResources = () => {
    const remainingResources =
      serviceData.length - this.state.availableResources;
    this.setState((state) => ({
      availableResources: state.availableResources + remainingResources,
    }));
  };

  render() {
    const { classes } = this.props;
    const { availableResources } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.heading}>Recommended Service Providers</h1>
          {serviceData.slice(0, availableResources).map((service, i) => {
            return (
              <div key={i}>
                <h2 className={classes.subHeading}>{service.title}</h2>
                <div
                  className={classes.paragraph}
                  dangerouslySetInnerHTML={{
                    __html: service.description,
                  }}
                />
              </div>
            );
          })}
          <div className={classes.btnContainer}>
            {serviceData.length > availableResources ? (
              <button
                className={classes.btn}
                onClick={this.handleLoadResources}
              >
                Load more
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

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
  bold: {
    color: "#DCF6F5",
    fontWeight: "700",
  },
  underline: {
    borderBottom: `2px solid ${theme.colors.primary}`,
  },
  closing: {
    textShadow: "0px 2px 4px rgba(0, 0, 0, .15)",
    lineHeight: "1.4",
    color: "#DCF6F5",
    fontWeight: "700",
    fontSize: "21px",
  },
  link: {
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.10)",
    color: theme.colors.secondary,
    textDecoration: "none",
    fontWeight: "700",

    "&:hover": {
      borderBottom: "2px solid #DCF6F5",
      transition: "250ms all",
    },
  },
});

export default withStyles(styles)(Resources);

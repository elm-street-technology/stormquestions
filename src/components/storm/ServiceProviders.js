import React from "react";
import withStyles from "elevate-ui/withStyles";
import serviceData from "../../data/serviceData";

const Resources = ({ classes, className }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <h1 className={classes.heading}>Recommended Service Providers</h1>
      {serviceData.map((service, i) => {
        return (
          <div>
            <h2 key={i} className={classes.subHeading}>
              {service.title}
            </h2>
            <p key={i} className={classes.paragraph}>
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);

const styles = (theme) => ({
  heading: {
    color: "#fff",
    textShadow: "0px 2px 4px rgba(0, 0, 0, .15)",
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "28px",
  },
  subHeading: {
    color: "#fff",
    paddingBottom: "12px",
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
    paddingBottom: "28px",
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

import React from "react";
import withStyles from "elevate-ui/withStyles";
import CTAButton from "./CTAButton";

const Introduction = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.inner}>
        <h1 className={classes.heading}>Why We're here</h1>
        <p className={classes.paragraph}>
          We are all impacted by natural disasters, whether directly or
          indirectly. <span className={classes.bold}>Storm Questions</span>{" "}
          wants to provide a resource for you to ask questions and get answers.
          We also provide a list of resources to help you get through a storm’s
          aftermath.
        </p>
        <p className={classes.paragraph}>
          We are aggregating{" "}
          <span className={classes.bold}>industry experts</span> including
          attorneys, public insurance adjusters, contractors, roofers,
          legislators, members from offices of emergency management, FEMA
          directors, etc.
        </p>
        <p className={classes.paragraph}>
          The purpose of this site is to provide everyone that experienced storm
          damage or related business issues with a forum where you may ask
          questions and get the{" "}
          <span style={{ fontStyle: "italic" }}>most accurate</span>, up-to-date{" "}
          answers from the people that know best.
        </p>
        <p className={classes.paragraph}>
          Please <span className={classes.underline}>check back often</span> as
          we will also be adding information for where you can obtain loans and
          financial resources as you make repairs and recover from the storm.
        </p>
        <p className={classes.paragraph}>
          In addition to resources and information for homeowners, business
          owners will also have information to assist in learning more about
          business interruption, loss of use, etc., and other issues that impact
          your revenue and your business.
        </p>
        <h3 className={classes.closing}>
          <CTAButton />
        </h3>
      </div>
    </div>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    maxWidth: "680px",
    padding: "60px 12px",

    [theme.breakpoints[600]]: {
      padding: "80px 12px",
    },
  },
  heading: {
    color: theme.colors.black,
    fontFamily: "League Spartan",
    fontSize: "26px",
    paddingBottom: "18px",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
  },
  paragraph: {
    color: theme.colors.gray600,
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "1.4",
    paddingBottom: "28px",
  },
  bold: {
    fontWeight: "700",
  },
  underline: {
    borderBottom: `2px solid ${theme.colors.primary}`,
  },
  closing: {
    color: theme.colors.black,
    fontWeight: "700",
    // fontSize: "21px",
    lineHeight: "1.3",
  },
  link: {
    color: theme.colors.primary,
    textDecoration: "none",
    fontWeight: "700",

    "&:hover": {
      borderBottom: `2px solid ${theme.colors.gray600}`,
      transition: "250ms all",
    },
  },
});

export default withStyles(styles)(Introduction);

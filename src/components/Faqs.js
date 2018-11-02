import React, { Component } from "react";
import FaqsHeading from "./FaqsHeading";
import FaqCard from "./FaqCard";
import faqData from "../data/faqData";
import withStyles from "elevate-ui/withStyles";

class Faqs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableFaqs: 4,
    };
  }

  handleLoadFaqs = () => {
    this.setState((state) => ({
      availableFaqs: state.availableFaqs + 3,
    }));
  };

  render() {
    const { classes } = this.props;
    const { availableFaqs } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.faqContainer}>
          <FaqsHeading />
          {faqData.slice(0, availableFaqs).map((faq, i) => (
            <FaqCard
              key={i}
              tagline={faq.tagline}
              title={faq.title}
              description={faq.description}
            />
          ))}
          <div className={classes.btnContainer}>
            {faqData.length > availableFaqs ? (
              <button
                className={classes.loadMoreBtn}
                onClick={this.handleLoadFaqs}
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

export default withStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.gray100,
  },
  faqContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 0px",
    maxWidth: "680px",

    [theme.breakpoints[600]]: {
      padding: "60px 0px",
    },
  },
  btnContainer: {
    padding: "20px 14px",
    maxWidth: "680px",
    width: "100%",
  },
  loadMoreBtn: {
    width: "100%",
    color: "#fff",
    fontSize: "15px",
    padding: "12px 0px",
    letterSpacing: ".3px",
    fontWeight: "600",
    borderRadius: "6px",
    backgroundColor: theme.colors.gray600,
    opacity: ".85",
    transition: ".3s all ease",

    "&:hover": {
      opacity: "1",
    },
  },
}))(Faqs);

import React, { Component } from "react";
import FaqsHeading from "./FaqsHeading";
import FaqCard from "./FaqCard";
import faqData from "../../data/faqData";
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
            <button className={classes.btn} onClick={this.handleLoadFaqs}>
              Load more
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {},
  faqContainer: {
    backgroundColor: theme.colors.gray100,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 0px",
  },
}))(Faqs);

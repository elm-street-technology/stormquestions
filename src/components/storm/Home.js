import React from "react";
import withStyles from "elevate-ui/withStyles";
import Header from "./Header";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Resources from "./Resources";
import FaqsHeading from "./FaqsHeading";
import FaqCard from "./FaqCard";
import faqData from "../../data/faqData";
import PrimaryCTA from "./PrimaryCTA";
import BlogCard from "./BlogCard";
import BlogCardGrid from "./BlogCardGrid";
import ServiceProviders from "./ServiceProviders";
import postData from "../../data/postData";

const Home = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <div className={classes.heroBgContainer}>
          <div className={classes.heroContainer}>
            <Hero />
          </div>
        </div>
        <Introduction />
        <div className={classes.resourceBgContainer}>
          <Resources />
        </div>
        <div className={classes.faqBgContainer}>
          <div className={classes.faqContainer}>
            <FaqsHeading />
            {faqData.map((faq, i) => {
              return (
                <FaqCard
                  key={i}
                  tagline={faq.tagline}
                  title={faq.title}
                  description={faq.description}
                />
              );
            })}
          </div>
        </div>
        <PrimaryCTA />
        <div className={classes.serviceBgContainer}>
          <div className={classes.serviceContainer}>
            <ServiceProviders />
          </div>
        </div>
        <h1 className={classes.blogHeading}>Blog</h1>
        <BlogCardGrid>
          {postData.map((post) => (
            <BlogCard
              key={post.title}
              image={post.image}
              title={post.title}
              date={post.publishDate}
              excerpt={post.excerpt}
            />
          ))}
        </BlogCardGrid>
      </div>
    </div>
  );
};

const styles = (theme) => ({
  "@global": {
    "html, body": {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
      backgroundColor: "#fff",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderTop: {
      color: `${theme.colors.primary}`,
      width: 6,
      style: "solid",
    },
  },
  container: {
    padding: "0px 14px 0px",
    maxWidth: "1080px",
    width: "100%",
    margin: "auto",
  },
  heroBgContainer: {
    backgroundColor: theme.colors.gray100,
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  heroContainer: {
    maxWidth: "1080px",
    margin: "auto",
    padding: "100px 0px",
  },
  heading: {
    fontFamily: "League Spartan",
    color: theme.colors.black,
  },
  resourceBgContainer: {
    backgroundColor: theme.colors.gray600,
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  faqBgContainer: {
    backgroundColor: theme.colors.gray100,
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  faqContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 0px",
  },
  serviceBgContainer: {
    backgroundColor: theme.colors.primary,
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  serviceContainer: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    padding: "80px 12px 40px",
    flexDirection: "column",
  },
  blogHeading: {
    paddingTop: "80px",
    paddingBottom: "10px",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "League Spartan",
  },
});

export default withStyles(styles)(Home);

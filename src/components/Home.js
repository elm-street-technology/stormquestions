import React from "react";
import withStyles from "elevate-ui/withStyles";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Resources from "./Resources";
import Faqs from "./Faqs";
import PrimaryCTA from "./PrimaryCTA";
import SecondaryCTA from "./SecondaryCTA";
import BlogHeading from "./BlogHeading";
import BlogCard from "./BlogCard";
import BlogCardGrid from "./BlogCardGrid";
import ContactForm from "./ContactForm";
import ServiceProviders from "./ServiceProviders";

const Home = ({ classes, posts }) => (
  <div className={classes.root}>
    <Hero />
    <Introduction />
    <Resources />
    <Faqs />
    <PrimaryCTA />
    <ServiceProviders />
    <BlogHeading />
    <BlogCardGrid>
      {posts &&
        posts.map(({ node: post }) => (
          <BlogCard
            key={post.id}
            slug={post.slug}
            image={post.heroImage}
            title={post.title}
            date={post.publishDate}
            excerpt={post.body}
            tags={post.tags}
          />
        ))}
    </BlogCardGrid>
    <SecondaryCTA />
    <ContactForm />
  </div>
);

const styles = (theme) => ({
  "@global": {
    "html, body": {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
      backgroundColor: "#fff",
    },
    a: {
      textDecoration: "none !important",
      "&:hover": {
        textDecoration: "none !important",
      },
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
});

export default withStyles(styles)(Home);

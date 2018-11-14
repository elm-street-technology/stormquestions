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

const Home = ({ classes, data }) => {
  const homepage = data.contentfulHome;
  const posts = data.allContentfulPost.edges;
  return (
    <div className={classes.root}>
      <Hero />
      <Introduction title={homepage.introHeadline} body={homepage.introText} />
      <Resources
        title={homepage.resourceHeadline}
        body={homepage.resourceText}
      />
      <Faqs faqs={homepage.faq} />
      <PrimaryCTA />
      <ServiceProviders providers={homepage.providers} />
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
};

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
  },
});

export default withStyles(styles)(Home);

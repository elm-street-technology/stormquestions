import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

import BlogCardGrid from "../components/BlogCardGrid";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

class Blog extends Component {
  render() {
    const { classes, tags, data } = this.props;
    const posts = data.allContentfulPost.edges;
    return (
      <Layout>
        <div className={classes.root}>
          <SEO />
          <Container>
            <PageTitle className={classes.title}>Blog</PageTitle>
            <BlogCardGrid>
              {posts.map(({ node: post }) => (
                <BlogCard
                  tags={tags}
                  key={post.id}
                  slug={post.slug}
                  image={post.heroImage}
                  title={post.title}
                  date={post.publishDate}
                  excerpt={post.body}
                />
              ))}
            </BlogCardGrid>
          </Container>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query blogQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 140)
            }
          }
          tags {
            title
            id
            slug
          }
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    margin: "72px auto 96px auto",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
  },
  btn: {
    color: theme.colors.primary,
    fontWeight: "600",
    padding: "16px 80px",
    border: "2px solid #EF5A57",
    borderRadius: "8px",
  },
}))(Blog);

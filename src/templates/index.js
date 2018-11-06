import { graphql } from "gatsby";
import React, { Component } from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";

class Storm extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allContentfulPost.edges;
    return (
      <Layout>
        <Home posts={posts} />
      </Layout>
    );
  }
}

export const query = graphql`
  query indexQuery {
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

export default Storm;

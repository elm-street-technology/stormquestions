import { graphql } from "gatsby";
import React, { Component } from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";

class Storm extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Home data={data} />
      </Layout>
    );
  }
}

export const query = graphql`
  query indexQuery {
    contentfulHome(contentfulid: { eq: "homepage" }) {
      heroTop {
        childMarkdownRemark {
          html
        }
      }
      heroBottom {
        childMarkdownRemark {
          html
        }
      }
      primaryCta {
        childMarkdownRemark {
          html
        }
      }
      secondaryCta {
        childMarkdownRemark {
          html
        }
      }
      introHeadline
      introText {
        childMarkdownRemark {
          html
        }
      }
      resourceHeadline
      resourceText {
        childMarkdownRemark {
          html
        }
      }
      providers {
        title
        information {
          childMarkdownRemark {
            html
          }
        }
      }
      faq {
        id
        title {
          childMarkdownRemark {
            html
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
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

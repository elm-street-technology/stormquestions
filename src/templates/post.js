import { graphql } from "gatsby";
import React from "react";
import find from "lodash/find";
import Helmet from "react-helmet";

import config from "../utils/siteConfig";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import PageBody from "../components/PageBody";
import TagList from "../components/TagList";
import PostPagination from "../components/PostPagination";
import SEO from "../components/SEO";
import withStyles from "elevate-ui/withStyles";
import PostSocialLinks from "../components/PostSocialLinks";

const PostTemplate = ({
  children,
  classes,
  data: { allContentfulPost, contentfulPost },
}) => {
  const { title, slug, id, body, tags } = contentfulPost;
  const postNode = contentfulPost;

  const postIndex = find(
    allContentfulPost.edges,
    ({ node: post }) => post.id === id
  );

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Container className={classes.container}>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
        {tags && <TagList tags={tags} />}
        <PostSocialLinks post={contentfulPost} />
        <PostPagination previous={postIndex.previous} next={postIndex.next} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        file {
          url
        }
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`;

export default withStyles(() => ({
  container: {
    maxWidth: "700px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    minHeight: "100%",
    marginBottom: "90px",
    marginTop: "40px",
  },
}))(PostTemplate);

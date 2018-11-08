import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import TagList from "../components/TagList";
import Img from "gatsby-image";

const BlogCard = ({ classes, image, title, date, excerpt, slug, tags }) => (
  <div className={classes.root}>
    <Link to={`/${slug}/`}>
      {image ? (
        <Img
          className={classes.postImage}
          sizes={image.sizes}
          backgroundColor={"#eeeeee"}
        />
      ) : null}

      <div className={classes.postTitle}>{title}</div>
      <div className={classes.postDate}>{date}</div>
      <div
        className={classes.postDesc}
        dangerouslySetInnerHTML={{
          __html: excerpt.childMarkdownRemark.excerpt,
        }}
      />
      {tags && <TagList tags={tags} />}
    </Link>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    transition: "all 200ms ease-in-out",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    textDecoration: "none !important",
    "&:hover": {
      textDecoration: "none !important",
    },

    "& a": {
      textDecoration: "none !important",
    },
  },
  postImage: {
    marginBottom: "5px",
    width: "100%",
    height: "220px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  postDate: {
    marginBottom: "6px",
    fontSize: "12px",
    color: "#504E62",
  },
  postTitle: {
    fontSize: "20px",
    fontWeight: "800",
    lineHeight: "28px",
    color: theme.colors.black,
    marginBottom: "4px",
  },
  postDesc: {
    display: "flex",
    lineHeight: "21px",
    marginBottom: "8px",
    fontSize: ".875rem",
    color: "#504E62",
  },
  postReadMore: {
    textTransform: "uppercase",
    color: theme.colors.gray600,
    fontWeight: "600",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    paddingTop: "12px",
  },
  icon: {
    fill: theme.colors.gray600,
    marginLeft: "4px",
  },
}))(BlogCard);

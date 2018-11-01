import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import BlogCard from "./BlogCard";
import postData from "../../data/postData";

const BlogCardGrid = ({ children, classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      {postData.map((post) => (
        <BlogCard
          key={post.title}
          image={post.image}
          title={post.title}
          date={post.publishDate}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
};

export default withStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#fff !important",
    },
    a: {
      textDecoration: "none !important",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
  },
  root: {
    display: "grid",
    gridColumnGap: "36px",
    gridRowGap: "60px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 320px))",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1080px",
    margin: "30px auto 96px auto",
  },
}))(BlogCardGrid);

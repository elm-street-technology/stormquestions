import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";

const BlogCard = ({ classes, image, title, date, excerpt }) => (
  <div className={classes.root}>
    <Link to={"/"}>
      {image ? <img src={image} className={classes.postImage} /> : null}

      <div className={classes.postDate}>{date}</div>
      <div className={classes.postTitle}>{title}</div>
      <div
        className={classes.postDesc}
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <div className={classes.postReadMore}>
        Read more{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={classes.icon}
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
    </Link>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "#fff", // material-design 1dp
    transition: "all 200ms ease-in-out",
    borderRadius: "3px",
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

    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
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

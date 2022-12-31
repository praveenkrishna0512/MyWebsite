import classes from "./blogListPage.module.css";
import BlogListView from "../../components/blog/blogListView";
import { useState, useEffect } from "react";

function BlogListPage() {

  return (
    <div className={classes.wrapper}>
      <h1>My Blog</h1>
      <BlogListView/>
    </div>
  );
}

export default BlogListPage;

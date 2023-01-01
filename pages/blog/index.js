import classes from "./blogListPage.module.css";
import BlogListView from "../../components/blog/blogListView";
import { useState, useEffect } from "react";
import clientPromise from "../../lib/mongodb";

function BlogListPage({ fallback, data }) {

  return (
    <div className={classes.wrapper}>
      <h1>My Blog</h1>
      <BlogListView blogs={data}/>
    </div>
  );
}

export async function getServerSideProps({ params }) {

  const client = await clientPromise;
  const db = client.db("personal-website");

  const data = await db
    .collection("blogs")
    .find({})
    .toArray();

  let blogs;
  if (data.length != 0) {
    blogs = JSON.parse(JSON.stringify(data));
  } else {
    blogs = {};
  }

  return {
    props: {
      fallback: {
        "/api/blogs": blogs,
      },
      data: blogs,
    },
  };
}

export default BlogListPage;

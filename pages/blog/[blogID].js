import React from "react";
import { SWRConfig } from "swr";
import classes from "./blog.module.css";
import clientPromise from "../../lib/mongodb";

export default function BlogPage({ fallback, data }) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogContent {...data} />
    </SWRConfig>
  );
}

function BlogContent({ id, title, author, datePosted, content }) {
  if (!content) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainContent}>
          <h1>This blog page does not exist</h1>
          <h5>Please check the URL</h5>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContent}>
        <h1>{title}</h1>
        <h5>Written by: {author}</h5>
        <h5>{datePosted}</h5>
        <div className={classes.body}>
          {content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {

  const client = await clientPromise;
  const db = client.db("personal-website");

  const data = await db
    .collection("blogs")
    .find({ id: params.blogID })
    .toArray();

  let blog;
  if (data.length != 0) {
    blog = JSON.parse(JSON.stringify(data))[0];
  } else {
    blog = {};
  }

  return {
    props: {
      fallback: {
        "/api/blogs": blog,
      },
      data: blog,
    },
  };
}

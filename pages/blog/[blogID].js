import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import fetcher from "../../lib/fetcher";
import { SWRConfig } from "swr";
import getBlog from "../../lib/helper";
import classes from "./blog.module.css";

export default function BlogPage({ fallback }) {
  const router = useRouter();
  const { blogID } = router.query;
  const { data, isLoading, isError } = fetcher(`api/blogs/${blogID}`);

  // if (isLoading) return
  // if (isError) return

  return (
    <SWRConfig value={{ fallback }}>
      <BlogContent {...data} />
    </SWRConfig>
  );
}

function BlogContent({ id, title, author, datePosted, content }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContent}>
        <h1>{title}</h1>
        <h5>Written by: {author}</h5>
        <h5>{datePosted}</h5>
        <p className={classes.body}>{`${content}`}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const blog = await getBlog(params.blogID);

  return {
    props: {
      fallback: {
        "/api/blogs": blog,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getBlog();

  const paths = blogs.map((value) => {
    return {
      params: {
        blogID: value.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

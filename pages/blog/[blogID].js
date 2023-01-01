import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import fetcher from "../../lib/fetcher";
import { SWRConfig } from "swr";
import getBlog from "../../lib/helper";
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
    )
  }
  
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

// export async function getStaticProps({ params }) {
//   // const req = {
//   //   method: "GET",
//   //   query: params.blogID,
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   // };
//   const blog = await getBlog(params.blogID);
//   // const { data } = await handler(req, {})


//   return {
//     props: {
//       fallback: {
//         "/api/blogs": blog,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   // const req = {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   // };
//   const blogs = await getBlog();
//   // const { data } = await handler(req, {})

//   const paths = blogs.map((value) => {
//     return {
//       params: {
//         blogID: value.id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  // const req = {
  //   method: "GET",
  //   query: params.blogID,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // const blog = await getBlog(params.blogID);
  // const { data } = await handler(req, {})

  const client = await clientPromise;
  const db = client.db("personal-website");

  const data = await db.collection("blogs").find({id: params.blogID}).limit(20).toArray();

  let blog
  if (data.length != 0) {
    blog = JSON.parse(JSON.stringify(data))[0]
  } else {
    blog = {}
  }

  return {
    props: {
      fallback: {
        "/api/blogs": blog,
      },
      data: blog
    },
  };
}
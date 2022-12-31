import classes from "./blogListPage.module.css";
import BlogListView from "../../components/blog/blogListView";
import { useState, useEffect } from "react";

function BlogListPage() {
  const file_name = "first_blog.md";
  const [post, setPost] = useState("");

  // useEffect(() => {
  //   import(`../../components/blog/content/${file_name}`)
  //     .then((res) => {
  //       fetch(res.default)
  //         .then((res) => res.text())
  //         .then((res) => setPost(res))
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // });

  // console.log(post)

  var blogs = [
    {
      id: 1,
      post: post
    },
  ];

  return (
    <div className={classes.wrapper}>
      <h1>My Blog</h1>
      <BlogListView blogs={blogs} />
    </div>
  );
}

export default BlogListPage;

import classes from "./blogListView.module.css";
import Image from "next/image";
import BlogListItem from "./blogListItem";
import { useEffect, useState } from "react";
import getBlog from "../../lib/helper";
import Link from "next/link";

function BlogListView() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // const req = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // const blogsPromise = handler(req, {})
    // blogsPromise.then((res) => setBlogs(res.data));
    const blogsPromise = getBlog();
    blogsPromise.then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div className={classes.listview}>
      <div className={classes.rectangle}>
        {blogs.map((blog) => (
          <>
            <Link key={`${blog.id}`} className={classes.link} href={`/blog/${blog.id}`}>
              <BlogListItem blog={blog} />
            </Link>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default BlogListView;

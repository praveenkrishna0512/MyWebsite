import classes from "./blogListView.module.css";
import Image from "next/image";
import BlogListItem from "./blogListItem";
import Link from "next/link";

function BlogListView({ blogs }) {
  if (blogs.length == 0) {
    return <div className={classes.listview}>Loading...</div>;
  }

  return (
    <div className={classes.listview}>
      <div className={classes.rectangle}>
        {blogs.map((blog) => (
          <div key={`${blog.id}`} className={classes.link}>
            <Link className={classes.link} href={`/blog/${blog.id}`}>
              <BlogListItem blog={blog} />
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogListView;

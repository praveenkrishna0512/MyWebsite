import classes from "./blogListView.module.css";
import Image from "next/image";
import BlogListItem from "./blogListItem";

function BlogListView({ blogs }) {
  return (
    <div className={classes.listview}>
      <div className={classes.rectangle}>
        {blogs.map((blog) => (
          <div key={`${blog.id}`}>
            <BlogListItem blog={blog}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogListView;

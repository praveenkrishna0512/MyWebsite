import classes from "./blogListItem.module.css";
import Image from "next/image";
// import Tag from "./tag";
import Markdown from "markdown-to-jsx";

function BlogListItem({ blog }) {
  return (
    <div className={classes.rectangle}>
      <div className={classes.text}>
        <h4>{blog.title}</h4>
        <h5>{blog.datePosted}</h5>
        <div className={classes.preview}>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogListItem;

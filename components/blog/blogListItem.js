import classes from "./blogListItem.module.css";

function BlogListItem({ blog }) {
  return (
    <div className={classes.rectangle}>
      <div className={classes.text}>
        <h4>{blog.title}</h4>
        <h5>{blog.datePosted}</h5>
        <div className={classes.preview}>
          {blog.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogListItem;

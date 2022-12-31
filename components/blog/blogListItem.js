import classes from "./blogListItem.module.css";
import Image from "next/image";
// import Tag from "./tag";
import Markdown from "markdown-to-jsx";

function BlogListItem({ blog }) {
  return (
    <div className={classes.rectangle}>
      <div className={classes.text}>
        <h5>{blog.title}</h5>
        {/* <div className={classes.tags}>
          {blog.tags.map((tag) => (
            <Tag key={tag} tag={tag}></Tag>
          ))}
        </div> */}
        {/* <Markdown>
          {blog.post}
        </Markdown> */}
        {blog.type ? (
          <i style={{ margin: "7px 0px 0px 0px" }}>{blog.type}</i>
        ) : (
          <></>
        )}
        {blog.company ? (
          <i style={{ margin: "3px 0px 0px 0px" }}>{blog.company}</i>
        ) : (
          <></>
        )}
        {blog.startDate ? (
          <i style={{ margin: "3px 0px 0px 0px" }}>
            {blog.startDate} {blog.endDate ? ` - ${blog.endDate}` : <></>}
          </i>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BlogListItem;

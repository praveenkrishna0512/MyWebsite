import classes from "./tag.module.css";

function Tag({ tag }) {
  return (
    <div className={classes.tag}>
      {tag}
    </div>
  );
}

export default Tag;

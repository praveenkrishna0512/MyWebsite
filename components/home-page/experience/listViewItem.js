import classes from "./listViewItem.module.css";
import Image from "next/image";
import Tag from "./tag";

function ListViewItem({ experience, itemWidth, dummy }) {
  if (dummy) {
    return (
      <div className={classes.rectangle} style={{ width: `${itemWidth}` }}>
        <div className={classes.dummyText}>
          <h5>More coming soon!</h5>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.rectangle} style={{ width: `${itemWidth}` }}>
      <div className={classes.text}>
        <h5>{experience.title}</h5>
        <div className={classes.tags}>
          {experience.tags.map((tag) => (
            <Tag key={tag} tag={tag}></Tag>
          ))}
        </div>
        {experience.type ? (
          <i style={{ margin: "7px 0px 0px 0px" }}>{experience.type}</i>
        ) : (
          <></>
        )}
        {experience.company ? (
          <i style={{ margin: "3px 0px 0px 0px" }}>{experience.company}</i>
        ) : (
          <></>
        )}
        {experience.startDate ? (
          <i style={{ margin: "3px 0px 0px 0px" }}>
            {experience.startDate}{" "}
            {experience.endDate ? ` - ${experience.endDate}` : <></>}
          </i>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ListViewItem;

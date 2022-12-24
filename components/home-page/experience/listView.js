import classes from "./listView.module.css";
import Image from "next/image";
import ListViewItem from "./listViewItem";

function ListView({ experiences, rectangleHeight, itemWidth }) {
  return (
    <div className={classes.listview}>
      <div className={classes.rectangle} style={{"height": `${rectangleHeight}`}}>
        {experiences.map((experience) => (
          <div key={`${experience.title}${experience.company}`}>
            <ListViewItem experience={experience} itemWidth={itemWidth} dummy={false}/>
          </div>
        ))}
        {/* <ListViewItem experience={null} itemWidth={null} dummy={true}/> */}
      </div>
    </div>
  );
}

export default ListView;

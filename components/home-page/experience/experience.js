import classes from "./experience.module.css";
import ListView from "./listView";

var experiences = require("./experienceDetails.json")

function Experience() {
  return (
    <section className={classes.experience}>
      <div className={classes.header}>
        <h2>My Experiences</h2>
      </div>
      <div className={classes.content}>
        <div className={classes.indivContent}>
          <h4>Industry Experience</h4>
          <ListView experiences={experiences["industry"]} rectangleHeight="200px" itemWidth="250px"/>
        </div>
        <div className={classes.indivContent}>
          <h4>{`Leadership and Social work`}</h4>
          <ListView experiences={experiences["others"]} rectangleHeight="185px" itemWidth="250px"/>
        </div>
        <div className={classes.indivContent}>
          <h4>Personal Projects</h4>
          <ListView experiences={experiences["personal"]} rectangleHeight="130px" itemWidth="200px"/>
        </div>
      </div>
      {/* <hr></hr> */}
    </section>
  );
}

export default Experience;

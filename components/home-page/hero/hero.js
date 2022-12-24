import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.header}>
        <h2>Social Good</h2>
        <h2>Technology</h2>
      </div>
      <div className={classes.lineLeft}></div>
      <div className={classes.lineRight}></div>
      <div className={classes.exploringIntersections}>
        <h3>Exploring the intersections</h3>
      </div>
      <hr />
    </section>
  );
}

export default Hero;

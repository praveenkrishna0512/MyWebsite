import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classes from "./about.module.css";
import Hobby from "./hobby";

function About() {
  return (
    <section className={classes.about}>
      <div className={classes.header}>
        <h2>About</h2>
      </div>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <p>
            <em>Live meaningfully, without regrets.</em>
          </p>
          <p>
            Easier said than done, but it is a motto that I see value in
            striving towards.
          </p>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faSnowflake} inverse />
            <FontAwesomeIcon icon={faSnowflake} inverse />
            <FontAwesomeIcon icon={faSnowflake} inverse />
          </div>
          <p>
            {`Hi! I'm Praveen, a sophomore studying Computer Science at NUS :)`}
          </p>
          <p>
            I find meaning improving the lives of others through the development
            of technology. Specifically, I hope to contribute towards tech
            solutions for problems surrounding{" "}
            <b>healthcare, food security and public transportation</b>.
          </p>
        </div>
        <div className={classes.contentRight}>
          <h4>My hobbies!</h4>
          <div className={classes.hobbies}>
            <Hobby
              title="Gym"
              description="Feels good to lift heavy ass weight! (especially squats) 🤩"
              src="/images/site/hobbies-gym-two.jpg"
            />
            <Hobby
              title="Dance"
              description="Who doesn't want to 🕺🏻vibe🕺🏻 to some good music?"
              src="/images/site/hobbies-dance.jpg"
            />
            <Hobby
              title="Tech"
              description="Living for the ✨dopamine rush✨ when the code runs"
              src="/images/site/placeholder.jpeg"
            />
            <Hobby
              title="Volunteering"
              description="Doing what I can do make this place slightly better 🙆🙆"
              src="/images/site/hobbies-volunteering-one.jpg"
            />
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
}

export default About;

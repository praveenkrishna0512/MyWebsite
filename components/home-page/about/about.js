import { faSnowflake, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classes from "./about.module.css";
import Hobby from "./hobby";

function About() {
  return (
    <section className={classes.about}>
      {/* <div className={classes.header}>
        <h2>About</h2>
      </div> */}
      <div className={classes.content}>
        <div className={classes.allTextBox}>
          <div className={classes.landingTextBox}>
            <h2>
              <em>Live meaningfully, without regrets.</em>
            </h2>
            <p>
              Easier said than done, but it is a motto that I see value in
              striving towards.
            </p>
          </div>
          <div className={classes.icons}>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faSnowflake}
              inverse
            />
            <FontAwesomeIcon
              className={classes.icon}
              icon={faSnowflake}
              inverse
            />
            <FontAwesomeIcon
              className={classes.icon}
              icon={faSnowflake}
              inverse
            />
          </div>
          <div className={classes.paragraphTextBox}>
            <p>
              {`Hi! I'm Praveen, a sophomore studying Computer Science at NUS :)`}
            </p>
            <p>
              I find meaning improving the lives of others through the
              development of technology.
            </p>
            <p>
              Specifically, I hope to contribute towards ML-powered solutions
              for <b>healthcare</b>.
            </p>
          </div>
        </div>
        <div className={classes.icons}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faSnowflake}
            inverse
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={faSnowflake}
            inverse
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={faSnowflake}
            inverse
          />
        </div>
        <div className={classes.hobbiesBox}>
          <h2>My hobbies!</h2>
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
        <div className={classes.icons}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faSnowflake}
            inverse
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={faSnowflake}
            inverse
          />
          <FontAwesomeIcon
            className={classes.icon}
            icon={faSnowflake}
            inverse
          />
        </div>
      </div>
    </section>
  );
}

export default About;

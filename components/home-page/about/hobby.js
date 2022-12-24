import classes from "./hobby.module.css";
import Image from "next/image";

function Hobby({ title, description, src }) {
  return (
    <div className={classes.hobby}>
      <div className={classes.image}>
        <Image
          src={src}
          alt="My Hobby"
          width={100}
          height={100}
        />
      </div>
      <div className={classes.rectangle}></div>
      <div className={classes.text}>
        <h5>{title}</h5>
        <i>{description}</i>
      </div>
    </div>
  );
}

export default Hobby;

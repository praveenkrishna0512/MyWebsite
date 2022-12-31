import classes from "./logo.module.css";
import Image from "next/image";

function Logo() {
  return (
    <div className={classes.logo}>
      <div className={classes.image}>
        <Image
          src="/images/site/praveen.jpg"
          alt="Me vibing below my block"
          width={100}
          height={100}
          priority={true}
        />
      </div> 
      {`Praveen\nK`}
    </div>
  );
}

export default Logo;

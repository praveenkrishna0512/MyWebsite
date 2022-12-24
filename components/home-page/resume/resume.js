import classes from "./resume.module.css";

function Resume() {
  return (
    <section className={classes.resume}>
      <div className={classes.header}>
        <h3>Resume</h3>
      </div>
      <div className={classes.content}>
        <iframe src="\resume.pdf" />
      </div>
      <hr></hr>
    </section>
  );
}

export default Resume;

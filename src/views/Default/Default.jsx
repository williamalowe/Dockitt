import { NavLink } from "react-router-dom";
import styles from "./Default.module.css";

const Default = () => {
  return (
    <section className={styles.main}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <h5>Welcome to</h5>
          <h3>Dockitt</h3>
        </div>
        <p>
          A productivity & project management service application by{" "}
          <span className={styles.highlight}>William Lowe</span>.
        </p>
      </div>
      <div className={styles.right}>
        <p>
          Dockitt is an application developed by William Lowe, as a showcase of
          React fundamentals. It is an extended to-do list application,
          supporting multi-stage tasks, responsive design, and a simple task
          overview dashboard. <br></br>
          The application was built without the use of external UI libraries,
          from scatch using React, Vite, CSS Modules, and local storage.
        </p>
        <div className={styles.button}>
          <NavLink to="/tasks">Get Started</NavLink>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/williamalowe/Dockitt">
            <img src="./github.svg" alt="github link icon" />
          </a>
          <a href="https://github.com/williamalowe/Dockitt">
            <img src="./linkedin.svg" alt="linkedin link icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Default;

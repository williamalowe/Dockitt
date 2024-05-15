import { NavLink } from "react-router-dom";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <main className={styles.error}>
      <LogoHeader />
      <section className={styles.content}>
        <h3>Oops! Something has gone wrong.</h3>
        <h5>
          Click
          <NavLink to="/tasks"> here </NavLink>
          to return to your tasks.
        </h5>
      </section>
    </main>
  );
};

export default Error;

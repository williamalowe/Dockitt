import { NavLink } from "react-router-dom";
import styles from "./LogoHeader.module.css";

const LogoHeader = () => {
  return (
    <div className={styles.header}>
      <h3>
        <NavLink>Dockitt.</NavLink>
      </h3>
      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </div>
  );
};

export default LogoHeader;

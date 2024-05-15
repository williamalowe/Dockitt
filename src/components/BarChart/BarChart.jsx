import { useRef } from "react";
import styles from "./BarChart.module.css";

const BarChart = ({ tasks }) => {
  const backlogWidth =
    (tasks.filter((task) => task.status === "backlog").length / tasks.length) *
    100;
  const inProgressWidth =
    (tasks.filter((task) => task.status === "in progress").length /
      tasks.length) *
    100;
  const underReviewWidth =
    (tasks.filter((task) => task.status === "under review").length /
      tasks.length) *
    100;
  const completedWidth =
    (tasks.filter((task) => task.status === "completed").length /
      tasks.length) *
    100;

  return (
    <div className={styles.chart}>
      <div className={styles.section}>
        <h5>Backlog</h5>
        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{ width: `${backlogWidth}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.section}>
        <h5>In Progress</h5>
        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{ width: `${inProgressWidth}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.section}>
        <h5>Under Review</h5>
        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{ width: `${underReviewWidth}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.section}>
        <h5>Completed</h5>
        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{ width: `${completedWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;

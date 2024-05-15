import { useContext } from "react";
import styles from "./MobCard.module.css";
import { TaskContext } from "../../views/Home/Home";

const MobCard = ({ task, desc, prio, stat }) => {
  const { updateStatus, rollbackStatus, cancelTask } = useContext(TaskContext);

  return (
    <div className={styles.card}>
      <div className={styles.title}>{task}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.stats}>
        <div className={styles.statItem}>Priority: {prio}</div>
        <div className={styles.statItem}>Status: {stat}</div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => updateStatus(task)}>
          <img src="./tri-up.svg" alt="update icon" />
        </button>
        <button onClick={() => rollbackStatus(task)}>
          <img src="./tri-down.svg" alt="rollback icon" />
        </button>
        <button onClick={() => cancelTask(task)}>
          <img src="./cross.svg" alt="rollback icon" />
        </button>
      </div>
    </div>
  );
};
export default MobCard;

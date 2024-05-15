import styles from "./StatCard.module.css";

const StatCard = ({ title, number, total }) => {
  return (
    <div className={styles.card}>
      <h5>{title} Tasks</h5>
      <h3>{number} Tasks</h3>
      <h5>{Math.round((number / total) * 100)}% of active tasks</h5>
    </div>
  );
};

export default StatCard;

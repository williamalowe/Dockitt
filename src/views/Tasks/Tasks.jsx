import styles from './Tasks.module.css';
import TaskList from '../../components/TaskList/TaskList';

const Tasks = () => {
  
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h3>Welcome back.</h3>
        <h5>Here are your current tasks.</h5>
        <div className={styles.list}>
          <TaskList />
        </div>
      </div>
    </section>
  )
}

export default Tasks

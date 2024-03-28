import { useContext, useState } from 'react';
import { TaskContext } from '../Home/Home';
import styles from './Tasks.module.css';
import TaskList from '../../components/TaskList/TaskList';

const Tasks = () => {
  const { tasks, addTask } = useContext(TaskContext);
  const [newDesc, setNewDesc] = useState(null);
  const [newPrio, setNewPrio] = useState(null);
  const [newStat, setNewStat] = useState(null);
  
  const addNewTask = () => {
    addTask(newDesc, newPrio, newStat);
  };
  
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

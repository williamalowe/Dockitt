import { useRef } from 'react';
import styles from './NewTaskForm.module.css';

const NewTaskForm = ({ handleClick }) => {
  const check = useRef();
  
  return (
    <div className={styles.form}>
      <h3>New Task</h3>
      <input className={styles.descInput} type="text" placeholder='Task Description...'/>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <label>Status:</label>
          <div className={styles.radio}>
            <input type="radio" name="status" value='backlog'/>
            <label>Backlog</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="status" value='in progress'/>
            <label>In Progress</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="status" value='under review'/>
            <label>Under Review</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="status" value='completed'/>
            <label>Completed</label>
          </div>
        </div>
        <div className={styles.right}>
          <label>Priority:</label>
          <div className={styles.radio}>
            <input type="radio" name="priority" value='low'/>
            <label>Low</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="priority" value='medium'/>
            <label>Medium</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="priority" value='high'/>
            <label>High</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" name="priority" value='urgent'/>
            <label>Urgent</label>
          </div>
        </div>
      </div>
      <button className={styles.submit} onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTaskForm

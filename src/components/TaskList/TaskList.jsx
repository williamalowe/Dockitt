import { useContext, useRef } from 'react'
import { TaskContext } from '../../views/Home/Home';
import styles from './TaskList.module.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const TaskList = () => {
  const { tasks, addTask } = useContext(TaskContext);
  const drawerElement = useRef();
  const tableElement = useRef();

  const toggleDrawer = () => {
    if(drawerElement.current.style.left === "-20%") {
      drawerElement.current.style.left = "0%";
      drawerElement.current.style.width = "25%";
      tableElement.current.style.marginLeft = "1rem";
    } else {
      drawerElement.current.style.left = "-20%";
      drawerElement.current.style.width = "0";
      tableElement.current.style.marginLeft = "0"
    }
  }
  return (
    <div className={styles.tasks}>
      <ul className={styles.filter}>
        <li>All Tasks</li>
        <li>Backlog</li>
        <li>In Progress</li>
        <li>Under Review</li>
        <li>Completed</li>
        <li>Cancelled</li>
        <li onClick={toggleDrawer}>New Task</li>
      </ul>
      <div className={styles.content}>
        {/* drawer */}
        <div className={styles.drawer}ref={drawerElement}>
          <NewTaskForm 
            handleClick={toggleDrawer}
          />
        </div>
        {/* tasks */}
        <div className={styles.taskslist} ref={tableElement}>
          <table className={styles.table}>
            <thead className={styles.header}>
              <tr>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody className={styles.body}>
              {
                tasks.map((task) => 
                  <tr key={task.date}>
                    <td>{task.date}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}

export default TaskList

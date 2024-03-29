import { useState, useEffect, useContext, useRef } from 'react'
import { TaskContext } from '../../views/Home/Home';
import styles from './TaskList.module.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const TaskList = () => {
  const { tasks, updateStatus, rollbackStatus, cancelTask } = useContext(TaskContext);
  const drawerElement = useRef();
  const tableElement = useRef();

  const [filter, setFilter] = useState(0)
  const [filteredList, setFilteredList] = useState([...tasks])

  useEffect(() => {
    if (filter === 0) {
      setFilteredList([...tasks])
    } else if (filter === 1) {
      setFilteredList([...tasks.filter((task) => task.status === 'backlog')])
    } else if (filter === 2) {
      setFilteredList([...tasks.filter((task) => task.status === 'in progress')])
    } else if (filter === 3) {
      setFilteredList([...tasks.filter((task) => task.status === 'under review')])
    } else if (filter === 4) {
      setFilteredList([...tasks.filter((task) => task.status === 'completed')])
    } else if (filter === 5) {
      setFilteredList([...tasks.filter((task) => task.status === 'cancelled')])
    }
  }, [filter, tasks])
// console.log(tasks.filter((task) => task.status === 'backlog'))

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
        <li onClick={() => setFilter(0)}>All Tasks</li>
        <li onClick={() => setFilter(1)}>Backlog</li>
        <li onClick={() => setFilter(2)}>In Progress</li>
        <li onClick={() => setFilter(3)}>Under Review</li>
        <li onClick={() => setFilter(4)}>Completed</li>
        <li onClick={() => setFilter(5)}>Cancelled</li>
        <li onClick={toggleDrawer}>New Task</li>
      </ul>
      <div className={styles.content}>
        {/* drawer */}
        <div className={styles.drawer}ref={drawerElement}>
          <NewTaskForm 
            handleClose={toggleDrawer}
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
                <th>Update</th>
              </tr>
            </thead>
            <tbody className={styles.body}>
              {
                filteredList.map((task) => 
                  <tr key={task.date}>
                    <td>{task.date}</td>
                    <td><span className={styles.tag}>{task.tag}</span> {task.description}</td>
                    <td>{task.status}
                    </td>
                    <td>{task.priority}</td>
                    <td>
                    <span className={styles.buttons}>
                        <button onClick={() => updateStatus(task.date)}>
                          <img src="./tri-up.svg" alt="update icon" />
                        </button>
                        <button onClick={() => rollbackStatus(task.date)}>
                          <img src="./tri-down.svg" alt="rollback icon" />
                        </button>
                        <button onClick={() => cancelTask(task.date)}>
                          <img src="./cross.svg" alt="rollback icon" />
                        </button>
                      </span>
                    </td>
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

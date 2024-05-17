import { useState, useEffect, useContext, useRef } from "react";
import { TaskContext } from "../../views/Home/Home";
import styles from "./TaskList.module.css";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import MobCard from "../MobCard/MobCard";

const TaskList = () => {
  const { tasks, loadTestData, updateStatus, rollbackStatus, cancelTask } =
    useContext(TaskContext);
  const drawerElement = useRef();
  const tableElement = useRef();
  const filterAllElement = useRef();
  const filterBacklogElement = useRef();
  const filterInProgressElement = useRef();
  const filterUnderReviewElement = useRef();
  const filterCompletedElement = useRef();
  const filterCancelledElement = useRef();
  const mobDropdownElement = useRef();
  const mobTaskFormElement = useRef();

  const [filter, setFilter] = useState(0);
  const [filteredList, setFilteredList] = useState([...tasks]);

  useEffect(() => {
    drawerElement.current.style.left = "-20%";
    mobDropdownElement.current.style.display = "none";
    mobTaskFormElement.current.style.display = "none";
  }, []);
  useEffect(() => {
    if (filter === 0) {
      setFilteredList([...tasks]);
      setFilterColor(filterAllElement);
    } else if (filter === 1) {
      setFilteredList([...tasks.filter((task) => task.status === "backlog")]);
      setFilterColor(filterBacklogElement);
    } else if (filter === 2) {
      setFilteredList([
        ...tasks.filter((task) => task.status === "in progress"),
      ]);
      setFilterColor(filterInProgressElement);
    } else if (filter === 3) {
      setFilteredList([
        ...tasks.filter((task) => task.status === "under review"),
      ]);
      setFilterColor(filterUnderReviewElement);
    } else if (filter === 4) {
      setFilteredList([...tasks.filter((task) => task.status === "completed")]);
      setFilterColor(filterCompletedElement);
    } else if (filter === 5) {
      setFilteredList([...tasks.filter((task) => task.status === "cancelled")]);
      setFilterColor(filterCancelledElement);
    }
  }, [filter, tasks]);

  const toggleDrawer = () => {
    if (drawerElement.current.style.left === "-20%") {
      drawerElement.current.style.left = "0%";
      drawerElement.current.style.width = "25%";
      tableElement.current.style.marginLeft = "1rem";
    } else {
      drawerElement.current.style.left = "-20%";
      drawerElement.current.style.width = "0";
      tableElement.current.style.marginLeft = "0";
    }
  };
  const setFilterColor = (element) => {
    filterAllElement.current.style.color = "var(--text)";
    filterBacklogElement.current.style.color = "var(--text)";
    filterInProgressElement.current.style.color = "var(--text)";
    filterUnderReviewElement.current.style.color = "var(--text)";
    filterCompletedElement.current.style.color = "var(--text)";
    filterCancelledElement.current.style.color = "var(--text)";
    // apply filter color
    element.current.style.color = "var(--highlight)";
  };
  const toggleDropdown = () => {
    if (mobDropdownElement.current.style.display === "none") {
      mobDropdownElement.current.style.display = "flex";
    } else {
      mobDropdownElement.current.style.display = "none";
    }
  };
  const toggleMobTaskForm = () => {
    if (mobTaskFormElement.current.style.display === "none") {
      mobTaskFormElement.current.style.display = "flex";
    } else {
      mobTaskFormElement.current.style.display = "none";
    }
  };

  return (
    <div className={styles.tasks}>
      <ul className={styles.filter}>
        <li onClick={() => setFilter(0)} ref={filterAllElement}>
          All Tasks ({tasks.length})
        </li>
        <li onClick={() => setFilter(1)} ref={filterBacklogElement}>
          Backlog ({tasks.filter((task) => task.status === "backlog").length})
        </li>
        <li onClick={() => setFilter(2)} ref={filterInProgressElement}>
          In Progress (
          {tasks.filter((task) => task.status === "in progress").length})
        </li>
        <li onClick={() => setFilter(3)} ref={filterUnderReviewElement}>
          Under Review (
          {tasks.filter((task) => task.status === "under review").length})
        </li>
        <li onClick={() => setFilter(4)} ref={filterCompletedElement}>
          Completed (
          {tasks.filter((task) => task.status === "completed").length})
        </li>
        <li onClick={() => setFilter(5)} ref={filterCancelledElement}>
          Cancelled (
          {tasks.filter((task) => task.status === "cancelled").length})
        </li>
        <li onClick={toggleDrawer}>New Task</li>
      </ul>
      <div className={styles.content}>
        {/* drawer */}
        <div className={styles.drawer} ref={drawerElement}>
          <NewTaskForm handleClose={toggleDrawer} />
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
              {tasks.length === 0 ? (
                <tr className={styles.notice}>
                  <td>
                    <div>No pending tasks!</div>
                    <button className={styles.addButton} onClick={toggleDrawer}>
                      Add Task
                    </button>
                    <button
                      className={styles.loadTestDataButton}
                      onClick={() => loadTestData()}
                    >
                      Load Example Data
                    </button>
                  </td>
                </tr>
              ) : filteredList.length === 0 ? (
                <tr className={styles.notice}>
                  <td>No tasks in this state.</td>
                </tr>
              ) : (
                filteredList.map((task) => (
                  <tr key={task.date}>
                    <td>{task.date}</td>
                    <td>
                      <span className={styles.tag}>{task.tag}</span>{" "}
                      {task.description}
                    </td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                    <td>
                      <span className={styles.buttons}>
                        <button onClick={() => updateStatus(task.date)}>
                          <img src="./tri-up.svg" alt="update icon" />
                          <div className={styles.updateDescription}>
                            Push status
                          </div>
                        </button>
                        <button onClick={() => rollbackStatus(task.date)}>
                          <img src="./tri-down.svg" alt="rollback icon" />
                          <div className={styles.updateDescription}>
                            Drop status
                          </div>
                        </button>
                        <button onClick={() => cancelTask(task.date)}>
                          <img src="./cross.svg" alt="rollback icon" />
                          <div className={styles.updateDescription}>
                            Cancel Task
                          </div>
                        </button>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* mobile view */}
        <div className={styles.mobView}>
          <h3>
            Showing
            <div className={styles.dropdown}>
              <button onClick={toggleDropdown}>
                {filter === 0 ? (
                  <>all</>
                ) : filter === 1 ? (
                  <>backlog</>
                ) : filter === 2 ? (
                  <>in progress</>
                ) : filter === 3 ? (
                  <>under review</>
                ) : filter === 4 ? (
                  <>completed</>
                ) : (
                  <>cancelled</>
                )}
                <img
                  src="./tri-down.svg"
                  alt="dropdown"
                  className={styles.dropdownArrow}
                />
              </button>
              <ul className={styles.dropdownMenu} ref={mobDropdownElement}>
                <li className={styles.menuItem}>
                  <button onClick={() => setFilter(0) + toggleDropdown()}>
                    All Tasks
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button onClick={() => setFilter(1) + toggleDropdown()}>
                    Backlog
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button onClick={() => setFilter(2) + toggleDropdown()}>
                    In Progress
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button onClick={() => setFilter(3) + toggleDropdown()}>
                    Under Review
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button onClick={() => setFilter(4) + toggleDropdown()}>
                    Completed
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button onClick={() => setFilter(5) + toggleDropdown()}>
                    Cancelled
                  </button>
                </li>
              </ul>
            </div>
            tasks
          </h3>
          <button
            className={styles.mobNewTaskButton}
            onClick={toggleMobTaskForm}
          >
            New Task
          </button>
          <div className={styles.mobForm} ref={mobTaskFormElement}>
            <NewTaskForm handleClose={toggleMobTaskForm}/>
          </div>
          <div className={styles.mobList}>
            {filteredList.map((task) => (
              <MobCard
                key={task.date}
                task={task.date}
                desc={task.description}
                prio={task.priority}
                stat={task.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

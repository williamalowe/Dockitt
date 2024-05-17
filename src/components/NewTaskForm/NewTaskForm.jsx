import { useRef, useState, useContext } from "react";
import styles from "./NewTaskForm.module.css";
import { TaskContext } from "../../views/Home/Home";

const NewTaskForm = ({ handleClose }) => {
  const { addTask } = useContext(TaskContext);
  const [newDesc, setNewDesc] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newStat, setNewStat] = useState("backlog");
  const [newPrio, setNewPrio] = useState("low");
  const backlogCheck = useRef();
  const inProgressCheck = useRef();
  const underReviewCheck = useRef();
  const completedCheck = useRef();
  const lowCheck = useRef();
  const mediumCheck = useRef();
  const highCheck = useRef();
  const urgentCheck = useRef();
  const errElement = useRef();

  const handleSubmit = () => {
    if (newDesc !== "") {
      addTask(newDesc, newTag, newStat, newPrio);
      setNewDesc("");
      setNewTag("");
      setNewStat("backlog");
      setNewPrio("low");
      backlogCheck.current.checked = true;
      lowCheck.current.checked = true;
      errElement.current.style.display = "none";
    } else {
      errElement.current.style.display = "block";
    }
  };

  const checkHandler = () => {
    // check status - default:backlog
    if (inProgressCheck.current.checked) {
      setNewStat(inProgressCheck.current.value);
    } else if (underReviewCheck.current.checked) {
      setNewStat(underReviewCheck.current.value);
    } else if (completedCheck.current.checked) {
      setNewStat(completedCheck.current.value);
    } else {
      setNewStat(backlogCheck.current.value);
    }
    // check priority - default:low
    if (mediumCheck.current.checked) {
      setNewPrio(mediumCheck.current.value);
    } else if (highCheck.current.checked) {
      setNewPrio(highCheck.current.value);
    } else if (urgentCheck.current.checked) {
      setNewPrio(urgentCheck.current.value);
    } else {
      setNewPrio(lowCheck.current.value);
    }
  };

  return (
    <div className={styles.form}>
      <h3>New Task</h3>
      <input
        className={styles.descInput}
        type="text"
        value={newDesc}
        onChange={(e) => {
          setNewDesc(e.target.value);
        }}
        placeholder="Task Description..."
        required
      />
      <label>Tag (optional):</label>
      <input
        className={styles.tagInput}
        type="text"
        value={newTag}
        onChange={(e) => {
          setNewTag(e.target.value);
        }}
        placeholder="Bug/Fix/Docs..."
      />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <label>Status:</label>
          <div className={styles.radio}>
            <input
              type="radio"
              name="status"
              ref={backlogCheck}
              onChange={checkHandler}
              value="backlog"
            />
            <label>Backlog</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="status"
              ref={inProgressCheck}
              onChange={checkHandler}
              value="in progress"
            />
            <label>In Progress</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="status"
              ref={underReviewCheck}
              onChange={checkHandler}
              value="under review"
            />
            <label>Under Review</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="status"
              ref={completedCheck}
              onChange={checkHandler}
              value="completed"
            />
            <label>Completed</label>
          </div>
        </div>
        <div className={styles.right}>
          <label>Priority:</label>
          <div className={styles.radio}>
            <input
              type="radio"
              name="priority"
              ref={lowCheck}
              onChange={checkHandler}
              value="low"
            />
            <label>Low</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="priority"
              ref={mediumCheck}
              onChange={checkHandler}
              value="medium"
            />
            <label>Medium</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="priority"
              ref={highCheck}
              onChange={checkHandler}
              value="high"
            />
            <label>High</label>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="priority"
              ref={urgentCheck}
              onChange={checkHandler}
              value="urgent"
            />
            <label>Urgent</label>
          </div>
        </div>
      </div>
      <div className={styles.error} ref={errElement}>
        Task description is required.
      </div>
      <div className={styles.buttons}>
        <button className={styles.submit} onClick={handleSubmit}>
          Add Task
        </button>
        <button className={styles.submit} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NewTaskForm;

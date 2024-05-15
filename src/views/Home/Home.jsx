import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import styles from "./Home.module.css";
import testData from "../../assets/testdata.json";

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  updateStatus: () => {},
  rollbackStatus: () => {},
  cancelTask: () => {},
  loadTestData: () => {},
});

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  // const [tasks, setTasks] = useState([])
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add New Task
  const addTask = (desc, tag, stat, prio) => {
    const newTask = {
      date: Date.now(),
      description: desc,
      tag: tag,
      status: stat,
      priority: prio,
    };
    setTasks((tasks) => [...tasks, newTask]);
  };
  // Update Task Status
  const updateStatus = (id) => {
    let newList = tasks.filter((task) => task.date !== id);
    let target = tasks.filter((task) => task.date === id);

    if (target[0].status === "completed") {
      setTasks([...newList]);
    } else {
      let newStat = "";

      if (target[0].status === "backlog") {
        newStat = "in progress";
      } else if (target[0].status === "cancelled") {
        newStat = "backlog";
      } else if (target[0].status === "in progress") {
        newStat = "under review";
      } else if (target[0].status === "under review") {
        newStat = "completed";
      }

      let updatedTask = {
        date: target[0].date,
        description: target[0].description,
        tag: target[0].tag,
        status: newStat,
        priority: target[0].priority,
      };
      setTasks([...newList, updatedTask]);
    }
  };
  const rollbackStatus = (id) => {
    let newList = tasks.filter((task) => task.date !== id);
    let target = tasks.filter((task) => task.date === id);

    if (target[0].status === "cancelled") {
      setTasks([...newList]);
    } else {
      let newStat = "";

      if (target[0].status === "completed") {
        newStat = "under review";
      } else if (target[0].status === "under review") {
        newStat = "in progress";
      } else if (target[0].status === "in progress") {
        newStat = "backlog";
      } else if (target[0].status === "backlog") {
        newStat = "cancelled";
      }

      let updatedTask = {
        date: target[0].date,
        description: target[0].description,
        tag: target[0].tag,
        status: newStat,
        priority: target[0].priority,
      };

      console.log(updatedTask);
      setTasks([...newList, updatedTask]);
    }
  };

  const cancelTask = (id) => {
    let newList = tasks.filter((task) => task.date !== id);
    let target = tasks.filter((task) => task.date === id);

    if (target[0].status !== "cancelled") {
      let updatedTask = {
        date: target[0].date,
        description: target[0].description,
        tag: target[0].tag,
        status: "cancelled",
        priority: target[0].priority,
      };
      setTasks([...newList, updatedTask]);
    } else if (target[0].status === "cancelled") {
      setTasks([...newList]);
    }
  };

  const loadTestData = () => {
    setTasks([...testData]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateStatus,
        rollbackStatus,
        cancelTask,
        loadTestData,
      }}
    >
      <main className={styles.main}>
        <LogoHeader />
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </TaskContext.Provider>
  );
};

export default Home;

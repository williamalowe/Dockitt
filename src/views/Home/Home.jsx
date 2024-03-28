import { Outlet } from 'react-router-dom';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import styles from './Home.module.css';
import { createContext, useState } from 'react';

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  updateStatus: () => {},
  rollbackStatus: () => {}
});

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      date: '1711591972253',
      description: 'Some of the project dependencies are outdated, need to update them to the latest versions',
      tag: 'fix',
      status: 'backlog',
      priority: 'high'
    },
    {
      date: '1711593253002',
      description: 'Update changelog documentation',
      tag: 'Docs',
      status: 'in progress',
      priority: 'medium'
    }
  ]);
  // Add New Task
  const addTask = (desc, tag, stat, prio) => {
    const newTask = {
      date: Date.now(),
      description: desc,
      tag: tag,
      status: stat,
      priority: prio
    };
  setTasks(tasks => [...tasks, newTask]);
  };
  // Update Task Status
  const updateStatus = (id) => {
    let newList = tasks.filter((task) => task.date !== id);
    let target = tasks.filter((task) => task.date === id);

    if (target[0].status === 'completed') {
      setTasks([...newList])
    } else {
      let newStat = '';

      if (target[0].status === 'backlog') {
        newStat = 'in progress';
      } else if (target[0].status === 'in progress') {
        newStat = 'under review';
      } else if (target[0].status === 'under review') {
        newStat = 'completed';
      }

      let updatedTask = {
        date: target[0].date,
        description: target[0].description,
        tag: target[0].tag,
        status: newStat,
        priority: target[0].priority
      }

      console.log(updatedTask)
      setTasks([...newList, updatedTask])
    }
  }
  const rollbackStatus = (id) => {
    let newList = tasks.filter((task) => task.date !== id);
    let target = tasks.filter((task) => task.date === id);

    if (target[0].status === 'cancelled') {
      setTasks([...newList])
    } else {
      let newStat = '';

      if (target[0].status === 'completed') {
        newStat = 'under review';
      } else if (target[0].status === 'under review') {
        newStat = 'in progress';
      } else if (target[0].status === 'in progress') {
        newStat = 'backlog';
      } else if (target[0].status === 'backlog') {
        newStat = 'cancelled';
      }

      let updatedTask = {
        date: target[0].date,
        description: target[0].description,
        tag: target[0].tag,
        status: newStat,
        priority: target[0].priority
      }

      console.log(updatedTask)
      setTasks([...newList, updatedTask])
    }
  }
  return (
    <TaskContext.Provider value={{ tasks, addTask, updateStatus, rollbackStatus }}>
      <main className={styles.main}>
        <LogoHeader />
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
    </TaskContext.Provider>
  )
}

export default Home

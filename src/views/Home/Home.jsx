import { Outlet } from 'react-router-dom';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import styles from './Home.module.css';
import { createContext, useState } from 'react';

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {}
});

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      date: '1711591972253',
      description: 'Some of the project dependencies are outdated, need to update them to the latest versions',
      tag: 'fix',
      status: 'backlog',
      priority: 'high'
    }
  ]);
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

  return (
    <TaskContext.Provider value={{ tasks, addTask}}>
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

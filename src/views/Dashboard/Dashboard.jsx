import { useContext } from 'react';
import { TaskContext } from '../Home/Home';
import styles from './Dashboard.module.css';
import StatCard from '../../components/StatCard/StatCard';
import BarChart from '../../components/BarChart/BarChart';

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const activeTasks = tasks.filter((task) => task.status !== 'cancelled')

  return (
    <section className={styles.dashboard}>
      <div className={styles.upper}>
        <h3>Dashboard</h3>
        <div className={styles.upperContent}>
          <div className={styles.numbers}>
            <StatCard 
              title="Backlog"
              number={activeTasks.filter((task) => task.status === 'backlog').length}
              total={activeTasks.length}
            />
          </div>
          <div className={styles.numbers}>
            <StatCard 
              title="In Progress"
              number={activeTasks.filter((task) => task.status === 'in progress').length}
              total={activeTasks.length}
            /></div>
          <div className={styles.numbers}>
            <StatCard 
              title="Under Review"
              number={activeTasks.filter((task) => task.status === 'under review').length}
              total={activeTasks.length}
            /></div>
          <div className={styles.numbers}>
            <StatCard 
              title="Completed"
              number={activeTasks.filter((task) => task.status === 'completed').length}
              total={activeTasks.length}
            /></div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.lowerLeft}>
          <div className={styles.graphContainer}>
            <BarChart 
              tasks={activeTasks}
            />
          </div>
          <div className={styles.dotContainer}>

          </div>
        </div>
        <div className={styles.lowerRight}></div>
      </div>
    </section>
  )
}

export default Dashboard

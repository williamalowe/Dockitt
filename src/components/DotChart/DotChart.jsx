import styles from './DotChart.module.css';

const DotChart = ({ tasks }) => {
  const backlogTasks = tasks.filter((task) => task.status === 'backlog');
  const inProgressTasks = tasks.filter((task) => task.status === 'in progress');
  const underReviewTasks = tasks.filter((task) => task.status === 'under review');
  const completedTasks = tasks.filter((task) => task.status === 'completed');
  return (
    <div className={styles.chart}>
      <div className={styles.section}>
        {/* dots here */}
        <div className={styles.dotContainer}>
         {
          backlogTasks.map((tasks, index) => 
            <div className={styles.dot} key={index}>
              <div className={styles.fill}></div>
            </div>
          )
         }
        </div>
        <div className={styles.header}>Backlog</div>
      </div>
      <div className={styles.section}>
        {/* dots here */}
        <div className={styles.dotContainer}>
         {
          inProgressTasks.map((tasks, index) => 
            <div className={styles.dot} key={index}>
              <div className={styles.fill}></div>
            </div>
          )
         }
        </div>
        <div className={styles.header}>In Progress</div>
      </div>
      <div className={styles.section}>
        {/* dots here */}
        <div className={styles.dotContainer}>
         {
          inProgressTasks.map((tasks, index) => 
            <div className={styles.dot} key={index}>
              <div className={styles.fill}></div>
            </div>
          )
         }
        </div>
        <div className={styles.header}>Under Review</div>
      </div>
      <div className={styles.section}>
        {/* dots here */}
        <div className={styles.dotContainer}>
         {
          completedTasks.map((tasks, index) => 
            <div className={styles.dot} key={index}>
              <div className={styles.fill}></div>
            </div>
          )
         }
        </div>
        <div className={styles.header}>Completed</div>
      </div>
    </div>
  )
}

export default DotChart

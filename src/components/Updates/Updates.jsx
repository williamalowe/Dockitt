import styles from './Updates.module.css';

const Updates = () => {
  return (
    <article className={styles.updates}>
      <h3>Recent Changes</h3>
      <h5>There have been 5 updates today</h5>
      <div className={styles.changes}>
        <div className={styles.update}>
          <div className={styles.user}>
            <img src="./user.svg" alt="user profile picture" />
            User 0001
          </div>
          <div className={styles.info}>
            <div className={styles.upper}>
            Task: 1711937140141 Cancelled
            </div>
            <div className={styles.lower}>
              Task cancelled
            </div>
          </div>
        </div>
        <div className={styles.update}>
          <div className={styles.user}>
            <img src="./user.svg" alt="user profile picture" />
            User 0002
          </div>
          <div className={styles.info}>
            <div className={styles.upper}>
            Task: 1711937164416 Updated
            </div>
            <div className={styles.lower}>
              Task moved from 'Backlog' to 'In Progress'
            </div>
          </div>
        </div>
        <div className={styles.update}>
          <div className={styles.user}>
            <img src="./user.svg" alt="user profile picture" />
            User 0002
          </div>
          <div className={styles.info}>
            <div className={styles.upper}>
            Task: 1711937802797 Added
            </div>
            <div className={styles.lower}>
              New Task added to 'Backlog'
            </div>
          </div>
        </div>
        <div className={styles.update}>
          <div className={styles.user}>
            <img src="./user.svg" alt="user profile picture" />
            User 0001
          </div>
          <div className={styles.info}>
            <div className={styles.upper}>
            Task: 1711937262149 Updated
            </div>
            <div className={styles.lower}>
              Task moved from 'In Progress' to 'Under Review'
            </div>
          </div>
        </div>
        <div className={styles.update}>
          <div className={styles.user}>
            <img src="./user.svg" alt="user profile picture" />
            User 0001
          </div>
          <div className={styles.info}>
            <div className={styles.upper}>
            Task: 1711937495842 Completed
            </div>
            <div className={styles.lower}>
              Task completed
            </div>
          </div>
        </div>
        <div className={styles.updateMsg}>
          This update-component is not completed and is only displayed for demonstration purposes.
        </div>
      </div>
    </article>
  )
}

export default Updates

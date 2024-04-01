import { NavLink } from 'react-router-dom';
import styles from './LogoHeader.module.css';

const LogoHeader = () => {
  return (
    <div className={styles.header}>
      <h3>
        <NavLink>dockitt.</NavLink>
      </h3>
    </div>
  )
}

export default LogoHeader

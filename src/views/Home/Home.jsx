import { Outlet } from 'react-router-dom';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <LogoHeader />
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  )
}

export default Home

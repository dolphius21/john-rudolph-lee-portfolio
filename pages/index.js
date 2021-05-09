import Banner from '../components/banner';
import HeadComp from '../components/head';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComp />
      <Navbar />
      <Banner />
    </div>
  );
}

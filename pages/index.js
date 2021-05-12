import About from '../components/about';
import Banner from '../components/banner';
import HeadComp from '../components/head';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComp />
      <Navbar />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

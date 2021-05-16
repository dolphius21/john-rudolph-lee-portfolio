import '../styles/globals.css';
import '../styles/animations.css';
import HeadComp from '../components/head';
import NavBar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadComp />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

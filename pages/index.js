import { useState } from 'react';
import About from '../components/about';
import Banner from '../components/banner';
import Projects from '../components/projects';
import Sofwares from '../components/softwares';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Modal from '../components/modal';

export default function Home() {
  const [modal, setModal] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} modal={modal} />}
      <main>
        <Banner />
        <About />
        <Projects />
        <Sofwares />
        <Contact setShowModal={setShowModal} setModal={setModal} />
        <Footer />
      </main>
    </>
  );
}

import Form from './form';
import SocialMedia from './socialMedia';

const Contact = ({ setShowModal, setModal }) => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="flex">
          <SocialMedia />
          <Form setShowModal={setShowModal} setModal={setModal} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

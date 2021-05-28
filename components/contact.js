import Form from './form';
import SocialMedia from './socialMedia';

const Contact = ({ setShowModal, setModal }) => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-text">
          <h4>Let's talk!</h4>
          <p>
            I'm available for work or projects. You can contact me by email at
            johnrudolphlee@gmail.com
          </p>
        </div>
        <SocialMedia />
        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Contact;

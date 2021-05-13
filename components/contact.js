import Form from './form';
import SocialMedia from './socialMedia';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="flex">
          <SocialMedia />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;

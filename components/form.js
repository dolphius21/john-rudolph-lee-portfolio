import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <div className="form-container">
      <h4>Let's talk!</h4>
      <p>
        I'm available for work or projects. You can contact me using the form
        below, or by emailing me at johnrudolphlee@gmail.com
      </p>
      <form
        action="https://formsubmit.co/johnrudolphlee@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <input type="text" name="name" placeholder="Name..." required />
        </div>
        <div className="form-group">
          <input type="text" name="email" placeholder="Email..." required />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="message"
            rows={4}
            placeholder="Message..."
            required
          />
        </div>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

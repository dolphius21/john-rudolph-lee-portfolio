import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).required()
});

const Form = ({ setShowModal, setModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    const config = {
      method: 'post',
      url: `${process.env.end_point}/api/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        setModal('Success');
        setShowModal(true);
        reset();
      }
    } catch (err) {
      setModal('Error');
      setShowModal(true);
      console.error('error:', err);
    }
  };
  return (
    <div className="form-container">
      <h4>Let's talk!</h4>
      <p>
        I'm available for work or projects. You can contact me using the form
        below, or by emailing me at johnrudolphlee@gmail.com
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input {...register('name')} type="text" name="name" />
          <span className="error-message">{errors.name?.message}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input {...register('email')} type="text" name="email" />
          <span className="error-message">{errors.email?.message}</span>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            {...register('message')}
            type="text"
            name="message"
            rows={4}
          />
          <span className="error-message">{errors.message?.message}</span>
        </div>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

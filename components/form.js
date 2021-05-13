const Form = () => {
  return (
    <div className="form-container">
      <h4>Reach out to me</h4>
      <p>It's my pleasure to help you with your projects.</p>
      <form
        action="https://formsubmit.co/johnrudolphlee@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="message"
            id="message"
            rows={3}
            placeholder="Message"
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

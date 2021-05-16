import { FaTimes } from 'react-icons/fa';

const Modal = ({ setShowModal, modal }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button type="button" className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>
        <h2
          className={`modal-heading ${
            modal === 'Success' ? 'is-success' : 'is-error'
          }`}
        >
          {modal === 'Success' ? 'Thank You!' : 'Error!'}
        </h2>

        <p className="modal-text">
          {modal === 'Success'
            ? 'The form was submitted successfully. Rudolph will reply to your message as soon as possible.'
            : 'Ooops!, Something went wrong!'}
        </p>
      </div>
    </div>
  );
};

export default Modal;

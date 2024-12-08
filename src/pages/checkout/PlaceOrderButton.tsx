import { useState, useCallback } from 'react';
import Modal from 'react-modal';

interface PlaceOrderButtonProps {
  validateForm: () => boolean;
}

function PlaceOrderButton({ validateForm }: PlaceOrderButtonProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlePlaceOrder = useCallback(() => {
    const isValid = validateForm();
    if (isValid) {
      setModalIsOpen(true);
    }
  }, [validateForm]);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <>
      <button
        className="w-full mx-auto border-2 border-black py-4 rounded-2xl text-xl mb-14 md:w-80 md:mr-52 lg:mx-auto hover-white-custom"
        onClick={handlePlaceOrder}
      >
        Place Older
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Validation Success"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            color: 'black',
            maxWidth: '500px',
            margin: 'auto',
            textAlign: 'center',
          },
        }}
      >
        <h2>Form is Valid!</h2>
        <p>Congratulations! The form has been successfully validated.</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 "
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </>
  );
}

export default PlaceOrderButton;

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
            height: '400px',
            margin: 'auto',
            textAlign: 'center',
            background:
              'linear-gradient(225deg, rgba(255,243,227,1) 0%, rgba(184,142,47,1) 49%, rgba(236,237,237,0.9847161572052402) 100%)',
            borderRadius: '10px',
          },
        }}
      >
        <div className="bg-Goldenrod bg-opacity-50 rounded-xl">
          <h2 className="text-2xl mb-4 font-bold xl:text-4xl text-rose-800">
            Congratulations{' '}
          </h2>
          <p className="text-xl mb-4 text-white font-bold xl:text-4xl">
            {'Nome do usuario'}
          </p>
          <p className="text-white text-2xl mb-10">
            We are happy to know that we left your space with more style and
            refinement.
          </p>
          <button
            className="bg-white text-black py-4 px-4 w-8/12 mb-10 text-2xl rounded-lg hover:bg-black hover:text-white"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PlaceOrderButton;
